<template>
  <div class="side">

    <el-menu default-active='1' class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>管理界面</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order">选项1</el-menu-item>
          <el-menu-item index="/order">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>商品界面</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/goods">选项1</el-menu-item>
          <el-menu-item index="/goods">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="sass" scoped>
</style>