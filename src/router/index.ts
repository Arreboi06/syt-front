import { createRouter, createWebHistory } from "vue-router";
//createRouter方法,用于创建路由器实例，可以管理多个路由
export default createRouter({
  //history模式:createWebHistory,用于创建一个基于浏览器历史记录的路由器实例
  history: createWebHistory(),
  // 管理路由
  routes: [
    {
      // 路由路径
      path: "/home",
      // 路由组件
      component: () => import("@/pages/home/index.vue"),
    },
    {
      // 路由路径
      path: "/hospital",
      // 路由组件
      component: () => import("@/pages/hospital/index.vue"),
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
  // 滚动行为
  //滚动行为:控制滚动条的位置,这个滚动行为是比较常用的
  //返回值:一个包含滚动位置的对象,left:水平滚动位置,top:垂直滚动位置
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
