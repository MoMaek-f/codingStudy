<template>
  <el-header class="header" style="height: 50px">
    <span @click="home">亮亮的博客</span>
    <div class="nav">
      <ul>
        <li @click="home" :class="selected =='1' ? 'active' : ''">首页</li>
        <li @click="category" :class="selected =='2' ? 'active' : ''">分类</li>
        <li @click="leaveMess" :class="selected =='3' ? 'active' : ''">留言</li>
        <li @click="about" :class="selected =='4' ? 'active' : ''">关于</li>
      </ul>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return{
      selected: '1'
    }
  },
  methods: {
    home() {
      this.$router.push({ path: "/" });
      this.selected = '1';
    },
    category() {
      this.$router.push({ path: "/" });
      this.selected = '2';
    },
    leaveMess() {
      this.$router.push({ path: "/leaveMess" });
      this.selected = '3';
    },
    about() {
      this.$router.push({ path: "/about" });
      this.selected = '4';
    }
  }
};
</script>

<style lang="less">
@import "./style.less";
</style>