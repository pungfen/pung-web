<template>
  <div></div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Note',

  data() {
    return {
      note: {
        data: [],
        msg: '笔记',
      },
    }
  },

  created() {
    // console.log(ajax)
    const { uuid } = this.$route.query
    axios({
      method: 'get',
      url: '/note',
      data: {
        uuid,
      },
    }).then((res) => {
      console.log(res)
    })
  },
})
</script>

<style></style>
