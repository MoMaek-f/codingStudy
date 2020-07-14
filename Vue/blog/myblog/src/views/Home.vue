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
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import Aside from "../components/aside/left";
import ariticleList from "../components/ariticleList";

import Affix from "../components/affix";

export default {
  name: "Home",
  data() {
    return {
      loading: true
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
<style lang="less" scoped>
</style>
