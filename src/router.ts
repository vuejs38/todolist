import { createRouter, createWebHistory } from "vue-router"

import Home from "./views/Home.vue"
import NotFound from "./views/NotFound.vue"
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import Profile from "./views/Profile.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
