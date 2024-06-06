<template>
  <div class="bg-151515">
    <div class="container">
      <div class="form-group text-center pb-5" v-if="isRegistration">
        <h3 class="fw-bold pt-5 text-primary">您先前已報名成功!</h3>
        <div class="col-lg-5 mx-auto">
          <img class="w-100 d-block" src="../../public/notice.jpg" alt="">
        </div>
        <button class="btn btn-primary my-4 d-block mx-auto border-white fw-bold" @click="updateInput('update'), changeTitle = true">更換其他號碼參加活動</button>
        <button @click="goLuckyPage" type="button" class="btn btn-primary border-white d-block mx-auto fw-bold">查詢抽獎號嗎</button>
      </div>
      <VForm v-slot="{ errors }" @submit="handleOrderSubmit($event)"  v-else>
        <div class="col-md-4 mb-2 mx-auto">
          <label for="orderTel" class="sr-only text-primary fw-bold d-block py-4 text-center fs-1"
            >
            <!-- <span class="text-danger me-1 align-middle">
              *
            </span> -->
            {{ changeTitle? '更換手機號碼': '登錄手機號碼抽獎' }}
            </label
          >
          <VField
          type="tel"
          id="orderTel"
            name="手機號碼"
            class="form-control bg-white "
            :class="{ 'is-invalid': errors['手機號碼'] }"
            placeholder="請輸入手機號碼"
            rules="required|numeric|min:10|max:10|startsWith09"
            v-model="userData.tel"
            ></VField>
            <ErrorMessage name="手機號碼" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="col-lg-5 mx-auto">
            <img class="w-100 mb-1" src="../../public/notice.jpg" alt="">
          </div>

          <!-- <div class="text-white noticeFont col-md-6 mx-auto">
            <p class="mb-0">活動注意事項：</P>
            <p class="mb-0">●參加本活動抽獎者，必須為JUT LIFE忠泰生活圈(以下簡稱JUT APP)</p>
            <p class="mb-0">會員並於消費時限完成活動頁面登錄消費發票號碼門檻方具有抽獎資格。</p>
            <p class="mb-0">●會員於實體消費結帳前，須「主動出示 JUT APP會員條碼」始符合抽獎資格。</p>
            <p class="mb-0">● JUT APP會員於活動時間內至NOKE全館指定餐飲品牌消費，單筆不限</p>
            <p class="mb-0">金額消費，即獲得1次抽獎資格，兩筆不限金額消費，即獲得2次抽獎資格，以此類推；</p>
            <p class="mb-0">抽獎資格每會員每日無上限。</p>
            <p class="mb-0">將以中獎知該筆消費金額等值NOKE中泰勒生活-電子商品禮券回饋中</p>
            <p class="mb-0">獎者，單筆免單回饋上限1,111元。</p>
            <p class="mb-0">●下列發票及消費恕不列入計算：商品券、贈品禮券、電子商品禮券、電子</p>
            <p class="mb-0">贈品券、JUT Points折抵、提貨單、二三聯式手開發票、購買及加值儲值卡、</p>
            <p class="mb-0">未開立NOKE忠泰樂生活發票之交易，SMART PAY金融卡交易、LINE PAY、</p>
            <p class="mb-0">NFC/HCE手機信用卡等消費金額。</p>
            <p class="mb-0">●各波段會員消費發票補登須於抽獎日期前一日23:59前且完成登錄動作</p>
              <p>方符合該期抽獎資格；抽獎截止日前若退貨恕不符合活動資格將取消抽獎</p>
              <p>資格；登錄成功僅表示參與本次活動意願，抽獎資格仍應依活動辦法為之，</p>
              <p>若資格不符將取消抽獎資格。</p>
            <p class="mb-0">●將於各波段抽獎日期抽出中獎者並公告於活動網頁，系統將自動派送電</p>
            <p class="mb-0">子商品禮券。各波段中獎者經消費資格驗證後預計於2024/07/19前統一歸</p>
            <p class="mb-0">戶，活動獲得之電子商品禮券限使用至2024/12/31止；逾期未兌換者視同</p>
            <p class="mb-0">放棄。請參閱NOKE忠泰樂生活-電子商品禮券使用規範與注意事項</p>
            <p class="mb-0"><a href="https://reurl.cc/zlq3Dk">https://reurl.cc/zlq3Dk</a></p>
            <p class="mb-0">●中獎資格及權利不得轉讓，並不得兌換現金、抵換其他贈品。</p>
            <p class="mb-0">●中獎稅依財政部國稅局【所得稅法】辦理，若得獎人為未成年人，則由法</p>
            <p class="mb-0">定代理人代領，贈品列入代領人所得申報。</p>
            <p class="mb-0">●為維護參加者權益及辦理活動之公平性，本活動參加者若透過系統漏洞</p>
            <p class="mb-0">或非法手段(異常帳號建立、惡意程式等類似行為) 參與本活動，將取消其</p>
            <p class="mb-0">資格，並視情節限制該帳號當下與日後活動參加權利。</p>
            <p class="mb-0">●相關注意事項如有更改，以現場公告及說明為準，參加者同意主辦單位</p>
            <p class="mb-0">得以網站活動公告後調整修改之方式取代通知，並有權對本活動所有事宜</p>
            <p class="mb-0">作出解釋或裁決。</p>
          </div> -->

          <div class="col-md-4 mb-2 mx-auto" v-if="type === 'create'">
            <div class="d-flex" :class="{ 'is-invalid': errors.acceptTerms }">
              <!-- <span class="text-danger me-1 align-middle">*</span> -->
              <div class="form-group form-check mx-auto">
                <VField name="acceptTerms" type="checkbox" id="acceptTerms" :value="true" class="form-check-input "  rules="required" />
                <label for="acceptTerms" class="form-check-label text-white noticeFont">已閱讀以上注意事項並同意參加</label>
              </div>
            </div>
            <div  class="invalid-feedback text-center">{{errors.acceptTerms ? '請勾選同意': ''}}</div>
          </div>
        <div class="form-group text-center mt-5 pb-5 d-flex justify-content-evenly">
          <button type="submit" class="btn btn-primary mr-1 fw-bold border-white">{{ type === 'create' ? '參加活動' : '送出'}}</button>
          <button v-if="type === 'update'" @click="this.isRegistration = true" type="button" class="btn btn-primary fw-bold border-white">返回</button>
        </div>
      </VForm>
    </div>
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
      telId: 0,
      changeTitle: false
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
      // window.location = 'https://appcrm.jutretail.com.tw/AwsLucky/Pages/LuckyResponse.aspx'
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
.bg-151515 {
  background-color: #151515;
}
.noticeFont {
  font-size: 14px;
}
</style>
