import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: '1',
    articles: [],
    tags: [
      { name: "CSS",  },
      { name: "JavaScript" },
      { name: "http"},
      { name: "html"  },
      { name: "前端"  },
      { name: "阅读"  },
      { name: "axios" },
      { name: "koa" },
      { name: "mysql" },
      { name: "vue"},
    ],
    type: ['','success','info','warning','danger'],
    category: true
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
