import App from './App'
import {createI18n} from 'vue-i18n'
 import en from './locales/en.json'
 import zh from './locales/zh.json'
// // 引入语言文件 
const messages = {
	en: en,
	zh: zh
}
const i18n = createI18n({
	locale: 'en', // 设置默认语言 
	messages, // 设置语言包
})
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(VueI18n)
Vue.config.productionTip = false // 配置 VueI18n 
const app = new Vue({
	i18n,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	return {
		app
	}
}
// #endif