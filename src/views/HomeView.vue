<template>
  <div class="">
    <img src="https://noke.jutretail.com.tw/images/logo.png" alt="logo">
  </div>
  <div class="container">
    <img class="w-100 d-block" src="../../public/母親節DM_20240417-完稿6.jpg" alt="">
    <VForm v-slot="{ errors }" @submit="handleOrderSubmit($event)">
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
      <div class="col-md-4 mb-2 mx-auto">
        <div class="d-flex" :class="{ 'is-invalid': errors.acceptTerms }">
          <span class="text-danger me-1 align-middle">*</span>
          <div class="form-group form-check">
            <VField name="acceptTerms" type="checkbox" id="acceptTerms" :value="true" class="form-check-input"  rules="required" />
            <label for="acceptTerms" class="form-check-label">我同意</label>
          </div>
        </div>
        <div class="invalid-feedback">{{errors.acceptTerms ? '請勾選同意': ''}}</div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary mr-1">送出</button>
        <button type="reset" class="btn btn-secondary">清空</button>
      </div>
    </VForm>
  </div>
</template>

<script>
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
    // isDisabled (obj) {
    //   console.log('isDisabled', Object.keys(obj).length)
    //   return Object.keys(obj).length !== 0
    // },
    handleOrderSubmit (values) {
      // 表單提交處理邏輯
      console.log(values)
      console.log('userData', this.userData)
    }
  }
}
</script>

<style scoped>
</style>
