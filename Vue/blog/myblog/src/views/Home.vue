<template>
  <div>
    <my-header />
    <div>
      <el-row style="top: 50px;">
        <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
          <div class="grid-content bg-purple hidden-sm-and-down" style>
            <Affix :offset="50">
              <my-aside />
            </Affix>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="17" :lg="17" :xl="17">
          <div class="grid-content bg-purple-light">
            <my-ariticleList />
          </div>
        </el-col>
        <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3" style>
          <div class="grid-content bg-purple hidden-sm-and-down">
            <my-aside />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/header";
import Aside from "../components/aside/left";
import ariticleList from "../components/ariticleList";

import Affix from "../components/affix";

export default {
  name: "Home",
  data() {
    return {
      top: 60
    };
  },
  components: {
    "my-header": Header,
    "my-aside": Aside,
    "my-ariticleList": ariticleList,
    Affix
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
