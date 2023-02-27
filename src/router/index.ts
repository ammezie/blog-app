import { createRouter, createWebHistory } from 'vue-router'
import PostList from '../views/PostList.vue'
import CreatePost from '../views/CreatePost.vue'
import SinglePost from '../views/SinglePost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'postList',
      component: PostList
    },
    {
      path: '/create',
      name: 'createPost',
      component: CreatePost
    },
    {
      path: '/:id',
      name: 'singlePost',
      component: SinglePost
    }
  ]
})

export default router
