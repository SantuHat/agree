<template>
  <!-- <RouterLink to="/">
    <img src="https://noke.jutretail.com.tw/images/logo.png" alt="logo">
  </RouterLink> -->
  <div class="bgImg">
    <div class="h_section"></div>
    <button type="button" class="login_btn mx-auto mb-4">
      立即登錄
    </button>
    <div class="container border-bottom border-top border-white mb-2">
      <div class="d-flex justify-content-between w-350 mx-auto">
        <a class="d-block text-white p-2 border-end border-white fw-bold" href="https://docs.google.com/document/d/1Gl2vhXCM59CL4Oa3LB8k8_gmhqfebkPm0W6e_A5XUxk/edit?usp=sharing">第一波<br>中獎名單<br>6.7-6.14</a>
        <a class="d-block text-white p-2 border-end border-white ps-0 fw-bold" href="https://docs.google.com/document/d/17TZAyDTAs52gw4tC1BxihXtTTqGke2ctvA8vEVnSIq4/edit?usp=sharing">第二波<br>中獎名單<br>6.15-6.22</a>
        <a class="d-block text-white p-2 border-end border-white ps-0 fw-bold" href="https://docs.google.com/document/d/1z8QVtuUOYl8YFNn2HxtWggA2wuCVRfREGtaN6YSL9G4/edit?usp=sharing">第三波<br>中獎名單<br>6.23-6.30</a>
        <a class="d-block text-white p-2 ps-0 fw-bold" href="https://docs.google.com/document/d/187FyGgg4j7VvEPK7naPaqDKwOlim8x4gQ3sUT0w-5es/edit?usp=sharing">第四波<br>中獎名單<br>7.1-7.8</a>
      </div>
    </div>
    <div class="d-flex justify-content-evenly w-350 mx-auto">
      <a class="d-block" href="http://pili.app/fb/SQ8QIutF">
        <img class="logo_size" src="../../public/fb-icon.png" alt="">
      </a>
      <a href="https://www.instagram.com/nokemall/">
        <img class="logo_size" src="../../public/ig-icon.png" alt="">
      </a>
    </div>

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
.bgImg {
  background-image: url(0613_index.jpg);
  height: 1180px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /* height: 1600px; */
}
.login_btn {
  background: none;
  border-color: white;
  border-radius: 28px;
  width: 200px;
  height: 60px;
  color: white;
  font-size: 40px;
  display: block;
}
.h_section {
  height: 970px;
}
.w-350 {
  max-width: 340px;
}
.logo_size {
  width: 30px;
  display: block;
}
</style>
