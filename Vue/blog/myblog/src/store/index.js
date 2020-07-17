import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: '1',
    articles: [],
    tags: [
      { name: "CSS", type: "success" },
      { name: "JavaScript", type: "info" },
      { name: "http", type: "warning" },
      { name: "html", type: "danger" }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
