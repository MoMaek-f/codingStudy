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
      <el-divider content-position='left'><span>最新文章</span></el-divider>
      </div>
      <ul class="newestArticle">
        <li v-for="(item,index) in newestArticle" :key="item.article_id" >
          <a @click="toDetail(item.article_id)">{{newestArticle[index].title}}</a>
        </li>
      </ul>
    </div>
    <div class="tag">
      <div>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
      </div>
    </div>
  </el-aside>
</template>

<script>
import {get} from "../../../utils"
export default {
  name: "Aside",
  data() {
    return {
      newestArticle: []
    };
  },
  mounted() {
    this.getNewestArticle();
  },
  methods: {
    getNewestArticle() {
      get("/getNewestArticle")
      .then(res => {
        // console.log(res.data, "最新文章");
        this.newestArticle = res.data;
      })
  },
  toDetail(id) {
      this.$router.push({ 
        path: '/ariticleDetail',
        query: {
          content: id
        }
      })
    }
    }
};
</script>

<style lang="less" >
@import "./style.less";
.el-divider--horizontal {
  margin: 2px;
}
</style>