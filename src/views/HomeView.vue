<script setup>
import TheWelcome from "@/components/TheWelcome.vue";

let message = $ref('Default Message');

setTimeout(() => {
  message = 'Updated Message';
}, 2000);
</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message" />
    </p>
  </main>
</template>