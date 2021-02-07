<template>
  <div>
    <h1>笔记</h1>
  </div>

  <flex-box v-model:height="table.height">
    <el-table :data="table.data" :show-header="false">
      <el-table-column>
        <template #default="{ row }">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="content"></el-table-column>
      <el-table-column>
        <template #default="{ row }">
          <el-button type="text">查看</el-button>
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
      table: {
        height: 10,
        data: Array(30).fill({ date: '2021-1-22', content: '哈哈江哈斯的卡上打开链接啥的' })
      }
    }
  },

  created() {
    // console.log(ajax)
  }
}
</script>

<style></style>
