import { createRouter, createWebHistory } from 'vue-router'
import test from '../views/test.vue'
import calculatorView from '../views/calculatorView.vue'

const routes = [
  {
    path: '/',
    name: 'calculatorView',
    component: calculatorView
  },
  {
    path: '/test',
    name: 'test',
    component: test
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
