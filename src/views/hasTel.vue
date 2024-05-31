<template>
  <RouterLink to="/">
    <img src="https://noke.jutretail.com.tw/images/logo.png" alt="logo">
  </RouterLink>
  <div class="container">
    <img class="w-100 d-block" src="../../public/母親節DM_20240417-完稿6.jpg" alt="">
    <!-- <VForm v-slot="{ errors }" @submit="handleOrderSubmit($event)">
      <div class="col-md-4 mb-2 mx-auto">
        <label for="orderTel" class="sr-only text-primary py-3"
          ><span class="text-danger me-1 align-middle">*</span>手機號碼</label
        >
        <VField
          type="tel"
          id="orderTel"
          name="手機號碼"
          class="form-control"
          :class="{ 'is-invalid': errors['手機號碼'] }"
          placeholder="請輸入手機號碼"
          rules="required|numeric|min:10|max:10"
          v-model="userData.tel"
        ></VField>
        <ErrorMessage name="手機號碼" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="d-flex">
        <button type="reset" class="btn btn-primary my-4 d-block mx-auto">清除</button>
      </div>
    </VForm> -->
    <button class="btn btn-primary my-4 d-block mx-auto">使用其他號碼參加活動</button>
    <button @click="goLuckyPage" type="button" class="btn btn-secondary my-4 d-block mx-auto ">查詢抽獎號嗎</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import telStore from '../stores/telStore'

// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      userData: {
        tel: ''
      }
    }
  },
  methods: {
    ...mapActions(telStore, ['setTel', 'getTel']),
    // isDisabled (obj) {
    //   console.log('isDisabled', Object.keys(obj).length)
    //   return Object.keys(obj).length !== 0
    // },
    handleOrderSubmit (values) {
      localStorage.setItem('tel', values.手機號碼)
      // 表單提交處理邏輯
      console.log(values)
      console.log('userData', this.userData)
      window.location = 'https://testappcrm.jutretail.com.tw/Pages/LuckyIndex.aspx'
    },
    goLuckyPage () {
      window.location = 'https://testappcrm.jutretail.com.tw/Pages/LuckyIndex.aspx'
    }
  },
  computed: {
    ...mapState(telStore, ['tel'])
  },
  mounted () {
    this.getTel()
    console.log(this.tel)
  }
}
</script>

<style scoped>
</style>
