<template>
  <div class="card center-component space-y-4 w-1/4">
    <span class="font-semibold text-2xl">Login</span>

    <form
      @submit.prevent="login"
      class="flex flex-col items-center space-y-4 w-full"
    >
      <div class="flex flex-col space-y-2 w-full">
        <div class="flex flex-col space-y-1">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="flex flex-col space-y-1">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
      </div>

      <small>
        Don't have an account?
        <router-link to="/register" class="underline text-[#1b9dd9]"
          >Register</router-link
        >
      </small>

      <button class="btn btn-primary w-1/3" type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const router = useRouter()

const login = () => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      email: email.value,
      avatar_url: "https://i.pravatar.cc/150",
    })
  )
  router.push("/")
}
</script>
