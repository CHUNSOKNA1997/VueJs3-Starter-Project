<script setup>
import logo from "../assets/logo.png";
import { RouterLink, useRoute } from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav
    class="bg-green-700 w-full h-[100px] flex items-center justify-between px-8 md:px-16 lg:px-32 xl:px-56 border-b border-green-500"
  >
    <RouterLink to="/" class="flex items-center gap-2 sm:gap-4">
      <img :src="logo" alt="Logo" class="w-8 sm:w-10" />
      <p class="text-xl sm:text-2xl md:text-3xl font-bold text-white">
        Vue Jobs
      </p>
    </RouterLink>

    <ul
      class="flex items-center gap-2 sm:gap-4 md:gap-6 text-white text-base md:text-lg"
    >
      <li>
        <RouterLink
          to="/"
          :class="[
            isActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-900',
            'rounded-md',
            'px-3',
            'py-2',
            'text-center',
          ]"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/jobs"
          :class="[
            isActiveLink('/jobs') ? 'bg-green-900' : 'hover:bg-gray-900',
            'rounded-md',
            'px-3',
            'py-2',
            'text-center',
          ]"
          >Jobs</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="jobs/add"
          :class="[
            isActiveLink('/jobs/add') ? 'bg-green-900' : 'hover:bg-gray-900',
            'rounded-md',
            'px-3',
            'py-2',
            'text-center',
          ]"
          >Add Job</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
