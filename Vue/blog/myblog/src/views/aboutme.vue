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
            <div class="about">
              <div class="aboutblog">
              <el-divider content-position="left">blog</el-divider>
                <div v-html="compiledMarkdown1"></div>
              </div>
              <div class="aboutme">
              <el-divider content-position="left">关于我</el-divider>
                <div v-html="compiledMarkdown2"></div>
              </div>
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
let marked = require("marked");
let hljs = require("highlight.js");
import "highlight.js/styles/default.css";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  }
});

import Header from "../components/header";
import Aside from "../components/aside/left";
import Affix from "../components/affix";

import {get} from "../utils"
export default {
  data() {
    return {
      blog: '',
      jianli: ''
    }
  },
  components: {
    "my-header": Header,
    "my-aside": Aside,
    Affix
  },
  computed: {
    compiledMarkdown1() {
      let detail = this.blog;
      return marked(detail || "", {
        sanitize: true
      });
    },
    compiledMarkdown2() {
      let detail = this.jianli;
      return marked(detail || "", {
        sanitize: true
      });
    }
  },
  mounted(){
    this.getMyMess()
  },
  methods:{
    getMyMess() {
      get("/getMyMess")
      .then(res => {
        console.log(res.data,"mess")
        const data = res.data[0]
        this.blog = data.blog
        this.jianli = data.mymess
      })
    }
  }
};
</script>

<style lang="less" scoped>
.about {
  background-color: #fff;
  margin: 12px 12px 0 12px;
  border-radius: 5px;
  padding: 10px;
  ul{
    li{
      margin: 8px 0;
    }
  }
  .aboutblog{
    margin-bottom: 50px;
  }
}
</style>