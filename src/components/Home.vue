<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "Become a Vue Dev",
  },
  subTitle: {
    type: String,
    default: "Find the Vue job that fits your skills and needs",
  },
});
</script>

<template>
  <main
    class="min-h-[280px] w-full bg-green-700 text-white flex justify-center px-4"
  >
    <div class="flex flex-col items-center justify-center space-y-4">
      <h1 class="font-[800] text-[2.5rem] md:text-[3.75rem]">
        {{ title }}
      </h1>
      <p class="text-2xl text-center">
        {{ subTitle }}
      </p>
    </div>
  </main>
</template>
