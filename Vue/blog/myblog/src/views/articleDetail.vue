<template>
  <div id="app">
    <my-header />
    <el-row style="top: 50px;">
      <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple hidden-sm-and-down">
          <Affix :offset="50">
            <my-aside />
          </Affix>
        </div>
      </el-col>
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
        <div class="grid-content bg-purple-light">
          <div style="background-color: #fff">
            <div style="margin-top: 12px">
            头部
          </div>
          <div v-html="compiledMarkdown"></div>
          </div>
        </div>
      </el-col>
      <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4"></el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "../components/header";
import Aside from "../components/aside/left";

import Affix from "../components/affix";

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

export default {
  name: "test",
  data() {
    return {
      articles: ""
    };
  },
  components: {
    "my-header": Header,
    "my-aside": Aside,
    Affix
  },
  computed: {
    compiledMarkdown() {
      // let detail = "- 怎么还没有用";
      let detail = this.articles;
      return marked(detail || "", {
        sanitize: true
      });
    }
  },
  mounted() {
    console.log(this.$route.query);
    this.articles = this.$route.query.content;
  }
};
</script>

<style lang="less">

pre{
  display: block;
  background-color:#f3f3f3;
   padding: .5rem !important;
   overflow-y: auto;
   font-weight: 300;
   font-family: Menlo, monospace;
   border-radius: .3rem;
}
pre{
  background-color: #283646 !important;
}
/* pre >code{
  border:0px !important;
  background-color: #283646 !important;
  color:#FFF;

}
code {
  display: inline-block ;
  background-color:#f3f3f3;
  border:1px solid #fdb9cc;
  border-radius:3px;
  font-size: 12px;
  padding-left: 5px;
  padding-right: 5px;
  color:#4f4f4f;
  margin: 0px 3px;
} */
pre >code{
  border:0px !important;
  background-color: #283646 !important;
  /* background: inherit !important; */
  color:#FFF;
}

code {
  background-color:#fff5f5;
  border-radius:3px;
  font-size: 12px;
  padding: 2px 4px;
  color:#ff502c;
}

</style>