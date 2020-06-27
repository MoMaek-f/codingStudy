<template>
    <div>
    <a-card :loading="loading" v-for="(item,index) in articles" :key="index" :title="articles[index].title" @click="toDetail" class="articles-container">
      <div>
        {{articles[index].content}}
      </div>
    </a-card>
  </div>
  
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      loading: false,
      articles: [
        {
          title: 'title1',
          content: '这里是内容1'
        },
        {
          title: 'title2',
          content: '这里是内容2'
        },
        {
          title: 'title2',
          content: '这里是内容2'
        },
        {
          title: 'title2',
          content: '这里是内容2'
        },
        {
          title: 'title2',
          content: '这里是内容2'
        },
        {
          title: 'title2',
          content: '这里是内容2'
        },
        {
          title: 'title2',
          content: '这里是内容2'
        },
      ]
    };
  },
  methods: {
    toDetail() {
      this.$router.push({path: "/ariticleDetail"})
    }
  },

}
</script>

<style lang="less">
@import "./style.less";
</style>