<template>
  <div v-loading="loading" element-loading-text="加载中">
    <el-card @click.native="toDetail(item.article_id)"  class="box-card" v-for="(item,index) in articles" :key="item.article_id">
      
      <div>
        <el-divider content-position="left" style="position: absolute;top: 40px">
          <span class="title" style="font-size: 20px">{{articles[index].title}}</span>
        </el-divider>
        </div>
          <span style="font-size: 10px;margin:40px">{{articles[index].add_time.slice(0,10)}}</span>
      <div v-html="compiledMarkdown(articles[index].introduce)" style="margin: 10px">

      </div>
    </el-card>
  </div>
</template>

<script>
let marked = require("marked");
let hljs = require("highlight.js");
import "highlight.js/styles/default.css";
import { get } from "../../utils/index";

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
  name: "main",
  data() {
    return {
      loading: true,
      articles: [],
      introduce: []
    };
  },
  mounted() {
    this.getArticle();
  },
  computed: {
    // compiledMarkdown() {
    //   // let detail = this.articles[0].introduce;
    //   // let detail = "`console.log()`";
    //   return marked(this.articles[0].introduce || "", {
    //     sanitize: true
    //   });
    // }
  },
  methods: {
    getArticle() {
      get("/getarticle")
      .then(res => {
        console.log(res.data);
        const data = res.data;
        this.articles = data;
        this.loading = false;
      });
    },
    toDetail(id) {
      this.$router.push({
        path: "/ariticleDetail",
        query: {
          content: id
        }
      });
    },
    compiledMarkdown(index) {
      return marked(index || "", {
        sanitize: true
      });
    }
  }
};
</script>

<style lang="less">
@import "./style.less";
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