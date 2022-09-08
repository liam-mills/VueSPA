<script setup>
  import { useStorage } from '@/composables/useStorage';

  let food = useStorage('food', 'pizza');
  let colour = useStorage('colour');
  let obj = useStorage('obj', { test: 'test' });

  setTimeout(() => {
    obj.value.test = 'test1';
  }, 3000);
</script>

<template>
  <main>
    <p>
      Favourite food? <input type="text" v-model="food">
    </p>
    <p>
      Favourite colour? <input type="text" v-model="colour">
    </p>
  </main>
</template>