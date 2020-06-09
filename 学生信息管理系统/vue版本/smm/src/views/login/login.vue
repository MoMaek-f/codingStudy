<!--
 * @Author: your name
 * @Date: 2020-05-28 19:50:45
 * @LastEditTime: 2020-06-09 09:40:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: \学生信息管理系统\vue版本\smm\src\views\login\login.vue
--> 
<template>
  <div id="login">
      <el-alert title="管理员:1234 : 密码:1234;            学生账号:学号,如201720182001 : 密码:1234" type="info" width="200"></el-alert>
    <div class="loginToHome">
      <el-form
        ref="form"
        :model="form"
        :rules="ruleForm"
        status-icon
        label-width="80px"
        class="loginForm"
      >
        <h3>登录</h3>
        <el-form-item label="用户名" prop="name">
          <el-input type="text" v-model="form.name" auto-complete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="homeBut" type="primary" plain @click="submit" :loading="logining">登录</el-button>
          <el-button class="loginBut" type="primary" plain @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logining: false,
      form: {
        name: "",
        password: ""
      },
      ruleForm: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.logining = true;
          this.axios
            .post("http://localhost:6500/api/login", {
              Id: this.form.name,
              password: this.form.password
            })
            .then(res => {
              const data = res.data;
              console.log(data);
              if (data.status === 200) {
                this.logining = false;
                if (data.user.Identity == "admin") {
                  this.$router.push({
                    name: "homePage",
                    query: {
                      username: this.form.name,
                      password: this.form.password
                    }
                  });
                } else {
                  this.$router.push({
                    name: "studentPage",
                    query: {
                      username: this.form.name,
                      password: this.form.password
                    }
                  });
                }
              } else {
                this.logining = false;
                this.$alert("用户名或密码错误!", "登陆失败", {
                  confirmButtonText: "返回"
                });
              }
            });
        } else {
          console.log("无效登录!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
@import "./login.less";
</style>