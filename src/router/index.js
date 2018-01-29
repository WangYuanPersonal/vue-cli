import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Part from "@/router/function1/part";

Vue.use(Router);

const router = new Router({
  routes: [
    ...Part,
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否需要登录权限
    if (sessionStorage.getItem("token")) {
      // 判断是否登录
      next();
    } else {
      // 没登录则跳转到登录界面
      next({
        name: "Login",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;
