<template>
  <div class="header" style="height: 50px">
    <el-row>
      <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple hidden-sm-and-down">
          <!-- <img src="../../assets/logo.png" alt="" class="logo"> -->
          <span class="title" @click="home">亮亮的博客</span>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="20" :lg="20" :xl="20">
        <div class="grid-content bg-purple-light">
          <div class="nav">
            <ul>
              <li @click="home" :class="$store.state.selected =='1' ? 'active' : ''">
                <i class="el-icon-house"></i>
                首页
                </li>
              <li @click="category" :class="$store.state.selected =='2' ? 'active' : ''">
                <i class="el-icon-price-tag"></i>
                分类
              </li>
              <li @click="leaveMess" :class="$store.state.selected =='3' ? 'active' : ''">
               <i class="el-icon-chat-square"></i>
                留言
              </li>
              <li @click="about" :class="$store.state.selected =='4' ? 'active' : ''">
                <i class="el-icon-user"></i>
                关于
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    home() {
      this.$store.state.selected = "1";
      this.$router.push({ path: "/" });
    },
    category() {
      this.$store.state.selected = "2";
      this.$store.state.category = true;
      this.$router.push({ path: "/category" });
    },
    leaveMess() {
      this.$store.state.selected = "3";
      this.$router.push({ path: "/leaveMess" });
    },
    about() {
      this.$store.state.selected = "4";
      this.$router.push({ path: "/about" });
    },
    click() {
      alert("123");
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>