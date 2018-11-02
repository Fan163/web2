import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SmartHox_Home from '../page/SmartHox/Home'
import SmartHox_ApplicationScene from '../page/SmartHox/ApplicationScene'
import SmartHox_Products from '../page/SmartHox/Products'
import Company from '../page/SmartHox/Company'
import {deviceInfo} from "../util/device"
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'/SmartHox_Home',name: '首页', component: SmartHox_Home},
    {path:'/SmartHox_ApplicationScene',name: '物联网场景应用', component: SmartHox_ApplicationScene},
    {path:'/SmartHox_Products',name: '产品与服务', component: SmartHox_Products},
    {path:'/Company',name: '公司', component: Company},
    {path:'*', redirect: '/SmartHox_Home'}
  ]
})
export default router
