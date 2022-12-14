import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import http from "./untils/http"

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"

Vue.prototype.$http = http
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount("#app")
