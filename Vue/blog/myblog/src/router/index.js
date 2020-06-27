import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '1234',
      keepAlive: true, // 需要被缓存
  }
  },
  {
    path: '/leaveMess',
    name: 'leaveMess',
    component: () => import('../views/leavemess.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/aboutme.vue')
  },
  {
    path: '/ariticleDetail',
    name: 'ariticleDetail',
    component: () => import('../views/articleDetail.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
