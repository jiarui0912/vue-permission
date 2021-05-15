<template>
  <div>
    获取data
  </div>
</template>

<script>
import api from '../../api'
export default {
  mounted () {
    let token = this.$store.state.LoginModule.userToken
    api.permission({ token }).then(res => {
      console.log(res.data);
    })
  }
}
</script>

<style lang="scss" scoped>
</style>