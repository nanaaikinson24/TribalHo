import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from "vee-validate";
import BootstrapVue from "bootstrap-vue";

// jQuery
let jQuery = require("jquery");
window.$ = window.jQuery = jQuery;
import "bootstrap";

let cube = require("@/assets/js/jquery.cubeportfolio.min.js");
window.cubeportfolio = cube;

// Global
window.APIURL = "http://localhost/apitribal/";

import "@/assets/scss/app.scss";
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
