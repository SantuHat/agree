import { defineStore } from 'pinia'

export default defineStore('loginStore', {
  state: () => ({
    tel: ''
  }),
  actions: {
    setTel (value) {
      localStorage.setItem('tel', value)
      this.tel = value
    },
    getTel () {
      const tel = localStorage.getItem('tel')
      this.tel = tel
    }
  }
})
