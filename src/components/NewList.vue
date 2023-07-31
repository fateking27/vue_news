<template>
  <div class="content">
    <div
      class="newList"
      v-for="v in data"
      :key="v.id"
      @click="newsDetail(v.id)"
    >
      <div class="single3" v-show="v.cover.length > 2">
        <p class="content">{{ v.title }}</p>
        <div class="imgs">
          <img v-for="vc in v.cover" :key="vc.id" :src="vc.url" />
        </div>
        <p class="info">
          <span>{{ v.user.nickname }}</span>
          <span>{{ v.open }}跟帖</span>
        </p>
      </div>

      <div class="single" v-show="v.cover.length <= 2">
        <div class="left">
          <p class="content">{{ v.title }}</p>
          <p class="info">
            <span>{{ v.user.nickname }}</span>
            <span> {{ v.open }}跟帖</span>
          </p>
        </div>
        <img v-for="vc in v.cover" :key="vc.id" :src="vc.url" />
      </div>
    </div>
  </div>
</template>

<script>
import myaxios from "@/utils/request.js";
export default {
  data() {
    return {
      data: "",
      id: "",
    };
  },
  methods: {
    async getNewList() {
      const res = await myaxios.get("/post");
      this.data = res.data.data;
      console.log(res);
    },

    newsDetail(id) {
      this.$router.push("/detail/"+id);
      console.log(id);
    },
  },
  created() {
    this.getNewList();
  },
};
</script>

<style lang="less" scoped>
.content {
  .newList {
    .info {
      font-size: 12px;
      padding-left: 5px;
      color: #999;
      > span:nth-of-type(1) {
        padding-right: 15px;
      }
    }
    .content {
      font-size: 14px;
      padding: 0px 5px;
      line-height: 24px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .single {
      padding: 5px 0px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      flex-wrap: wrap;
      .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
      }

      /deep/ img {
        width: 30vw;
        height: 25vw;
        object-fit: cover;
        padding-right: 5px;
      }
    }

    .single3 {
      border-bottom: 1px solid #ccc;
      .imgs {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0 0 0;
        img {
          width: 32vw;
          // height: 70/360 * 100vw;
          // 让图片自动的调整大小，根据父容器的大小自动调整
          object-fit: cover;
          padding-right: 5px;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>