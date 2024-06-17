<template>
  <!-- <RouterLink to="/">
    <img src="https://noke.jutretail.com.tw/images/logo.png" alt="logo">
  </RouterLink> -->
  <div class="wrap">
    <img class="bgImg" src="../../public/0613_index.jpg" alt="">
    <div class="h_section">
      <RouterLink to="/registrate-finished">
        <button type="button" class="login_btn mx-auto mb-5 mb-sm-10">
          立即登錄
        </button>
      </RouterLink>
      <div class="container border-bottom border-top border-white px-0">
        <div class="">
          <a class="text-center d-inline-block col-3 text-white py-2 border-end border-white fw-bold bg_primary" href="https://docs.google.com/document/d/1Gl2vhXCM59CL4Oa3LB8k8_gmhqfebkPm0W6e_A5XUxk/edit?usp=sharing">第一波<br>中獎名單<br>6.7-6.14</a>
          <a class="text-center d-inline-block col-3 text-white py-2 border-end border-white  fw-bold bg_primary" href="https://docs.google.com/document/d/17TZAyDTAs52gw4tC1BxihXtTTqGke2ctvA8vEVnSIq4/edit?usp=sharing">第二波<br>中獎名單<br>6.15-6.22</a>
          <a class="text-center d-inline-block col-3 text-white py-2 border-end border-white  fw-bold bg_primary" href="https://docs.google.com/document/d/1z8QVtuUOYl8YFNn2HxtWggA2wuCVRfREGtaN6YSL9G4/edit?usp=sharing">第三波<br>中獎名單<br>6.23-6.30</a>
          <a class="text-center d-inline-block col-3 text-white py-2  fw-bold bg_primary" href="https://docs.google.com/document/d/187FyGgg4j7VvEPK7naPaqDKwOlim8x4gQ3sUT0w-5es/edit?usp=sharing">第四波<br>中獎名單<br>7.1-7.8</a>
        </div>
      </div>
      <div class="w-100">
        <a class="d-inline-block col-6 border-end border-white" href="http://pili.app/fb/SQ8QIutF">
          <img class="logo_size" src="../../public/fb-icon.png" alt="">
        </a>
        <a class="d-inline-block col-6" href="https://www.instagram.com/nokemall/">
          <img class="logo_size " src="../../public/ig-icon.png" alt="">
        </a>
      </div>
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
/*.bgImg {
  background-image: url('../../public/0613_index.jpg');
  height: 1180px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 1600px;
} */
.wrap {
  position: relative;
  margin: auto;
  .bgImg {
    width: 100%;
  }
}
.login_btn {
  background: none;
  border-color: white;
  border-radius: 40px;
  width: 220px;
  height: 60px;
  color: white;
  font-size: 32px;
  display: block;
}
.h_section {
  /* height: 970px; */
  width: 100%;
  position: absolute;
  bottom: 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.w-350 {
  max-width: 340px;
}
.logo_size {
  width: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 24px;
  padding-bottom: 12px;
}
.bg_primary {
  background-color: #A35527;
}
@media (min-width: 1400px) {
    .wrap{
        max-width: 1320px;
    }
}
@media (min-width: 1200px) {
    .wrap{
        max-width: 1140px;
    }
}
@media (min-width: 992px) {
    .wrap{
        max-width: 960px;
    }
}
@media (min-width: 768px) {
    .wrap{
        max-width: 720px;
    }
}
@media (min-width: 576px) {
  .wrap {
        max-width: 540px;
    }
}
/* @media (max-width: 767px) {
    .h_section {
      bottom: 9%;
    }
} */
@media (max-width: 576px) {
    /* .container {
        max-width: 100%;
    } */
    .h_section {
      bottom: 0%;
    }
    .logo_size {
      padding-top: 12px;
      padding-bottom: 12px;
    }
}
</style>
