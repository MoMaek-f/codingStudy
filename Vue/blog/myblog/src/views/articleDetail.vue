<template>
  <div id="app">
    <my-header />
    <el-row style="top: 50px;" >
      <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple hidden-sm-and-down">
          <Affix :offset="50">
            <my-aside />
          </Affix>
        </div>
      </el-col>
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
        <div class="grid-content bg-purple-light">
          <div style="background-color: #fff" v-loading="loading" element-loading-text="加载中">
            <div style="margin-top: 12px"></div>
            <div v-html="compiledMarkdown" style="padding: 20px"></div>
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
import {get} from "../utils"

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
      content: "",
      id: "",
      loading: true
    };
  },
  components: {
    "my-header": Header,
    "my-aside": Aside,
    Affix
  },
  computed: {
    compiledMarkdown() {
      let detail = this.content;
      return marked(detail || "", {
        sanitize: true
      });
    },
  },
  watch: {
    $route() {
      this.id = this.$route.query.content
      this.getArticleById()
    }
  },
  mounted() {
    this.id = this.$route.query.content;
    this.getArticleById();
  },
  methods: {
    getArticleById() {
      get(`/getArticleById?id=${this.id}`)
      .then(res => {
        this.content =  res.data[0].content
        this.loading =false
      });
    }
  }
};
</script>

<style lang="less">
pre {
  display: block;
  background-color: #f3f3f3;
  padding: 0.5rem !important;
  overflow-y: auto;
  font-weight: 300;
  font-family: Menlo, monospace;
  border-radius: 0.3rem;
}
pre {
  background-color: #283646 !important;
}
pre > code {
  border: 0px !important;
  background-color: #283646 !important;
  /* background: inherit !important; */
  color: #fff;
}

code {
  background-color: #fff5f5;
  border-radius: 3px;
  font-size: 12px;
  padding: 2px 4px;
  color: #ff502c;
}
</style>