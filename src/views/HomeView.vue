<template>
  <div class="">
    <img src="https://noke.jutretail.com.tw/images/logo.png" alt="logo">
  </div>
  <div class="container">
    <img class="w-100 d-block" src="../../public/母親節DM_20240417-完稿6.jpg" alt="">
    <VForm v-slot="{ errors }" @submit="handleOrderSubmit()">
      <div class="col-md-4 mb-2 mx-auto">
        <label for="orderTel" class="sr-only text-primary py-3"
          ><span class="text-danger me-1 align-middle">*</span>手機號碼</label
        >
        <VField
          type="text"
          id="orderTel"
          name="電話"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話"
          rules="required|numeric|min:10|max:10"
          autofocus
          v-model="userData.data.user.tel"
        ></VField>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="col-md-4 mb-4 mx-auto">
        <span class="text-danger me-1 align-middle">*</span>
        <VField  name="terms" type="checkbox" :value="true" :unchecked-value="false" :class="{ 'is-invalid': errors['terms'] }" rules="required" autofocus>
            <label>
              <input type="checkbox" name="terms" v-bind="field" :value="true"/>
              我同意
            </label>
        </VField>
        <ErrorMessage name="terms" class="invalid-feedback"></ErrorMessage>
      </div>
      <button class="mx-auto d-block mb-6">下一步</button>
    </VForm>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      userData: {
        data: {
          user: {
            tel: ''
          }
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
