import api from '../../api'
import { dynamicRouter } from '../../router/Dynamic-router'
import { rulesRoutes } from './rulesRoutes'
import router, { baseRouter } from '../../router'

export default {
  namespaced: true,
  state: {
    permissionList: null, //路由导航
    slideBarMenu: [] // 动态导航  匹配规则
  },
  mutations: {
    setMenu (state, menu) {
      state.slideBarMenu = menu
    },
    setPermission (state, list) {
      state.permissionList = list
    }

  },
  actions: {
    async getActionsMenu ({ commit, state, rootState }) {
      let res = await api.permission({ username: rootState.LoginModule.userToken });
      // console.log('---后台路由-----', res.data.data);
      // console.log('---前台路由-----', dynamicRouter); // 自己写的，从路由的index里分出去的
      // 前后端路由对比--生成规则的路由结构
      let menuList = rulesRoutes(dynamicRouter, res.data.data);
      // console.log(menuList);
      // 把获取的规则的路由 添加到 路由基础文件里面
      baseRouter[0].children.push(...menuList);
      // console.log(baseRouter);
      //4. 存储vuex
      commit('setMenu', baseRouter[0].children)
      //5. 添加路由
      router.addRoutes(baseRouter);
      //6. 存储所有的导航信息-- [login:'',layout:[children],404]
      // console.log(router);
      let initRouters = router.options.routes;
      commit('setPermission', [...initRouters, ...baseRouter])
    }
  },
  getters: {

  }
}