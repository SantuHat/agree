<template>
  <!-- <RouterLink to="/">Home</RouterLink> | -->
  <div class="d-flex">
    <!-- <section class="">
      <button type="button" @click="filterData('2024-06-12')">
        6/12
      </button>
      <h5>人數:{{ filteredData.length }}</h5>
    </section> -->
    <section class="">
      <button type="button" @click="filterData('2024-06-13')">
        6/13
      </button>
      <h5>人數:{{ filteredData.length }}</h5>
    </section>
  </div>
  <!-- <pre>
    {{ filteredData }}
  </pre> -->
    <table class="text-center box-shadow-gray-300 border-collapse border-1 p-1" >
      <thead>
        <tr>
          <th>編號</th>
          <th>手機號碼</th>
          <th>建立時間</th>
        </tr>
      </thead>
      <tbody v-for="item in filteredData" :key="item.id">
        <tr>
          <td>{{ item.id }}</td>
          <td class="p-1">{{ item.tel }}</td>
          <td class="p-1">{{ item.created_at }}</td>
        </tr>
      </tbody>
    </table>
    <button type="button">All</button>
    <table class="text-center box-shadow-gray-300 border-collapse border-1 p-1" >
      <!-- <caption>
        報名資訊 2024
      </caption> -->
      <thead>
        <tr>
          <th>編號</th>
          <th>手機號碼</th>
          <th>建立時間</th>
        </tr>
      </thead>
      <tbody v-for="item in telData" :key="item.id">
        <tr>
          <td>{{ item.id }}</td>
          <td class="p-1">{{ item.tel }}</td>
          <td class="p-1">{{ item.created_at }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import axios from 'axios'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      telData: [],
      filteredData: []
    }
  },
  methods: {
    getDate () {
      const url = `${VITE_APP_API_URL}/${VITE_APP_API_NAME}`
      axios.get(url)
        .then((res) => {
          console.log(res.data)
          this.telData = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    filterData (date) {
      this.filteredData = this.telData.filter((item) => {
        return item.created_at.startsWith(date)
      })
    }
  },
  mounted () {
    this.getDate()
  }
}
</script>

<style scoped>
td, th {
  border: 1px solid;
}
.box-shadow-gray-300 {
  box-shadow: 1px 1px 3px #8B8B8B;
}
.border-collapse {
  border-collapse:separate;
}
</style>
