<template>
  <div class="w-full bg-gray-800 text-white p-4">
    <div class="flex justify-between items-center">
      <router-link to="/" class="text-2xl font-semibold">Todo List</router-link>
      <div class="flex items-center space-x-6">
        <router-link to="/profile">
          <img
            :src="state.user.avatar_url"
            alt="avatar"
            class="w-10 h-10 rounded-full"
          />
        </router-link>
        <router-link to="/login">
          <button class="btn-danger">Logout</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from "../store"

const { state } = store()
</script>
