<!--
 * @Author: your name
 * @Date: 2020-05-28 21:33:09
 * @LastEditTime: 2020-06-04 14:44:56
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
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span style="cursor:pointer;">{{userid}}</span>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>基本信息
            </template>
            <el-menu-item index="1-1" @click="queryMess('1-1')">查询信息</el-menu-item>
            <el-menu-item index="1-2" @click="updataMess('1-2')">修改密码</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>成绩查询
            </template>
            <el-menu-item index="2-1">全部成绩查询</el-menu-item>
            <el-menu-item index="2-2">不及格成绩查询</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main v-if="selected=='1-1'">
        <el-table :data="tableData" @click="toDetail(tableData.name)">
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="class" label="班级" width="100"></el-table-column>
          <el-table-column prop="number" label="学号" width="140"></el-table-column>
          <el-table-column prop="sex" label="性别" width="80"></el-table-column>
          <el-table-column prop="address" label="地址" width="300"></el-table-column>
          <el-table-column prop="date" label="生日" width="140"></el-table-column>
        </el-table>
      </el-main>
      <el-main v-else-if="selected == '1-2'">
        <div>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            :label-position="labelPosition"
          >
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
    return {
      tableData: [{}],
      userid: "",
      selected: "1-1",
      labelPosition: "left",
      ruleForm: {
          pass: '',
          checkPass: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
  },
  mounted() {
    this.getmessage();
    this.userid = this.$route.query.username;
    console.log(this.userid, "主页接收用户名");
  },
  methods: {
    getmessage() {
      this.axios.get("http://localhost:6500/api/find").then(res => {
        const data = res.data;
        console.log(data);
      });
    },
    queryMess(index) {
      this.selected = index;
    },
    updataMess(index) {
      this.selected = index;
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    toDetail(index) {
      this.selected = index;
      console.log('tidetail')
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

