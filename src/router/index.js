import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const One = () => import('../view/emit/one.vue')
// const Two = () => import('../view/emit/two.vue')

const routes = [
  {
    path:'/',
    redirect:"/one"
  },
  {
    path: "/one",
    component: One
  },
  {
    path: "/two",
    component: () => import("../view/emit/two.vue")
  },
  {
    path: "/grid",
    component: () => import("../view/grid.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router