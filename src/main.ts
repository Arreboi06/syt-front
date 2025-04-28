//vue3框架提供的方法createApp方法,可以用来创建应用实例方法
import { createApp } from "vue";
// 引入根组件App
import App from "@/App.vue";
//引入全局组件--顶部、底部都是全局组件
import HospitalTop from "@/components/hospital_top/index.vue";
import HosiptalBottom from "@/components/hospital_bottom/index.vue";
//引入清除默认样式
import "@/style/reset.scss";
////利用createApp方法创建应用实例,且将应用实例挂载到挂载点上
const app = createApp(App);
//全局组件，注册两个全局组件,然后在app.vue中引入
app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HosiptalBottom);
//挂载
app.mount("#app");
