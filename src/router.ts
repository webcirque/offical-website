import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from '@/layout.vue'

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/project",
        name: "Project",
        component: () => import("@/views/Project.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/About.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () => import("@/views/notFound.vue"),
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});