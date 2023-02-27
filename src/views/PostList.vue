<template>
  <div class="flex items-center justify-between">
    <h1 class="text-3xl font-bold">Posts</h1>

    <RouterLink to="/create" class="btn btn-primary">New post</RouterLink>
  </div>

  <div class="mt-12 space-y-10">
    <template v-if="posts.length > 0">
      <div v-for="post in posts" :key="post.id">
        <RouterLink :to="{ name: 'singlePost', params: { id: post.id } }">
          <h2 class="text-2xl font-bold">{{ post.title }}</h2>
        </RouterLink>

        <div class="mt-2 flex items-center justify-between">
          <p class="text-sm">{{ post.createdAt }}</p>

          <div class="space-x-2">
            <RouterLink
              :to="{ name: 'editPost', params: { id: post.id } }"
              class="text-sm btn btn-link btn-xs"
              >Edit</RouterLink
            >
            <button class="text-sm btn btn-error btn-xs">Delete</button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div>No posts yet!</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import axiosClient from '@/services/axios'
import type Post from '@/types/post'

const posts = ref<Post[]>([])

onMounted(async () => {
  const { data } = await axiosClient.get('/posts')

  posts.value = data.data
})
</script>
