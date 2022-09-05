<script>
  import sweetalert from 'sweetalert';

  export default {
    methods: {
      flash(message) {
        sweetalert('Success', message, 'success');
      }
    }
  };
</script>

<template>
  <main>
    <p>
      <button @click="flash('test')">Click Me</button>
    </p>
  </main>
</template>