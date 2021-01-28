<template>
  <div class="md:w-1/2 mx-auto mt-20">
    <el-form
      :model="form.data"
      :rules="form.rules"
      label-width="80px"
      ref="form"
    >
      <el-form-item
        label="手机号"
        prop="phone"
      >
        <el-input v-model="form.data.phone"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input v-model="form.data.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submit"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'login',

  data () {
    return {
      form: {
        data: {
          phone: '',
          password: ''
        },
        rules: {
          phone: [{ required: true, message: '请输入手机号' }],
          password: [{ required: true, message: '请输入密码' }]
        }
      }
    }
  },

  methods: {
    submit () {
      this.$refs.form.validate(
        valid => {
          if (!valid) return
          debugger
          this.$ajax.post({ url: '/login', data: this.form.data }).then(
            res => {
              console.log(res)
            }
          )
        }
      )
    }
  }
})
</script>
