import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import UserCenter from "@/components/UserCenter.vue";
import Detail from "@/components/NewsDetail.vue";

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/user/:id",
      name: "UserCenter",
      component: UserCenter,
      meta: {
        myAuthor: true,
      },
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail,
    },
  ],
});

//导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.myAuthor) {
    console.log(to.meta);
    let token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      alert("请先登录");
      next({ path: "/login" });
    }
    next();
  } else {
    console.log(to);
    next();
  }
});
export default router;
