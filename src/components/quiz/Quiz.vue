<template>
    <h1 style="margin-bottom:2rem;">{{ name }}</h1>

    <QuizHeader />

    <QuizQuestion />

    <QuizFooter :quiz="quiz" />
</template>

<script setup>
import QuizHeader from "@quiz/QuizHeader.vue";
import QuizQuestion from "@quiz/QuizQuestion.vue";
import QuizFooter from "@quiz/QuizFooter.vue";
import { ref, provide } from "vue";

defineProps({ quiz: Object });

let name = ref('John Doe');

provide('name', name);
</script>