<template>
  <el-header class="header" style="height: 50px">
    <span @click="home">亮亮的博客</span>
    <div class="nav">
      <ul>
        <li @click="home" :class="$store.state.selected =='1' ? 'active' : ''">首页</li>
        <li @click="category" :class="$store.state.selected =='2' ? 'active' : ''">分类</li>
        <li @click="leaveMess" :class="$store.state.selected =='3' ? 'active' : ''">留言</li>
        <li @click="about" :class="$store.state.selected =='4' ? 'active' : ''">关于</li>
      </ul>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return{
    }
  },
  methods: {
    home() {
      this.$store.state.selected = '1';
      this.$router.push({ path: "/" });
    },
    category() {
      this.$store.state.selected = '2';
      this.$router.push({ path: "/" });
    },
    leaveMess() {
      this.$store.state.selected = '3';
      this.$router.push({ path: "/leaveMess" });
    },
    about() {
      this.$store.state.selected = '4';
      this.$router.push({ path: "/about" });
    }
  }
};
</script>

<style lang="less">
@import "./style.less";
</style>