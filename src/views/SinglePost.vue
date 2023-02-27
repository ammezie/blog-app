<template>
  <p class="mb-1 text-sm">{{ post.createdAt }}</p>
  <h2 class="text-4xl font-bold">{{ post.title }}</h2>

  <div class="mt-5">
    {{ post.content }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type Post from '@/types/post'
import axiosClient from '@/services/axios'
import { useRoute } from 'vue-router'

const post = ref<Post>({
  id: 0,
  title: '',
  content: '',
  createdAt: '',
  updatedAt: ''
})

const route = useRoute()

onMounted(async () => {
  const { data } = await axiosClient.get(`/posts/${route.params.id}`)

  post.value = data.data
})
</script>
