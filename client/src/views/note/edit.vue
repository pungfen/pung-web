<template>
  <div class="note-edit">
    <el-card>
      <template #header>
        <div>
          <span>Note</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="submit">保存</el-button>
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

  methods: {
    getData() {
      const { uuid } = this.$router.currentRoute.value.params
      if (!uuid) return
      ajax.getNoteUuid(uuid).then((res) => {
        if (res.data.length) this.data = res.data[0]
      })
    },

    submit() {
      const data = this.data
      const { uuid } = this.$router.currentRoute.value.params
      const polling = data.id ? ajax.putNoteUuid : ajax.postNoteUuid
      return polling(uuid, [data]).then(this.getData)
    }
  },

  created() {
    this.getData()
  }
}
</script>

<style scoped>
/* .note-edit; */
</style>
