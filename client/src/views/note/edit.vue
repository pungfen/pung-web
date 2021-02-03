<template>
  <div class="note-edit">
    <el-card>
      <template #header>
        <div>
          <span>Note</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
      </template>
      <div>
        <el-input type="textarea" :autosize="{ minRows: 10 }" v-model="data.content"></el-input>
      </div>
    </el-card>
  </div>
</template>

<script>
import ajax from '@/ajax'

export default {
  data() {
    return {
      data: {
        content: ''
      }
    }
  },

  created() {
    const { user } = this.$router.currentRoute.value.params
    if (user) {
      console.log(user)
    }
    ajax.get('/note', { params: { uuid: 'pung' } }).then((res) => {
      this.data = res.data.length && res.data[0]
    })
  }
}
</script>

<style scoped>
/* .note-edit; */
</style>
