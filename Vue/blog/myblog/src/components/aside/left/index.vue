<template>
  <el-aside width="100%" class="aside">
    <div class="avatar">
      <img src="../../../assets/avatar.jpg" alt class="avatar" />
      <span>亮亮</span>
      <ul>
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
      
      <span>最新文章</span>
      <el-divider></el-divider>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
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
export default {
  name: "Aside",
  data() {
    return {};
  }
};
</script>

<style lang="less">
@import "./style.less";
.el-divider--horizontal{
  margin: 2px;
}
</style>