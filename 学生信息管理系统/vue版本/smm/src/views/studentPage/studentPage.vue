<!--
 * @Author: your name
 * @Date: 2020-05-28 21:33:09
 * @LastEditTime: 2020-06-09 09:36:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学生信息管理系统\vue版本\smm\src\views\home\homePage.vue
--> 
<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
      <span style="float: left; font-size:20px">明智亮学生信息管理系统</span>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 25px; cursor:pointer;"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="exit()">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span style="cursor:pointer;">{{userid}}</span>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>基本信息
            </template>
            <el-menu-item index="1-1" @click="queryMess('1-1')">查询信息</el-menu-item>
            <el-menu-item index="1-2" @click="changePass('1-2')">修改密码</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>成绩查询
            </template>
            <el-menu-item index="2-1" @click="searchScores('2-1')">成绩查询</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main v-if="selected=='1-1'">
        <el-table :data="studentMess" key="studentMess">
          <el-table-column type="index" label="序号" width="80"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="class" label="班级" width="100"></el-table-column>
          <el-table-column prop="Id" label="学号" width="120"></el-table-column>
          <el-table-column prop="gender" label="性别" width="80"></el-table-column>
          <el-table-column prop="address" label="地址" width="120"></el-table-column>
          <el-table-column prop="birthday" label="生日" width="120"></el-table-column>
          <el-table-column prop="nation" label="民族" width="80"></el-table-column>
          <el-table-column prop="Political_outlook" label="政治面貌" width="80"></el-table-column>
          <el-table-column prop="college" label="所在学院" width="140"></el-table-column>
          <el-table-column prop="phone" label="联系方式" width="140"></el-table-column>
        </el-table>
      </el-main>
      <el-main v-else-if="selected == '1-2'">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          :label-position="labelPosition"
        >
          <el-form-item label="原密码" prop="pass">
            <el-input
              type="password"
              v-model="this.password"
              autocomplete="off"
              style="width: 300px;float: left"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              style="width: 300px;float: left"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              style="width: 300px;float: left"
            ></el-input>
          </el-form-item>
          <el-form-item style="float: left">
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-main v-else-if="selected == '2-1'">
        <el-table :data="scores" key="scores">
          <el-table-column type="index" label="序号" width="120"></el-table-column>
          <el-table-column prop="Id" label="学号" width="120"></el-table-column>
          <el-table-column prop="C" label="C" width="120"></el-table-column>
          <el-table-column prop="Java" label="Java" width="120"></el-table-column>
          <el-table-column prop="JavaEE" label="JavaEE" width="120"></el-table-column>
          <el-table-column prop="JavaScript" label="JavaScript" width="120"></el-table-column>
          <el-table-column prop="Node" label="Node" width="120"></el-table-column>
          <el-table-column prop="React" label="React" width="120"></el-table-column>
          <el-table-column prop="Vue" label="Vue" width="120"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      studentMess: [],
      updateStuMess: "",
      data1: [],
      userid: "",
      password: "",
      selected: "1-1",
      labelPosition: "left",
      ruleForm: {
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      scores: []
    };
  },
  mounted() {
    this.userid = this.$route.query.username;
    this.password = this.$route.query.password;
    this.getmessage();
  },
  methods: {
    getmessage() {
      this.axios
        .get(`http://localhost:6500/api/findmsgbyid/${this.userid}`)
        .then(res => {
          let data = [res.data.user];
          this.studentMess = data;
        });
    },
    queryMess(index) {
      this.selected = index;
    },
    changePass(index) {
      this.selected = index;
    },
    queryScores(index) {
      this.selected = index;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
          this.password = this.ruleForm.pass;
          this.axios
            .post(
              `http://localhost:6500/api/updatemsg/${this.userid}`,
              {password:this.password}
            )
            .then(res => {
              // console.log(res)
              if (res.data.status) {
                alert(res.data.msg);
                this.selected = "1-1";
              }
            });
        } else {
          console.log("请重新输入");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    exit() {
      console.log("123");
      this.$router.push({ name: "login" });
    },
    toDetail(studentMess) {
      this.selected = "1-3";
      console.log(studentMess);
      this.updateStuMess = studentMess;
    },
    searchScores(select) {
      this.selected = select;
      this.axios
        .get(`http://localhost:6500/api/achievement/${this.userid}`)
        .then(res => {
          let data = [res.data.result];
          this.scores = data;
          console.log(res);
          if (res.data.status == 400) {
            this.$alert("没有结果", "失败", {
              confirmButtonText: "确定"
            });
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  .el-container {
    .el-aside {
      color: #333;
    }
  }
}
</style>

