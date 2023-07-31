<template>
  <div class="news_home">
    <!-- 头部 -->
    <news_header bgcolor="red"></news_header>
    <!-- 内容 -->
    <news_list></news_list>
  </div>
</template>

<script>
import news_header from "./Header.vue";
import news_list from "./NewList.vue";
export default {
  data() {
    return {};
  },
  components: {
    news_header,
    news_list,
  },
};
</script>

<style lang="less" scoped>
.news_home{
    width: 100vm;
    margin-top: 50px;
}
</style>