<template>
  <pu-table :data="table.data">
    <pu-table-column
      label="用户UUID"
      prop="uuid"
    ></pu-table-column>
    <pu-table-column label="创建时间"></pu-table-column>
    <pu-table-column label="更新时间"></pu-table-column>
  </pu-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'admin-note',

  data() {
    return {
      table: {
        data: [
          {
            uuid: '111'
          }
        ]
      }
    }
  }
})
</script>

<style>
</style>
