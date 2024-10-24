<template>
  <div class="flex justify-around w-full p-4">
    <div class="flex flex-col space-y-6">
      <img
        :src="user.user.avatar_url"
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

    <div class="flex flex-col space-y-4 w-1/3">
      <div class="flex flex-col space-y-1">
        <label for="firstname">Firstname</label>
        <input
          id="firstname"
          type="text"
          v-model="modifiedUser.user.firstname"
          class="border border-gray-300 rounded p-2"
        />
      </div>

      <div class="flex flex-col space-y-1">
        <label for="lastname">Lastname</label>
        <input
          id="lastname"
          type="text"
          v-model="modifiedUser.user.lastname"
          class="border border-gray-300 rounded p-2"
        />
      </div>

      <div class="flex flex-col space-y-1">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="modifiedUser.user.email"
          class="border border-gray-300 rounded p-2"
        />
      </div>

      <div class="flex flex-col space-y-1">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model="modifiedUser.user.password"
          class="border border-gray-300 rounded p-2"
        />
      </div>

      <div class="flex flex-col space-y-1">
        <label for="passwordConfirm">Password confirm</label>
        <input
          id="passwordConfirm"
          type="email"
          v-model="modifiedUser.user.passwordConfirm"
          class="border border-gray-300 rounded p-2"
        />
      </div>

      <div class="flex items-center space-x-4 justify-center">
        <button class="btn-danger" @click="modifiedUser.user = user.user">
          Cancel
        </button>
        <button class="btn-primary" @click="setUser(modifiedUser.user)">
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { store } from "../store"

const { state, setUser } = store()

const emit = defineEmits()

const user = reactive({
  user: state.user,
})

const modifiedUser = reactive({
  user: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  },
})

const changeAvatar = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    const reader = new FileReader()

    reader.onload = (e) => {
      user.user.avatar_url = e.target?.result
      setUser(user.user)
    }

    reader.readAsDataURL(file)
  }
}
</script>
