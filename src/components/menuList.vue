<template>
  <div>

    <template v-for="item in menuList">

      <!-- 有下级导航 -->
      <el-submenu :index="item.name" :key="item.name" v-if="item.children&&item.children.length>0">
        <template slot="title">
          <i class='iconfont' :class="item.meta.icon"></i>
          <span>{{item.meta.name}}</span>
        </template>
        <myNav :menuList="item.children" />
      </el-submenu>

      <!-- 直接用，没有下级导航 -->
      <el-menu-item :index="item.name" :key="item.name" v-else @click="change(item.name)">
        <i class='iconfont' :class="item.meta.icon"></i>
        <span>{{item.meta.name}}</span>
      </el-menu-item>

    </template>

  </div>
</template>

<script>

export default {
  name: 'myNav',
  props: {
    menuList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },



  methods: {
    change (name) {
      this.$router.push({
        name
      })
    }
  }


}
</script>

<style lang="scss" scoped>
</style>