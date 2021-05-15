import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'
import Home from '../views/Home/Home.vue'
import store from '../store'
import Error from '../views/Error'


Vue.use(VueRouter)

export const baseRouter = [
  // 基础路由，到时候会加到routes里，导航也会用到
  {
    path: '/',
    redirect: '/home',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          name: '首页',
          icon: "icon-home"
        }
      }
    ],
    meta: {
      isLogin: true
    }
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  },
]


const routes = [
  // 后面会动态添加路由
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes
})

// 前置守卫，判断是否需要登录
router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to.matched.length > 0 && !to.matched.some(item => item.meta.isLogin)) {
    // 不需要登录，直接跳转
    next();
  } else {
    // 需要登录
    if (store.state.LoginModule.userToken) {
      // 判断是不是已经登陆过了，登陆过就不需要在登录了
      if (store.state.Permission.slideBarMenu.length === 0) {
        // 判断是否已经有数据了，有数据就不用在获取数据了
        store.dispatch('Permission/getActionsMenu');
      }
      next();
    } else {
      // 需要登录但却没登录的话，跳转到登录页
      next('/login')
    }
  }
})


// 解决vue跳转相同路径时报错问题：在router/index.js中添加以下没注释的代码即可
// 改写在vue-router源码中有push方法（如下）：
// VueRouter.prototype.push = function push (location, onComplete, onAbort) {
//   this.history.push(location, onComplete, onAbort);
// };
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err);
}


export default router
