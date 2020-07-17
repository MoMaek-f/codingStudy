<template>
  <div>
    <my-header />
    <div>
      <el-row style="top: 50px;">
        <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
          <div class="grid-content bg-purple hidden-sm-and-down" style>
            <Affix :offset="50">
              <my-aside ref="aside"/>
            </Affix>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="17" :lg="17" :xl="17">
          <div class="grid-content bg-purple-light">
            <div class="tag" v-if="show" @click="showCategory">
              <el-tag
                effect="plain"
                :type="item.type"
                v-for="item in $store.state.tags"
                :key="item.name"
                @click="$refs.aside.category(item.name)"
              >{{item.name}}</el-tag>
            </div>
            <div v-if="!show">
              <div class="category" v-show="$store.state.articles == ''">暂无相关文章！</div>
              <my-ariticleList v-show="$store.state.articles != []" />
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
import Affix from "../components/affix";
import ariticleList from "../components/ariticleList";

import { get } from "../utils";
export default {
  data() {
    return {
      category: false,
      show: true
    };
  },
  mounted() {
    this.$store.state.selected = "2";
  },
  components: {
    "my-header": Header,
    "my-aside": Aside,
    "my-ariticleList": ariticleList,
    Affix
  },
  methods: {
    showCategory() {
      console.log("123")
      this.show = false
    }
  }
};
</script>

<style lang="less" scoped>
.category {
  background-color: #fff;
  margin: 15px;
  border-radius: 5px;
  text-align: center;
  height: 100px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
div.tag{
    background-color: #fff;
    margin: 15px;
    border-radius: 5px;
    box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
      .el-tag{
        margin: 6px;
        cursor: pointer;
      }
  }
</style>