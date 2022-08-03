import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDE from '../views/MovieDE.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie/:id',
    name: 'MovieDE',
    component: MovieDE
  }
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
