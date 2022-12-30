import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*引入ElementPlus*/
import ElementPlus from 'element-plus'
/*引入ElementPlus样式库*/
import 'element-plus/dist/index.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
