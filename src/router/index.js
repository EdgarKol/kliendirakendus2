import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FavoriteView from "../views/FavoriteView.vue";
import LoginView from "../views/LoginView.vue";

function isAuthent(to, from, next) {
  let isAuth = false;
  if (localStorage.getItem("user1")) isAuth = true;
  else isAuth = false;
  if (isAuth) {
    next();
  } else {
    router.push("/login");
  }
}

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
    beforeEnter: isAuthent,
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
