<template>
  <div>
    <el-card @click.native="toDetail(articles[index].content)" class="box-card" v-for="(item,index) in articles" :key="item.article_id" >
      <div slot="header" class="clearfix">
        <el-divider content-position="left">
        <span style="font-size: 20px">{{articles[index].title}}</span>
        <span style="padding: 20px;font-size: 10px">{{articles[index].add_time.slice(0,10)}}</span>
        </el-divider>
      </div>
      <!-- <div class="text item">{{ articles[index].introduce }}</div> -->
      <div v-html="compiledMarkdown(articles[index].introduce)"></div>
    </el-card>
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
export default {
  name: "main",
  data() {
    return {
      loading: false,
      articles: [],
      introduce: []
    };
  }, 
    mounted() {
      this.getArticle()
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
      console.log("获取文章")
      this.axios
      .get("http://localhost:3000/getarticle")
      .then(res => {
        const data = res.data.data;
        console.log(data,"articles");
        this.articles = data
      });
    },
    toDetail(item) {
      console.log("123")
      this.$router.push({ 
        path: '/ariticleDetail',
        query: {
          content: item
        }
      })
    },
    compiledMarkdown(index){
      return marked(index || "", {
        sanitize: true
      });
    }
  }
};
</script>

<style lang="less">
@import "./style.less";
</style>