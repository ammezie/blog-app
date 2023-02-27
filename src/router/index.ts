import { createRouter, createWebHistory } from 'vue-router'
import PostList from '../views/PostList.vue'
import CreatePost from '../views/CreatePost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostList
    },
    {
      path: '/create',
      name: 'createPost',
      component: CreatePost
    }
  ]
})

export default router
