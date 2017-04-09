export default{
  state: {
    shouldLogin:true,
    hasLogin:false,
    info:''

  },
  mutations: {
    enableLogin(state) {
      state.shouldLogin = false
    },
    disableLogin(state) {
      state.shouldLogin = true
    },
    loginSuccess(state) {
      state.hasLogin = true
    },
    loginFail(state) {
      state.hasLogin = false
    },
    setInfo(state,msg){
      state.info=msg

    }
  },
  actions: {
    enableLogin({commit}) {
      commit('enableLogin')
    },
    disableLogin({commit}) {
      commit('disableLogin')
    },
    loginSuccess({commit}) {
      commit('loginSuccess')
    },
    loginFail({commit}) {
      commit('loginFail')
    },
    setInfo({commit},user){
      commit('setInfo',user)

    }
  }
}
