<template>
  <div
    class="card-item justify-between space-y-4"
    :class="{
      'bg-orange-100': todo.category === 'work',
      'bg-cyan-100': todo.category === 'personal',
      'bg-pink-100': todo.category === 'home',
    }"
  >
    <div class="flex items-center justify-between w-full">
      <span class="font-semibold">
        {{ todo.title }}
      </span>
      <input
        type="checkbox"
        v-model="todo.completed"
        @change="updateTodoCompletion"
      />
    </div>

    <span>{{ todo.description }}</span>

    <button @click="deleteTodo" class="btn-danger">Delete</button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue"

const emit = defineEmits()

const props = defineProps({
  todo: {
    type: Object as PropType<{
      id: number
      title: string
      description: string
      category: string
      completed: boolean
    }>,
    required: true,
  },
})

const deleteTodo = () => {
  const oldTodos = JSON.parse(localStorage.getItem("todos") || "[]")
  const newTodos = oldTodos.filter(
    (todo: { id: number }) => todo.id !== props.todo.id
  )
  localStorage.setItem("todos", JSON.stringify(newTodos))
  emit("delete-todo")
}

const updateTodoCompletion = () => {
  const oldTodos = JSON.parse(localStorage.getItem("todos") || "[]")
  const newTodos = oldTodos.map((todo: any) => {
    if (todo.id === props.todo.id) todo.completed = !todo.completed

    return todo
  })
  localStorage.setItem("todos", JSON.stringify(newTodos))
  emit("update-todos")
}
</script>
