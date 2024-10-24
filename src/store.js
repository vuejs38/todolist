import { reactive } from "vue"

const user = JSON.parse(localStorage.getItem("user") || "{}")

const state = reactive({
  user: user,
})

function setUser(newValue) {
  localStorage.setItem("user", JSON.stringify(newValue))
  state.user = newValue
}

export function store() {
  return {
    state,
    setUser,
  }
}
