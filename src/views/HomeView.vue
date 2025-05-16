<script setup>
import Home from "../components/Home.vue";
import HomeCards from "../components/HomeCards.vue";
import JobListings from "../components/JobListings.vue";
</script>

<template>
  <Home />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>
