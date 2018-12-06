import {
    $,
    uid,
    info,
    sleep,
    abort,
    Model,
    getUser,
    ResponseSerialize,
    ValidationRequired,
    ValidationMaxLength,
} from '@/simpli'
import Host from '@/model/Host'
import SecurityGroup from '@/model/SecurityGroup'
import Dashboard from '@/model/Dashboard'
import ConfigurationFile from '@/model/ConfigurationFile'
import AwsGlobal from '@/model/AwsGlobal'
import { plainToClass, classToPlain, serialize, deserialize } from 'class-transformer'
import _ from 'lodash'
import { success } from 'simpli-ts-vue'
import { S3Wrapper } from '@/app/S3Wrapper'
import Command from './Command'

export default class NetworkV2 extends S3Wrapper {

    $prefix = 'networks/'

    $id: string | null = null
    name: string | null = null
    runningSince: Date | null = null

    @ResponseSerialize(SecurityGroup)
    securityGroups: SecurityGroup[] = []

    @ResponseSerialize(Host)
    hosts: Host[] = []

    @ResponseSerialize(Dashboard)
    dashboards: Dashboard[] = []

    @ResponseSerialize(ConfigurationFile)
    configurationFiles: ConfigurationFile[] = []

    get isRunning(): boolean {return !!this.runningSince}

    async get(id: String) {
        const network = await super.get(id)

        if (this.isRunning) {
            await network.synchronizeHosts()
        }

        return network
    }

    //
    async build() {
        if (this.isRunning) { abort('This network is already running') }

        /* This method will in fact run EC2 instances, create security groups, key pairs,
        instance profiles, roles and prepare the instances to have their logs read
        */

        for (const host of this.hosts) {
            host.create()
        }

        this.runningSince = new Date()

        this.persist()
    }

    async addHost(host: Host) {
        if (this.hosts.find( (h) => h.$id === host.$id)) {
            abort(`Conflicting host ID`)
        }

        if (!host.$id) {
            host.$id = uid()
        }

        host.networkId = this.$id

        this.hosts.push(host)

        if (this.isRunning) {
            // If the network is already running, newly created hosts will be instantiated right away
            this.synchronizeHosts()
        } else {
            // Otherwise, information will be stored in S3, but nothing will be actually running
        }
        this.persist()
    }

    async addSecurityGroup() {
        // Adds a security group
        this.persist()
    }

    async addDashboard() {
        // Adds a dashboard
        this.persist()
    }

    async addConfigurationFile() {
        // Adds a configuration file
        this.persist()
    }

    async synchronizeHosts() {
        for (const host of this.hosts) {

            await host.transformFromAWS(this)
        }

        this.persist()
    }

    async synchronizeSecurityGroups() {
        for (const securityGroup of this.securityGroups) {
            securityGroup.transformFromAWS()
        }
    }
}
