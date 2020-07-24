<template>
  <el-aside width="100%" class="aside">
    <div class="avatar">
      <img src="../../../assets/avatar.jpg" alt class="avatar" />
      <span class="name">亮亮</span>
      <span class="subname">时间，给勤奋者带来收获，给懒惰者带来空虚</span>
      <ul class="social">
        <li>
          <img src="../../../assets/GitHub.png" alt />
          <a href="https://github.com/MoMaek-f" target="_blank">Github</a>
        </li>
        <li>
          <img src="../../../assets/juejin.png" alt />
          <a href="https://juejin.im/user/5d8036086fb9a06ae57d2369" target="_blank">掘金</a>
        </li>
      </ul>
    </div>
    <div class="publish">
      <div>
        <el-divider content-position="left">
          <span>最新文章</span>
        </el-divider>
      </div>
      <ul class="newestArticle">
        <li v-for="(item,index) in newestArticle" :key="item.article_id">
          <span @click="toDetail(item.article_id)">{{newestArticle[index].title}}</span>
        </li>
      </ul>
    </div>
    <div class="tag">
        <el-tag
          effect="plain"
          :type="random()"
          v-for="item in $store.state.tags"
          :key="item.name"
          @click="category(item.name)"
        >{{item.name}}</el-tag>
    </div>
  </el-aside>
</template>

<script>
import { get } from "../../../utils";
export default {
  name: "Aside",
  data() {
    return {
      newestArticle: [],
    };
  },
  mounted() {
    this.getNewestArticle();
  },
  methods: {
    getNewestArticle() {
      get("/getNewestArticle").then(res => {
        this.newestArticle = res.data;
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
    category(category) {
      this.$store.state.selected = '2'
      this.$store.state.category = false
      this.$router.push({ path: "/category" })
      get(`/getArticleByType?type=${category}`).then(res => {
        const data = res.data
        console.log(data);
        this.$store.state.articles = data
      });
    },
    random() {
      const type = this.$store.state.type[Math.floor(Math.random()*5)]
      return type
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
.el-divider--horizontal {
  margin: 2px;
}
</style>