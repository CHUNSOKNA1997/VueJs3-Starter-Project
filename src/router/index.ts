import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobsView from "../views/JobsView.vue";
import AddJobsView from "../views/AddJobsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import JobReaderMore from "../views/JobReaderMore.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobReaderMore,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
