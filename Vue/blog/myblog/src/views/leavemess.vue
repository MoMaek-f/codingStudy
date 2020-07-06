<template>
  <div>
    <my-header/>
  </div>
</template>
<script>
import Header from "../components/header";
export default {
  data() {
    return {

    };
  },
  components: {
    "my-header": Header,
  },
  methods: {
    
  },
};
</script>

<style lang="less">
.ant-comment{
  margin-top: 100px;
}
.ant-input{
  width: 36%;
}
</style>