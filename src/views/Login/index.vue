<template>
  <div class="login">
    <h3>登录</h3>
    <el-input v-model="username" placeholder="用户名" class="width"></el-input><br><br>
    <el-input placeholder="密码" v-model="password" show-password class="width"></el-input><br><br>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
import api from '../../api'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations('LoginModule', ['setUser']),
    login () {
      console.log(this.username, this.password);
      api.login({
        username: this.username,
        password: this.password
      }).then(res => {
        console.log(res.data);
        this.setUser(res.data.token);
        localStorage.setItem('token', res.data.token)
        this.$router.replace('/');
      }).catch(error => {
        console.log(error);
      })
    }
  }

}
</script>

<style lang="scss" scoped>
html {
  height: 100%;
  width: 100%;
  background-color: antiquewhite;
}
.login {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  background-color: antiquewhite;
}
.width {
  width: 400px;
}
h3 {
  line-height: 100px;
}
</style>