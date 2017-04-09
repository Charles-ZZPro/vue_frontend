import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import store from './store/store';
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'


Vue.use(VueRouter);
Vue.use(Element)
Vue.use(VueResource);


var user={'name':'slient','password':'a123456'}

sessionStorage.setItem('user',JSON.stringify(user))
// 定义路由组件
const Project = require('components/project.vue');
const ProjectDetail = require('components/projectDetail.vue');
const Count = require('components/count.vue');
const Set = require('components/set.vue');
const Role=require('./components/tab/role.vue')
const User=require('./components/tab/user.vue')
const Userdetail=require('./components/tab/userDetail.vue')
// 定义路由
const routes = [

  { path: '/project', component: Project },
  { path: '/project/:id', component: ProjectDetail },
  { path: '/count', component: Count },
  { path: '/set', component: Set ,
    children:[
      {
        path:'user',
        component:User
      },
      {
        path:'user/:id',
        component:Userdetail
      },
      {
        path:'role',
        component:Role
      }
    ]
  },

];

// 创建router实例
const router = new VueRouter({
  routes
});

// const store = new Vuex.Store({
//   state: {
//     islogin: false
//   },
//   mutations: {
//     enableLogin(state) {
//       state.islogin = true
//     },
//     disableLogin(state) {
//       state.islogin = false
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
});




