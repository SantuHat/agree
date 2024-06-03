<template>
  <RouterLink to="/">
    <img src="https://noke.jutretail.com.tw/images/logo.png" alt="logo">
  </RouterLink>
  <div class="container">
    <img class="w-100 d-block" src="../../public/0329-_08-美妝.jpg" alt="">

    <RouterLink to="/registrate-finished" class="form-group text-center mb-5">
      <button type="button" class="btn btn-primary my-5 d-block mx-auto">立即報名</button>
    </RouterLink>

  </div>
</template>

<script>

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
  }
}
</script>

<style scoped>
</style>
