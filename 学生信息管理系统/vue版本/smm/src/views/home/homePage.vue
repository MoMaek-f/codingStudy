<!--
 * @Author: your name
 * @Date: 2020-05-28 21:33:09
 * @LastEditTime: 2020-06-04 00:17:39
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
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="1-1" @click="showAllStudent('1-1')">全部学生信息</el-menu-item>
            <el-menu-item index="1-2" @click="queryStudent('1-2')">查询学生信息</el-menu-item>
            <el-menu-item index="1-3" @click="updateStudent('1-3')">修改学生信息</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>成绩查询
            </template>
            <el-menu-item index="2-1">全部学生成绩</el-menu-item>
            <el-menu-item index="2-2">更改学生成绩</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-table :data="studentMess" v-if="selected == '1-1'">
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="class" label="班级" width="100"></el-table-column>
          <el-table-column prop="number" label="学号" width="140"></el-table-column>
          <el-table-column prop="sex" label="性别" width="80"></el-table-column>
          <el-table-column prop="address" label="地址" width="300"></el-table-column>
          <el-table-column prop="date" label="生日" width="140"></el-table-column>
        </el-table>
        <el-table v-else-if="selected == '1-2'">
          <el-form-item label="姓名">
              <el-input v-model="formLabelAlign.name" style="width: 300px; float:left"></el-input>
            </el-form-item>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="class" label="班级" width="100"></el-table-column>
          <el-table-column prop="number" label="学号" width="140"></el-table-column>
          <el-table-column prop="sex" label="性别" width="80"></el-table-column>
          <el-table-column prop="address" label="地址" width="300"></el-table-column>
          <el-table-column prop="date" label="生日" width="140"></el-table-column>
        </el-table>
        <div v-else-if="selected == '1-3'">
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
            <el-form-item label="姓名">
              <el-input v-model="formLabelAlign.name" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="班级">
              <el-input v-model="formLabelAlign.region" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="学号">
              <el-input v-model="formLabelAlign.type" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <div style="float: left">
                <el-radio v-model="radio" label="男">男</el-radio>
                <el-radio v-model="radio" label="女">女</el-radio>
              </div>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="formLabelAlign.type" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="float:left">确认</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-table v-else-if="selected == '2-1'">
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="class" label="班级" width="100"></el-table-column>
          <el-table-column prop="number" label="学号" width="140"></el-table-column>
          <el-table-column prop="sex" label="性别" width="80"></el-table-column>
          <el-table-column prop="address" label="地址" width="300"></el-table-column>
          <el-table-column prop="date" label="生日" width="140"></el-table-column>
        </el-table>
        <el-table v-else-if="selected == '2-2'">
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="class" label="班级" width="100"></el-table-column>
          <el-table-column prop="number" label="学号" width="140"></el-table-column>
          <el-table-column prop="sex" label="性别" width="80"></el-table-column>
          <el-table-column prop="address" label="地址" width="300"></el-table-column>
          <el-table-column prop="date" label="生日" width="140"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      studentMess: [{}],
      userid: "",
      selected: "1-1",
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      radio: '女'
    };
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
        this.studentMess = data.msg;
      });
    },
    showAllStudent(select) {
      this.selected = select;
      console.log("1-1");
    },
    queryStudent(select) {
      this.selected = select;
      console.log("1-2");
    },
    updateStudent(select) {
      this.selected = select;
      console.log("1-3");
    }
  }
};
</script>

<style lang="less" scoped>
@import "homePage.less";
</style>

