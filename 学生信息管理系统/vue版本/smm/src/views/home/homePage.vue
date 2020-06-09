<!--
 * @Author: your name
 * @Date: 2020-05-28 21:33:09
 * @LastEditTime: 2020-06-09 08:43:13
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
        <el-menu :default-openeds="['1','2']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>基本信息
            </template>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="1-1" @click="showAllStudent('1-1')">全部学生信息</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>成绩查询
            </template>
            <el-menu-item index="2-1" @click="allStuScores('2-1')">全部学生成绩</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main v-if="selected == '1-1'">
        <el-button style="float:left" @click="back()">返回</el-button>
        <el-button style="float:left" @click="AddStu('2-3')">新增学生</el-button>
        <span style="font-size:18px ">查找学生信息</span>
        <el-input
          type="input"
          v-model="input"
          placeholder="请输入要查询的学号"
          style="width:300px;float:right"
          @change="search(input)"
        ></el-input>
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
          <el-table-column  label="操作" width="170">
            <template slot-scope="scope">
              <el-button style="float:left" @click="toDetail(scope.row)">修改</el-button>
              <el-button @click="deleteMess(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-main v-else-if="selected == '1-2'">
        <span style="font-size: 18px">修改学生信息</span>
        <div>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
            <el-form-item label="姓名">
              <el-input v-model="updateStuMess.name" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="班级">
              <el-input v-model="updateStuMess.class" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="学号">
              <el-input v-model="updateStuMess.Id" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <div style="float: left">
                <el-radio v-model="updateStuMess.gender" label="男">男</el-radio>
                <el-radio v-model="updateStuMess.gender" label="女">女</el-radio>
              </div>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="updateStuMess.address" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="生日">
              <el-input v-model="updateStuMess.birthday" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="民族">
              <el-input v-model="updateStuMess.nation" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="政治面貌">
              <el-input v-model="updateStuMess.Political_outlook" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="所在学院">
              <el-input v-model="updateStuMess.college" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="updateStuMess.phone" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="float:left" @click="updateMess(updateStuMess)">确认</el-button>
              <el-button type="primary" style="float:left" @click="cancel()">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-main v-else-if="selected == '2-1'">
        <el-button style="float:left" @click="back()">返回</el-button>
        <span style="font-size:18px ">查找成绩信息</span>
        <el-input
          type="input"
          v-model="input"
          placeholder="请输入要查询的学号"
          style="width:300px;float:right"
          @change="searchScores(input)"
        ></el-input>
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

          <el-table-column label="操作" width="170">
            <template slot-scope="scope">
              <el-button style="float:left" @click="changeScores(scope.row)">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-main v-else-if="selected == '2-2'">
        <span style="font-size: 18px">修改成绩信息</span>
        <div>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
            <el-form-item label="C">
              <el-input v-model="updateScores.C" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="Java">
              <el-input v-model="updateScores.Java" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="JavaEE">
              <el-input v-model="updateScores.JavaEE" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="javaScript">
              <el-input v-model="updateScores.JavaScript" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="Node">
              <el-input v-model="updateScores.Node" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="React">
              <el-input v-model="updateScores.React" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="Vue">
              <el-input v-model="updateScores.Vue" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="float:left" @click="updateScore(updateScores)">确认</el-button>
              <el-button type="primary" style="float:left" @click="cancel()">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-main v-else-if="selected == '2-3'">
        <span style="font-size: 18px">注册学生信息</span>
        <div>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
            <el-form-item label="姓名">
              <el-input v-model="addStu.name" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="班级">
              <el-input v-model="addStu.class" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="学号">
              <el-input v-model="addStu.Id" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="addStu.gender" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="addStu.address" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="生日">
              <el-input v-model="addStu.birthday" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="民族">
              <el-input v-model="addStu.nation" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="政治面貌">
              <el-input v-model="addStu.Political_outlook" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="所在学院">
              <el-input v-model="addStu.college" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="addStu.phone" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="addStu.password" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item label="身份">
              <el-input v-model="addStu.Identity" style="width: 300px; float:left"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="float:left" @click="confirmAdd(addStu)">确认</el-button>
              <el-button type="primary" style="float:left" @click="cancel()">取消</el-button>
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
    return {
      studentMess: [],
      userid: "",
      selected: "1-1",
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      radio: "女",
      input: "",
      scores: [],
      updateStuMess: "",
      updateScores: "",
      searchMess: [{}],
      addStu:{
        Identity: 'student'
      }
    };
  },
  mounted() {
    this.userid = this.$route.query.username;
    this.getmessage();
  },
  methods: {
    getmessage() {
      this.axios.get("http://localhost:6500/api/find").then(res => {
        const data = res.data;
        console.log(data);
        this.studentMess = data.msg;
        this.scores = data.achieve;
      });
    },
    showAllStudent(select) {
      this.selected = select;
      // console.log("1-1");
      this.getmessage();
    },AddStu(select) {
      this.selected = select
    },
    toDetail(studentMess) {
      this.selected = "1-2";
      console.log(studentMess);
      this.updateStuMess = studentMess;
    },
    allStuScores(select) {
      this.selected = select;
    },
    updateMess(updateStuMess) {
      const Mes = {
        name: updateStuMess.name,
        Id: updateStuMess.Id,
        birthday: updateStuMess.birthday,
        gender: updateStuMess.gender,
        address: updateStuMess.address,
        phone: updateStuMess.phone,
        Identity: updateStuMess.Identity,
        class: updateStuMess.class,
        college: updateStuMess.college,
        Political_outlook: updateStuMess.Political_outlook,
        nation: updateStuMess.nation
      };
      this.axios
        .post(`http://localhost:6500/api/updatemsg/${updateStuMess.Id}`, Mes)
        .then(res => {
          // console.log(res)
          if (res.data.status) {
            alert(res.data.msg);
            this.selected = "1-1";
          }
        });
    },
    cancel() {
      this.selected = "1-1";
    },
    deleteMess(deleteStuMess) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios
            .delete(`http://localhost:6500/api/delete/${deleteStuMess.Id}`)
            .then(res => {
              // console.log(res)
              if (res.data.status) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                this.axios.get("http://localhost:6500/api/find").then(res => {
                  const data = res.data;
                  console.log(data);
                  this.studentMess = data.msg;
                  this.scores = data.achieve;
                });
                this.selected = "1-1";
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    search(input) {
      this.axios
        .get(`http://localhost:6500/api/findmsgbyid/${input}`)
        .then(res => {
          let data = [res.data.user];
          this.studentMess = data;
          // console.log(res);
          if (res.data.status == 400) {
            this.$alert("没有结果", "失败", {
              confirmButtonText: "确定",
            });
          }
        });
    },
    searchScores(input) {
      console.log("13");
      this.axios
        .get(`http://localhost:6500/api/achievement/${input}`)
        .then(res => {
          let data = [res.data.result];
          this.scores = data;
          console.log(res);
          if (res.data.status == 400) {
            this.$alert("没有结果", "失败", {
              confirmButtonText: "确定",
            });
          }
        });
    },
    exit() {
      this.$router.push({ name: "login" });
    },
    back() {
      this.getmessage();
    },
    changeScores(scores) {
      this.selected = "2-2";
      console.log(scores);
      this.updateScores = scores;
    },
    updateScore(updateScore) {
      this.axios
        .post(`http://localhost:6500/api/updateachieve/${updateScore.Id}`, updateScore)
        .then(res => {
          // console.log(res)
          if (res.data.status) {
            alert(res.data.msg);
            this.selected = "2-1";
          }
        });
    },
    confirmAdd(addStu) {
      this.axios
      .post('http://localhost:6500/api/create',addStu)
      .then(res => {
        console.log(res)
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "homePage.less";
</style>

