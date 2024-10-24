<template>
  <div class="flex flex-col space-y-6 p-4">
    <div class="card space-y-4">
      <span class="text-xl font-semibold">Create a new todo</span>

      <div class="flex items-end justify-evenly w-full">
        <div class="flex flex-col space-y-1">
          <label for="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            v-model="newTodo.title"
          />
        </div>

        <div class="flex flex-col space-y-1">
          <label for="description">Description</label>
          <textarea
            id="description"
            type="text"
            placeholder="Description"
            v-model="newTodo.description"
            cols="30"
            rows="1"
          />
        </div>

        <div class="flex flex-col space-y-1">
          <label for="category">Category</label>
          <select id="category" v-model="newTodo.category">
            <option value="select" disabled>Select</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="home">Home</option>
          </select>
        </div>

        <button
          class="btn-primary"
          :disabled="
            newTodo.title === '' ||
            newTodo.description === '' ||
            newTodo.category === 'select'
          "
          @click="addTodo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>Add</span>
        </button>
      </div>

      <hr class="border-t border-gray-400 w-4/5" />

      <div class="flex items-center justify-evenly w-full">
        <div class="flex items-center space-x-2">
          <input
            id="hideDone"
            type="checkbox"
            v-model="hideDone"
            @change="reloadTodos"
          />
          <label for="hideDone">Hide done todos</label>
        </div>

        <div
          class="flex items-center space-x-2 bg-orange-100 px-1 py-0.5 rounded"
        >
          <input
            id="hideWork"
            type="checkbox"
            v-model="hideWork"
            @change="reloadTodos"
          />
          <label for="hideWork">Hide work todos</label>
        </div>

        <div
          class="flex items-center space-x-2 bg-cyan-100 px-1 py-0.5 rounded"
        >
          <input
            id="hidePersonal"
            type="checkbox"
            v-model="hidePersonal"
            @change="reloadTodos"
          />
          <label for="hidePersonal">Hide personal todos</label>
        </div>

        <div
          class="flex items-center space-x-2 bg-pink-100 px-1 py-0.5 rounded"
        >
          <input
            id="hideHome"
            type="checkbox"
            v-model="hideHome"
            @change="reloadTodos"
          />
          <label for="hideHome">Hide home todos</label>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-6 gap-4">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete-todo="reloadTodos"
        @update-todos="reloadTodos"
      />
    </div>
  </div>
</template>

<script setup>
import TodoItem from "../components/TodoItem.vue"
import { ref, reactive } from "vue"

const todos = reactive(JSON.parse(localStorage.getItem("todos")) || [])

const newTodo = reactive({
  id: generateUUID(),
  title: "",
  description: "",
  category: "select",
  completed: false,
})

const hideDone = ref(false)
const hideWork = ref(false)
const hidePersonal = ref(false)
const hideHome = ref(false)

const reloadTodos = () => {
  todos = JSON.parse(localStorage.getItem("todos") || "[]")

  todos = todos.filter((todo) => {
    if (hideDone.value && todo.completed) return false
    if (hideWork.value && todo.category === "work") return false
    if (hidePersonal.value && todo.category === "personal") return false
    if (hideHome.value && todo.category === "home") return false

    return true
  })
}

const addTodo = () => {
  todos.push({ ...newTodo })

  newTodo = {
    id: generateUUID(),
    title: "",
    description: "",
    category: "select",
    completed: false,
  }

  localStorage.setItem("todos", JSON.stringify(todos))
}

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
</script>
