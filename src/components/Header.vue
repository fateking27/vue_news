<template>
  <div class="news_header" :style="{ 'background-color': bgcolor }">
    <span>news</span>
    <input type="text" placeholder="搜索新闻" />
    <router-link :to="'/user/' + id" class="el-icon-s-custom"></router-link>
  </div>
</template>

<script>
export default {
  props: {
    bgcolor: {
      type: String,
      default: "#ccc",
    },
  },
  data() {
    return {
      id: "",
    };
  },
  created() {
    let user_id = localStorage.getItem("user_id");
    this.id = user_id;
    console.log(this.id);
  },
};
</script>

<style lang="less" scoped>
.news_header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    color: #fff;
  }
  > input {
    border-radius: 50px;
    width: 60%;
    height: 70%;
    outline: none;
    border: #666;
  }
}
</style>