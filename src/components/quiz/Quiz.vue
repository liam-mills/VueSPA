<template>
    <QuizHeader :quiz="quiz" />

    <QuizQuestion />

    <QuizFooter />
</template>

<script setup>
import QuizHeader from "@quiz/QuizHeader.vue";
import QuizQuestion from "@quiz/QuizQuestion.vue";
import QuizFooter from "@quiz/QuizFooter.vue";
import { provide } from "vue";

let props = defineProps({ quiz: Object });

provide('quiz', props.quiz);
</script>