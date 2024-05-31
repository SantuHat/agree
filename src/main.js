// import './assets/main.css'
import './assets/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 匯入 vee-validate 多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'
// 匯入 vee-validate 繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// 匯入 vee-validate 相關規則
import * as rules from '@vee-validate/rules'
// 匯入 vee-validate 主套件
import { configure, defineRule, ErrorMessage, Field, Form } from 'vee-validate'
// vee-validate 定義驗證規則(規則啟用)
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})
// vee-validate 全域規則、多國語系
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 一輸入值直接進行驗證
})
// 設定預設語系 (如果上方設定很多語系，可以在此加入預設語系)
setLocale('zh_TW')

// 定義一個新的驗證規則名稱 startsWith09
defineRule('startsWith09', (value) => {
  // 驗證函數，檢查輸入值是否以 "09" 開頭
  return value.startsWith('09') || '手機號碼前兩個數字必須為 09'
})

const app = createApp(App)

app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.use(createPinia())
app.use(router)

app.mount('#app')
