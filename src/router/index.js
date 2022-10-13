import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FavoriteView from "../views/FavoriteView.vue";
import LoginView from "../views/LoginView.vue";

const checkAuth = () => {
  let isAuth = false;
  if (!isAuth) return "/login";
  return true;
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoriteView,
    beforeEnter: [checkAuth],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
