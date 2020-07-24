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
              <div class="leavemess">
                留言功能暂未开发
              </div>
          </div>
        </el-col>
        <!-- <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3" style>
          <div class="grid-content bg-purple hidden-sm-and-down">
            <my-aside />
          </div>
        </el-col>-->
      </el-row>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import Aside from "../components/aside/left";
import Affix from "../components/affix"
export default {
components: {
    "my-header": Header,
    "my-aside": Aside,
    Affix
  },
  mounted() {
    this.$store.state.selected = "3";
  }
}
</script>

<style lang="less" scoped>
.leavemess{
  background-color: #fff;
  margin: 12px;
  border-radius: 5px;
  text-align: center;
  line-height: 100px;
  height: 100px;
}
</style>