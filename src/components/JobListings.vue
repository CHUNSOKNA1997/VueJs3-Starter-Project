<script setup>
import { ref, defineProps, onMounted, reactive } from "vue";
import axios from "axios";
import JobCard from "./JobCard.vue";
import { RouterLink } from "vue-router";
import MoonLoader from "vue-spinner/src/MoonLoader.vue";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/jobs");
    state.jobs = response.data;
  } catch (error) {
    console.log("Fetching data failed", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container mx-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- Show spinner while loading is true -->
      <div v-if="state.isLoading" class="flex justify-center">
        <MoonLoader />
      </div>
      <!-- Show spinner while loading is done -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobCard
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
