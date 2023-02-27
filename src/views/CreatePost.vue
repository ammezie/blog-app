<template>
  <h1 class="mb-8 text-3xl font-bold">Create post</h1>

  <form class="space-y-4" @submit.prevent="createPost" method="post">
    <div class="form-control">
      <label class="label">Title</label>
      <input
        type="text"
        class="input input-bordered"
        placeholder="Post title"
        v-model="post.title"
      />
    </div>
    <div class="form-control">
      <label class="label">Content</label>
      <textarea
        class="textarea textarea-bordered"
        rows="10"
        placeholder="Post content"
        v-model="post.content"
      ></textarea>
    </div>

    <button class="btn btn-primary">Create Post</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axiosClient from '@/services/axios'

const router = useRouter()

const post = ref({
  title: '',
  content: ''
})

async function createPost() {
  await axiosClient.post('/posts', post.value)

  router.push({ name: 'postList' })
}
</script>
