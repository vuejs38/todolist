<template>
  <div>
    <Navbar
      v-if="!['/login', '/register'].includes(router.currentRoute.value.path)"
    />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"

import { useRouter } from "vue-router"

const router = useRouter()

const userFromStorage = localStorage.getItem("user")

if (userFromStorage) router.push("/")
else router.push("/login")
</script>
