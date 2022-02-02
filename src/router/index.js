import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Homepage.vue";
import Challenger from "../components/Challenger.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/challenges",
    name: "Challenger",
    component: Challenger,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;