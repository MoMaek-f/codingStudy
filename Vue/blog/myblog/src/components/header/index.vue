<template>
  <div class="header" style="height: 50px">
    <el-row>
      <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple hidden-sm-and-down">
          <span class="logo" @click="home">亮亮的博客</span>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="20" :lg="20" :xl="20">
        <div class="grid-content bg-purple-light">
          <div class="nav">
            <ul>
              <li @click="home" :class="$store.state.selected =='1' ? 'active' : ''">首页</li>
              <li @click="category" :class="$store.state.selected =='2' ? 'active' : ''">分类</li>
              <li @click="leaveMess" :class="$store.state.selected =='3' ? 'active' : ''">留言</li>
              <li @click="about" :class="$store.state.selected =='4' ? 'active' : ''">关于</li>
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