<template>
    <h1>{{ props.quiz.name }}</h1>
    <p style="margin-bottom:2rem;">Welcome to your first quiz!</p>
</template>

<script setup>
let props = defineProps({ quiz: Object });
</script>