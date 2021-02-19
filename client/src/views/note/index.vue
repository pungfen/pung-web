<template>
  <view-item>
    <el-form inline>
      <el-form-item label="UUID">
        <el-input v-model="form.data.uuid"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getData">查询</el-button>
      </el-form-item>
    </el-form>

    <flex-box>
      <el-table :data="table.data" :height="flexBox.height">
        <el-table-column label="序号" type="index"></el-table-column>
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
  </view-item>
</template>

<script>
import ajax from '@/ajax'
import { mixinsGenerator } from '@/util'

const config = {
  table: {
    ajax: {
      get: {
        action: 'GET /note'
      }
    }
  }
}

export default {
  mixins: [mixinsGenerator(config)],

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

      // this.table.data = Array(50).fill({
      //   createdAt: new Date(),
      //   content: Math.random() * 20
      // })
    },

    tableEditClick(row) {
      this.$router.push({ name: 'note-uuid', params: { uuid: row.user.uuid } })
    }
  },

  created() {
    this.getData()
  }
}
</script>
