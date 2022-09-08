<script setup>
  import { useStorage } from '@/composables/useStorage';

  let food = useStorage('food');

  setTimeout(() => {
    food.value = 'changed';
  }, 2000)
</script>

<template>
  <main>
    <p>
      Favourite food? <input type="text" v-model="food">
    </p>
  </main>
</template>