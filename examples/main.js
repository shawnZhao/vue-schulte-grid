import { createApp } from 'vue'
import App from './App.vue'
// 导入组件库
import hs from '../packages'

const app = createApp(App)
app.use(hs).mount('#app')
