<!--
 * @Author: your name
 * @Date: 2020-05-28 21:33:09
 * @LastEditTime: 2020-05-29 19:21:28
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
      <span style="cursor:pointer;">明智亮</span>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>基本信息
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>成绩查询
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-table :data="tableData">
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
    // const item = {
    //   name: "明智亮",
    //   class: "1721820",
    //   number: "201720182000",
    //   sex: "男",
    //   address: "上海市普陀区金沙江路 1518 弄",
    //   date: "2016-05-02"
    // };
    return {
      tableData: [
        {
          name: "明智亮",
          class: "1721820",
          number: "201720182000",
          sex: "男",
          address: "上海市普陀区金沙江路 1518 弄",
          date: "2016-05-02"
        }
      ],
      userid: {}
    };
  },
  mounted() {
    this.getmessage();
    this.userid = this.$route.query
    console.log(this.userid,"主页接收用户名")
  },
  methods: {
    getmessage() {
      this.axios.get("http://localhost:6500/api/getmessage",{
        name: this.userid.name
      }).then((res) => {
        console.log(res)
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "homePage.less";
</style>

