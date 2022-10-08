<script setup>
import Quiz from "@quiz/Quiz.vue";
</script>

<template>
  <main>
    <Quiz :quiz="{ name: 'First Quiz', questions: [] }" />
  </main>
</template>