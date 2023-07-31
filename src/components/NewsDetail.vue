<template>
  <div class="articaldetail">
    <div class="header">
      <div class="left">
        <van-icon name="arrow-left back" />
        <span class="iconfont iconnew new"></span>
      </div>
      <span>关注</span>
    </div>
    <div class="detail" v-for="v in data" :key="v.id">
      <div class="title">{{ v.title }}</div>
      <div class="desc">
        <span>{{ v.user.nickname }}</span> &nbsp;&nbsp;
        <span>{{ v.create_date }}</span>
      </div>
      <div class="content" v-html="v.content"></div>
      <div class="opt">
        <span class="like"> <van-icon name="good-job-o" />点赞 </span>
        <span class="chat"> <van-icon name="chat" class="w" />微信 </span>
      </div>
    </div>
  </div>
</template>

<script>
import myaxios from "@/utils/request.js";
import moment from 'moment'
export default {
  // props:['id'],
  data() {
    return {
      data: [],
      id: "",
    };
  },
  methods: {
    async getNews() {
      let id = this.id;
      const res = await myaxios.get(`/post/` + id);
      res.data.data.create_date = moment(res.data.data.create_date).format('YYYY-MM-DD HH:mm:ss')
      this.data.push(res.data.data);
      console.log(this.data);
      console.log(res);
    },
  },
  created() {
    this.getNews();
  },
  watch: {
    $route: {
      handler(to) {
        // to:跳转的目标路由对象
        // from:源路由对象
        this.id = to.params.id;
        console.log("本次的id:", this.id);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  padding: 0px 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  > .left {
    height: 100%;
    vertical-align: middle;
    position: relative;
    .van-icon {
      position: absolute;
      top: 15px;
      left: 0;
    }
    > span {
      margin-left: 22px;
      font-size: 50px;
    }
  }
  > span {
    padding: 5px 15px;
    background-color: #f00;
    color: #fff;
    text-align: center;
    border-radius: 15px;
    font-size: 13px;
  }
}
.detail {
  padding: 15px;
  /deep/ img {
    width: 85vw;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
  }
  .desc {
    line-height: 30px;
    color: #999;
    font-size: 13px;
  }
  .content {
    line-height: 24px;
    font-size: 15px;
    padding-bottom: 30px;
    width: 100%;
    /deep/ p {
      text-indent: 2em;
    }
  }
}
.opt {
  display: flex;
  justify-content: space-around;
  .like,
  .chat {
    height: 25px;
    padding: 0 15px;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 15px;
  }
  .w {
    color: rgb(84, 163, 5);
  }
}
</style>