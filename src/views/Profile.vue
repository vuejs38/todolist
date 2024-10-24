<template>
  <div class="flex justify-between w-full p-4">
    <div class="flex flex-col space-y-6">
      <img
        :src="userFromStorage.avatar_url"
        alt="avatar"
        class="rounded-full h-72 w-72 border border-gray-300"
      />

      <input
        type="file"
        accept="image/*"
        class="border-transparent"
        @change="changeAvatar"
      />
    </div>

    <div>
      <span>Username</span>
      <span>Email</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"

const emit = defineEmits()

const userFromStorage = reactive(JSON.parse(localStorage.getItem("user") || "{}"))

const changeAvatar = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    const reader = new FileReader()

    reader.onload = (e) => {
      userFromStorage.avatar_url = e.target?.result
      localStorage.setItem("user", JSON.stringify(userFromStorage))
    }

    reader.readAsDataURL(file)
  }
}
</script>
