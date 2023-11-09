import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/default.vue"),

      children: [
        {
          path: "/simple",
          component: () => import("../examples/simple.vue"),
        },
        {
            path: "/simple1",
            component: () => import("../examples/simple copy.vue"),
          },
      ],
    },
  ],
});

export default router;
