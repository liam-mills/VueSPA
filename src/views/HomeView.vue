<script setup>
  import { ref } from 'vue';

  let food = ref(localStorage.getItem('food'));
  let age = ref(localStorage.getItem('age'));

  function write(key, value) {
    localStorage.setItem(key, value);
  }
</script>

<template>
  <main>
    <p>
      Favourite food? <input type="text" v-model="food" @input="write('food', food)">
    </p>
    <p>
      Age? <input type="text" v-model="age" @input="write('age', age)">
    </p>
  </main>
</template>