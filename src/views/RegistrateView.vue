<template>
  <RouterLink to="/">
    <img src="https://noke.jutretail.com.tw/images/logo.png" alt="logo">
  </RouterLink>
  <div class="container">
    <div class="form-group text-center mb-5" v-if="isRegistration">
      <h3 class="fw-bold mt-5">您先前已報名成功!</h3>
      <img class="w-100 d-block" src="../../public/母親節DM_20240417-完稿6.jpg" alt="">
      <button class="btn btn-primary my-4 d-block mx-auto" @click="updateInput('update')">更換其他號碼參加活動</button>
      <button @click="goLuckyPage" type="button" class="btn btn-secondary my-4 d-block mx-auto ">查詢抽獎號嗎</button>
    </div>
    <VForm v-slot="{ errors }" @submit="handleOrderSubmit($event)"  v-else>
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
          rules="required|numeric|min:10|max:10|startsWith09"
          v-model="userData.tel"
          ></VField>
          <ErrorMessage name="手機號碼" class="invalid-feedback"></ErrorMessage>
        </div>
        <!-- img -->
        <img class="w-100 d-block" src="../../public/母親節DM_20240417-完稿6.jpg" alt="">
        <div class="col-md-4 mb-2 mx-auto" v-if="type === 'create'">
          <div class="d-flex" :class="{ 'is-invalid': errors.acceptTerms }">
            <span class="text-danger me-1 align-middle">*</span>
            <div class="form-group form-check">
              <VField name="acceptTerms" type="checkbox" id="acceptTerms" :value="true" class="form-check-input"  rules="required" />
              <label for="acceptTerms" class="form-check-label">我同意</label>
            </div>
          </div>
          <div  class="invalid-feedback">{{errors.acceptTerms ? '請勾選同意': ''}}</div>
        </div>
      <div class="form-group text-center my-5 d-flex justify-content-evenly">
        <button type="submit" class="btn btn-primary mr-1">{{ type === 'create' ? '參加活動' : '送出'}}</button>
        <button v-if="type === 'update'" @click="this.isRegistration = true" type="button" class="btn btn-secondary">返回</button>
      </div>
    </VForm>

  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'pinia'
import telStore from '../stores/telStore.js'

// import HelloWorld from '@/components/HelloWorld.vue'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      userData: {
        tel: ''
      },
      isRegistration: false,
      type: 'create',
      telId: 0
    }
  },
  methods: {
    ...mapActions(telStore, ['setTel', 'getTel']),
    handleOrderSubmit (values) {
      // 表單提交處理邏輯
      // console.log(values)
      // console.log('userData', this.userData)
      if (this.type === 'create') {
        this.postForm()
      } else if (this.type === 'update') {
        this.updateApi(this.telId)
      }
    },
    updateInput (type) {
      this.type = type
      this.isRegistration = false
    },

    // api
    getDate () {
      const url = `${VITE_APP_API_URL}/${VITE_APP_API_NAME}`
      axios.get(url)
        .then((res) => {
          // console.log(res.data)

          console.log(this.tel)
          this.getTel()
          const resData = res.data
          this.isRegistration = resData.some((item) => {
            // console.log('item', item)
            if (item.tel === this.tel) this.telId = item.id
            return item.tel === this.tel
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    postForm () {
      const url = `${VITE_APP_API_URL}/${VITE_APP_API_NAME}`
      axios.post(url, this.userData)
        .then((res) => {
          console.log(res.data)
          if (res.data.success) {
            this.setTel(this.userData.tel)
            alert('提交成功')
            window.location = 'https://testappcrm.jutretail.com.tw/Pages/LuckyIndex.aspx'
          }
        })
        .catch(() => {
          alert('此號碼已參加活動')
          this.goLuckyPage()
        })
    },
    updateApi (id) {
      console.log('id', id)
      const url = `${VITE_APP_API_URL}/${VITE_APP_API_NAME}/${id}`
      axios.put(url, this.userData)
        .then((res) => {
          console.log(res.data)
          if (res.data.success) {
            this.isRegistration = true
            this.setTel(this.userData.tel)
            this.type = 'create'
            alert('已完成修改')
            this.goLuckyPage()
          }
        })
        .catch((res) => {
        // alert(res.response.data.errors.tel)
          alert('此號碼已存在')
        })
    },
    goLuckyPage () {
      window.location = 'https://testappcrm.jutretail.com.tw/Pages/LuckyIndex.aspx'
    }
  },
  computed: {
    ...mapState(telStore, ['tel'])
  },
  created () {
    this.getDate()
    console.log('isRegistration', this.isRegistration)
  }
}
</script>

<style scoped>
</style>
