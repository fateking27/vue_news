<template>
  <div class="container">
    <div class="close"><span class="iconfont iconicon-test"></span></div>
    <div class="logo">
      <span class="iconfont iconnew">new</span>
    </div>
    <div class="inputs">
      <input placeholder="请输入手机号" class="input" v-model="username" />
      <input
        placeholder="密码"
        class="input"
        type="password"
        v-model="password"
      />
    </div>
    <p class="tips">
      没有账号？
      <a href="#/register" class="register">去注册</a>
    </p>
    <el-button type="primary" @click="login()">登录</el-button>
  </div>
</template>

<script>
import myaxios from "@/utils/request.js";
export default {
  data() {
    return {
      username: "10086",
      password: "123",
    };
  },
  methods: {
    async login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      const res = await myaxios.post("/login", data);
      if (res.data.statusCode === 401) {
        // 登录失败
        this.$message.success(res.data.message);
        console.log(res);
      } else {
        
        // 登录成功,保存token
        this.$message.success("登录成功");
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("user_id", res.data.data.user.id);
        localStorage.setItem("user_name", res.data.data.user.nickname);

        this.$router.push("/");
        console.log(res);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
  display: flex;
  // align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  .el-button {
    width: 250px;
    border-radius: 40px;
  }
}
.close {
  span {
    font-size: 100vw;
  }
}
.logo {
  span {
    display: block;
    font-size: 25vw;
    color: #d81e06;
  }
}
.inputs {
  margin-top: 20px;
  input {
    border: none;
    border-bottom: 1px solid #666;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 85vw;
    outline: none;
  }
}
.tips {
  text-align: right;
  margin-bottom: 20px;
  a {
    color: #3385ff;
  }
}
</style>