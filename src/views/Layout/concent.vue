<template>
  <div>
    <div class="topNav">
      <ul class="rightNav1">
        <li><i class="el-icon-star-off"></i></li>
        <li><span>欢迎：{{$store.state.LoginModule.userToken}}</span></li>
        <li @click="exit"><i class="el-icon-switch-button"></i></li>
      </ul>
    </div>

    <router-view class="content" />

  </div>
</template>

<script>
export default {
  methods: {
    exit () {
      localStorage.removeItem('token');
      this.$store.commit('LoginModule/setUser', '')
      this.$router.replace('/login')
      window.location.reload();
    }
  }

}
</script>

<style lang="scss" scoped>
html {
  height: 100%;
  width: 100%;
}
.topNav {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #999;
  font-size: 18px;
  line-height: 50px;
  position: fixed;
  top: 0;
  left: 0;
}
.rightNav1 {
  position: absolute;
  top: 0;
  right: 0;
}
li {
  float: left;
  height: 50px;
  // width: 80px;
  padding: 0 15px;
  margin-left: 5px;
  text-align: center;
  color: #758eb5;
  cursor: pointer;
  position: relative;
  font-size: 18px;
  &:hover::after {
    transform-origin: 0 0;
    transform: scaleX(1);
  }
  &:first-child:before {
    border: none;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #ef4747;
    transform: scaleX(0);
    transform-origin: right 0;
    transition: transform 0.5s;
  }
  &::before {
    content: "";
    position: absolute;
    height: 20px;
    top: 50%;
    left: -5px;
    margin-top: -10px;
    border-left: 1px solid #ccc;
  }
}
.content {
  margin-top: 60px;
}
</style>