

export default {
  state:{
    username:''
  },
  mutations: {
    logIn(state,user){
      state.username=user
    },
    logOut(state){
      sessionStorage.removeItem('user')
    }
  },
  actions: {
    logIn({commit},user) {
      commit('logIn',user)
    },
    logOut({commit}){
      commit('logOut')
    }
  }
}
