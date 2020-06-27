<template>
  <el-container>
    <el-header style="height: 50px">
      <my-header/>
    </el-header>
    <el-container>
      <el-aside class="aside" style="width: 15%;position:fixed">
        <my-aside/>
      </el-aside>
      <el-main>
        <my-ariticleList/>
      </el-main>
      <el-aside width="200px">right</el-aside>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Header from "../components/header";
import Aside from "../components/aside/left";
import ariticleList from "../components/ariticleList";

export default {
  name: "Home",
  components: {
    "my-header": Header,
    "my-aside": Aside,
    "my-ariticleList": ariticleList
  }
};
</script>
<style lang="less">
.el-header,
.el-footer {
  height: 50px;
  color: #333;
  text-align: center;
  line-height: 50px;
  padding: 0;
}
.el-aside {
  color: #333;
  text-align: center;
}

.el-main {
  text-align: center;
  line-height: 160px;
  margin-left: calc(15% + 15px);
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
