<template>
  <div id="app">
  <!-- 导航栏 -->
    <my-head></my-head>
    <my-nav></my-nav>
    <router-view class="main_content"></router-view>
    <!-- 遮罩层 -->
    <my-mask v-if="loginSuc"></my-mask>
    <!-- 登录界面 -->
    <my-login v-if="loginSuc"></my-login>

</div>
</template>

<script>
  import myHead from 'components/header';
  import myNav from 'components/nav';
  import myMask from 'components/mask';
  import myLogin from 'components/login';


  export default {
    name: 'app',
    components: {
      myHead,
      myNav,
      myMask,
      myLogin

    },
    data() {
      return {
        loginSuc: true
      };
    },
    computed: {
      loginSuc (){
        return this.$store.state.login.shouldLogin
      }
    },
    /*created:function () {
      this.loginSuc=this.$store.state.login.shouldLogin
    }*/
    // methods: {
    //   toLogin(islogin) {
    //     this.canlogin = islogin;
    //   },
    //   toQuit(isquit) {
    //     this.canlogin = !isquit;
    //   }
    // },
    // data() {
    //   return {
    //     canlogin: false
    //   }
    // },
    // created() {
    //   this.$on('to-login', this.toLogin)
    //   this.$on('to-quit', this.toQuit)
    // },
    // beforeDestroy() {
    //   this.$off('to-login', this.toLogin)
    //   this.$off('to-quit', this.toQuit)
    // }
  }
</script>

<style>
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  #app {
    font-family: .PingFangSC-Regular;
  }
  .main_content {
    position: relative;
    top: 90px;
    width: 100%;

    padding-left: 300px;
    box-sizing: border-box;
  }
  /*@media screen and (max-width: 964px) {
    .main_content {
      padding-left: 0;
    }
  }*/
</style>
