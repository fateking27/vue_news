<template>
  <div class="UserList">
    <ul>
      <li>
        <span>我的关注</span>
      </li>
      <li>
        <span>我的跟帖</span>
      </li>
      <li>
        <span>我的收藏</span>
      </li>
      <li>
        <span>设置</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.UserList {
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li {
      width: 100vw;
      border-bottom: 1px solid #666;
      padding-top: 20px;
      margin-left: -40px;
      // span {
      //   height: 30px;
      //   line-height: 30px;
      // }
    }
  }
}
</style>