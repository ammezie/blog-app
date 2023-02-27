<template>
  <h1 class="mb-8 text-3xl font-bold">Edit post</h1>

  <form class="space-y-4" @submit.prevent="updatePost" method="post">
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

    <button class="btn btn-primary">Update Post</button>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axiosClient from '@/services/axios'

const router = useRouter()
const route = useRoute()

const post = ref({
  title: '',
  content: ''
})

onMounted(async () => {
  const { data } = await axiosClient.get(`/posts/${route.params.id}`)

  post.value = data.data
})

async function updatePost() {
  await axiosClient.put(`/posts/${route.params.id}`, post.value)

  router.push({ name: 'home' })
}
</script>
