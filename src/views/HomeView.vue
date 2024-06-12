<template>
  <!-- <RouterLink to="/">
    <img src="https://noke.jutretail.com.tw/images/logo.png" alt="logo">
  </RouterLink> -->
  <div class=" d-lg-none position-relative">

    <img class="w-100" src="../../public/login.jpg" alt="noke-img">
    <RouterLink to="/registrate-finished" class="form-group text-center z_index btn_position">
      <button type="button" class="btn  btn_size"></button>
    </RouterLink>
    <!-- noke -->
    <a class="noke_position" href="https://noke.jutretail.com.tw/news/366">
      <P class="text-white fw-bold">中獎查詢</P>
    </a>
    <!-- fb -->
    <a class="fb_position" href="http://pili.app/fb/SQ8QIutF">
      <img class="noke_size" src="../../public/fb-icon.png" alt="fb-icon">
    </a>
    <!-- ig -->
    <a class="ig_position" href="https://www.instagram.com/nokemall/">
      <img class="noke_size" src="../../public/ig-icon.png" alt="ig-icon">
    </a>
  </div>
  <!-- desktop -->
  <div class="container d-none d-lg-block">
    <img class="w-100" src="../../public/login.jpg" alt="noke-img">
    <RouterLink to="/registrate-finished" class="form-group text-center z_index btn_position">
      <button type="button" class="btn  btn_size"></button>
    </RouterLink>
    <!-- noke -->
    <a class="noke_position" href="https://noke.jutretail.com.tw/news/366">
      <P class="text-white fw-bold fs-4">中獎查詢</P>
    </a>
    <!-- fb -->
    <a class="fb_position" href="http://pili.app/fb/SQ8QIutF">
      <img class="noke_size" src="../../public/fb-icon.png" alt="fb-icon">
    </a>
    <!-- ig -->
    <a class="ig_position" href="https://www.instagram.com/nokemall/">
      <img class="noke_size" src="../../public/ig-icon.png" alt="ig-icon">
    </a>
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
  background-image: url(noke-0607-0708.jpg);
  /* height: 2000px; */
  /* background-repeat: no-repeat; */
  background-size: cover;
  background-position: center;
}
.z_index {
  z-index: 1;
}
.btn_position {
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn_size {
  width: 200px;
  height: 80px;
}
.noke_position {
  position: absolute;
  bottom: 2.5%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.fb_position {
  position: absolute;
  bottom: -1%;
  left: 24%;
  transform: translate(-50%, -50%);
}
.ig_position {
  position: absolute;
  bottom: -1%;
  left: 76%;
  transform: translate(-50%, -50%);
}
.noke_size {
  width: 40px;
  /* height: 20px; */
}
@media (min-width: 700px) {
  .btn_position {
    bottom: 9%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn_size {
    width: 360px;
    height: 130px;
  }
}
@media (min-width: 992px) {
  .btn_position {
    bottom: -335%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .noke_position {
    bottom: -358%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .fb_position {
    bottom: -383%;
    left: 24%;
    transform: translate(-50%, -50%);
  }
  .ig_position {
    bottom: -383%;
    left: 76%;
    transform: translate(-50%, -50%);
  }
  .btn_size {
    width: 420px;
    height: 150px;
  }
  .noke_size {
    width: 100px;
  }
}
@media (min-width: 1200px) {
  .btn_position {
    bottom: -420%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn_size {
    width: 500px;
    height: 180px;
  }
  .noke_position {
    bottom: -445%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .fb_position {
    bottom: -475%;
    left: 26%;
    transform: translate(-50%, -50%);
  }
  .ig_position {
    bottom: -475%;
    left: 74%;
    transform: translate(-50%, -50%);
  }
}
@media (min-width: 1400px) {
  .btn_position {
    bottom: -505%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn_size {
    width: 600px;
    height: 220px;
  }
  .noke_position {
    bottom: -532%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .fb_position {
    bottom: -564%;
    left: 26%;
    transform: translate(-50%, -50%);
  }
  .ig_position {
    bottom: -564%;
    left: 74%;
    transform: translate(-50%, -50%);
  }
}
</style>
