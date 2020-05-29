<!--
 * @Author: your name
 * @Date: 2020-05-27 10:53:50
 * @LastEditTime: 2020-05-28 00:54:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\仿知乎\zhihu-vue\src\views\login.vue
--> 
<template>
  <div class="HomePage">
    <div class="main">
      <div class="main-content">
        <img
          class="logo"
          src="https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png"
          alt
        />
        <div class="loginContainer-content">
          <div class="loginContainer-inner">
            <el-form
        ref="form"
        :model="form"
        :rules="ruleForm"
        status-icon
        label-width="80px"
        class="loginForm"
      >
        <h3>登陆</h3>
        <el-form-item
          label="用户名"
          prop="name"
        >
          <el-input
            type="text"
            v-model="form.name"
            auto-complete="off"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            type="password"
            v-model="form.password"
            auto-complete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="homeBut"
            type="primary"
            plain
            @click="submit"
            :loading="logining"
          >登录</el-button>
          <el-button
            class="loginBut"
            type="primary"
            plain
            @click="resetForm()"
          >重置</el-button>
        </el-form-item>
      </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logining: false,
      form: {
        name: 'admin',
        password: '123456'
      },
      ruleForm: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    dothis() {
      console.log('123')
   }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
