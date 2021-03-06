import {ActionTree, GetterTree, Module, MutationTree} from 'vuex'
import * as types from '@/store/mutation-types'
import {AuthState, RootState} from '@/types/store'
import {$, push, successAndPush, errorAndPush, infoAndPush, sleep} from '@/simpli'
import Authentication from '@/model/Authentication'
import AWS from 'aws-sdk'

// initial state
const state: AuthState = {
  accessKeyId: undefined,
  secretAccessKey: undefined,
  unauthenticatedPath: undefined,
  eventListener: {
    signIn: [],
    auth: [],
    signOut: [],
  },
}

// getters
const getters: GetterTree<AuthState, RootState> = {
  isLogged: ({accessKeyId, secretAccessKey}) => !!accessKeyId && !!secretAccessKey,
  accessKeyId: ({accessKeyId}) => accessKeyId,
  secretAccessKey: ({secretAccessKey}) => secretAccessKey,
  unauthenticatedPath: ({unauthenticatedPath}) => unauthenticatedPath,
}

// actions
const actions: ActionTree<AuthState, RootState> = {
  /**
   * Sign in account
   * @param state
   * @param commit
   * @param getters
   * @param model format => model: { account, password } (non-encrypted)
   */
  signIn: async ({state, commit, getters}, model: Authentication) => {
    // Show spinner while waiting validation (3000ms delay)
    await $.await.run(() => model.validate(), 'login', 3000)

    AWS.config.update({
      region: 'us-east-1',
      accessKeyId: model.accessKeyId!,
      secretAccessKey: model.secretAccessKey!,
    })

    localStorage.setItem('accessKeyId', model.accessKeyId!)
    localStorage.setItem('secretAccessKey', model.secretAccessKey!)

    commit(types.POPULATE)

    if (getters!.unauthenticatedPath && $.route.name !== 'login') {
      infoAndPush('system.info.welcome', getters!.unauthenticatedPath)
    } else infoAndPush('system.info.welcome', '/dashboard')

    commit(types.SET_UNAUTHENTICATED_PATH, undefined)

    state.eventListener.signIn.forEach((item) => item())
  },

  /**
   * Verifies authorization and refresh user info.
   * Note: If it is not logged then dispatches signOut
   * @param dispatch
   * @param commit
   * @param getters
   */
  auth: async ({dispatch, commit, getters}) => {
    commit(types.POPULATE)

    if (getters.isLogged) {
      AWS.config.update({
        region: 'us-east-1',
        accessKeyId: getters.accessKeyId,
        secretAccessKey: getters.secretAccessKey,
      })

      state.eventListener.auth.forEach((item) => item())
    } else {
      commit(types.SET_UNAUTHENTICATED_PATH, $.route.path)
      dispatch('signOut', true)
    }
  },

  /**
   * Sign out account
   * @param state
   * @param commit
   * @param showError
   */
  signOut: ({state, commit}, showError: boolean = false) => {
    if (showError) errorAndPush('system.error.unauthorized', '/login')
    else push('/login')

    commit(types.FORGET)
    state.eventListener.signOut.forEach((item) => item())
  },

  /**
   * On SignIn Event
   * @param dispatch
   * @param callback
   */
  onSignIn: ({dispatch}, callback) => dispatch('addEventListener', {name: 'signIn', callback}),

  /**
   * On Auth Event
   * @param dispatch
   * @param callback
   */
  onAuth: ({dispatch}, callback) => dispatch('addEventListener', {name: 'auth', callback}),

  /**
   * On SignOut Event
   * @param dispatch
   * @param callback
   */
  onSignOut: ({dispatch}, callback) => dispatch('addEventListener', {name: 'signOut', callback}),

  /**
   * Add event listener
   * @param commit
   * @param payload {name, callback}
   */
  addEventListener: ({commit}, payload) => commit(types.ADD_EVENT_LISTENER, payload),

  /**
   * Remove event listener
   * @param commit
   * @param payload
   */
  removeEventListener: ({commit}, payload) => commit(types.REMOVE_EVENT_LISTENER, payload),
}

// mutations
const mutations: MutationTree<AuthState> = {
  // Populate mutation
  [types.POPULATE](state) {
    const accessKeyId = localStorage.getItem('accessKeyId')
    const secretAccessKey = localStorage.getItem('secretAccessKey')

    if (accessKeyId) state.accessKeyId = accessKeyId
    if (secretAccessKey) state.secretAccessKey = secretAccessKey
  },
  // Forget mutation
  [types.FORGET](state) {
    state.accessKeyId = undefined
    state.secretAccessKey = undefined

    localStorage.removeItem('accessKeyId')
    localStorage.removeItem('secretAccessKey')
  },
  // Set UnauthenticatedPath mutation
  [types.SET_UNAUTHENTICATED_PATH](state, val) {
    state.unauthenticatedPath = val
  },
  // Add Event Listener mutation
  [types.ADD_EVENT_LISTENER](state, {name, callback}) {
    state.eventListener[name].push(callback)
  },
  // Remove Event Listener mutation
  [types.REMOVE_EVENT_LISTENER](state, {name, callback}) {
    if (callback) {
      const index = state.eventListener[name].findIndex((item) => item === callback)
      state.eventListener[name].splice(index, 1)
    } else {
      state.eventListener[name] = []
    }
  },
}

const namespaced: boolean = true
export const auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}
