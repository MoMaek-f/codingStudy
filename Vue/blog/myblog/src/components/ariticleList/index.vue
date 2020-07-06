<template>
  <div>
    <el-card @click.native="toDetail(articles[index].content)" class="box-card" v-for="(item,index) in articles" :key="item.article_id" >
      <div slot="header" class="clearfix">
        <el-divider content-position="left">
        <span style="font-size: 20px">{{articles[index].title}}</span>
        <span style="padding: 20px;font-size: 10px">{{articles[index].add_time}}</span>
        </el-divider>
      </div>
      <div class="text item">{{ articles[index].introduce }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      loading: false,
      articles: []
    };
  },
  mounted() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      console.log("获取文章")
      this.axios
      .get("http://localhost:3000/getarticle")
      .then(res => {
        const data = res.data.data;
        console.log(data);
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
    }
  }
};
</script>

<style lang="less">
@import "./style.less";
</style>