<template>
  <div>
    <h1>笔记</h1>
  </div>

  <el-form inline>
    <el-form-item label="UUID">
      <el-input v-model="form.data.uuid"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="getData">查询</el-button>
    </el-form-item>
  </el-form>

  <flex-box v-model:height="table.height">
    <el-table :data="table.data">
      <el-table-column label="创建时间">
        <template #default="{ row }">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ row.createdAt }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column>
        <template #default="{ row }">
          <el-button type="text" @click="tableEditClick(row)">查看</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </flex-box>
</template>

<script>
import ajax from '@/ajax'
import FlexBox from '@/options/components/project/flex-box'

export default {
  components: {
    FlexBox
  },
  data() {
    return {
      flexBox: {
        height: 0
      },
      form: {
        data: {
          uuid: ''
        }
      },
      table: {
        height: 10,
        data: []
      }
    }
  },

  methods: {
    getData() {
      let data = this.form.data
      ajax.getNote(data).then((res) => {
        if (res.data.length) this.table.data = res.data
      })
    },

    tableEditClick(row) {
      this.$router.push({ name: 'note-uuid', params: { uuid: 'pung' } })
    }
  },

  created() {
    this.getData()
  }
}
</script>

<style></style>
