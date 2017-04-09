/**
 * Created by zzb on 17-1-19.
 */
export default {
  state:{
    message:''
  },
  mutations:{
    setMes(state,msg){
      state.message=msg
    }
  },
  actions:{
    setMes({commit},msg){
      commit('setMes',msg)
    }
  }
}
