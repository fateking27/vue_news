<template>
  <div class="outbtn">
    <el-button type="warning" 
    round
    @click="loginout()">退出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loginout() {
      //退出登录
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.el-button {
  width: 80vw;
}
</style>