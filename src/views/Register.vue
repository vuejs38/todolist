<template>
  <div class="card center-component space-y-4 w-1/4">
    <span class="font-semibold text-2xl">Register</span>

    <form
      @submit.prevent="register"
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
        <div class="flex flex-col space-y-1">
          <label for="password-confirm">Password confirm</label>
          <input
            type="password"
            id="password-confirm"
            v-model="passwordConfirm"
          />
        </div>
      </div>

      <small>
        Already have an account?
        <router-link to="/login" class="underline text-[#1b9dd9]">
          Login
        </router-link>
      </small>

      <button class="btn btn-primary w-1/3" type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const passwordConfirm = ref("")
const router = useRouter()

const register = () => {
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
