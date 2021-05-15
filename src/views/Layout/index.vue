<template>
  <div>
    <div>
      <!-- <SideBarNav class="leftNav" /> -->
      <el-menu :default-active='$route.name' background-color="#545c64" text-color="#fff" active-text-color="#409EFF">
        <MenuList class="sidebar" :menuList='slideBarMenu' />
      </el-menu>
    </div>
    <div>
      <Concent class="rightNav" />
    </div>

  </div>
</template>

<script>
import SideBarNav from './Sidebar-nav'
import Concent from './concent'
import MenuList from '../../components/menuList'
import { dynamicRouter } from '../../router/Dynamic-router'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      dynamicRouter
    }
  },
  computed: {
    ...mapState('Permission', ['slideBarMenu'])
  },
  components: {
    SideBarNav,
    Concent,
    MenuList,
  },

}
</script>

<style lang="scss" scoped>
</style>