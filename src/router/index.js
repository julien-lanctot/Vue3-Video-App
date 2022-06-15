import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import VideoDetails from '../components/VideoDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'details',
    component: VideoDetails,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router