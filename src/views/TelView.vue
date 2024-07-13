<template>
  <RouterLink to="/">Home</RouterLink> |
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
      telData: []
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
    }
  }
  // mounted () {
  //   this.getDate()
  // }
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
