<template>
  <div class="personal">
    <router-link to="">
      <div class="profile" v-for="v in data" :key="v.id">
        <img :src="myaxios.defaults.baseURL + v.head_img" />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>{{ v.nickname }}
          </div>
          <div class="time">{{ v.create_date }}</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <userlist></userlist>
    <outbtn></outbtn>
  </div>
</template>

<script>
import moment from "moment";
import myaxios from "@/utils/request.js";
import outbtn from "./outBtn.vue";
import userlist from "./UserList.vue";
export default {
  components: {
    outbtn,
    userlist,
  },
  data() {
    return {
      data: [],
      myaxios,
    };
  },
  methods: {
    async getUser() {
      let user_id = localStorage.getItem("user_id");
      const res = await myaxios.get(`/user/` + user_id);
      res.data.data.create_date = moment(res.data.data.create_date).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      this.data.push(res.data.data);
      console.log(this.data);
      console.log(res);
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style lang="less" scoped>
.personal {
  height: 100vh;
  background-color: #eee;
}
a {
  color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>