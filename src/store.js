import { reactive } from "vue"

const user = JSON.parse(localStorage.getItem("user") || "{}")

const debug = true

const state = reactive({
  user: user,
})

function setUser(newValue) {
  if (debug) console.log("setMessage triggered with ", newValue)

  state.user = newValue
}

export function store() {
  return {
    state,
    setUser,
  }
}
