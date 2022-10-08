<template>
    <h2 style="margin-bottom:2rem;">Question 1</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>

    <TabbableTextarea style="width: 100%; height: 300px;" />

    
</template>

<script setup>
import QuizHeader from "@quiz/QuizHeader.vue";
import QuizQuestion from "@quiz/QuizQuestion.vue";
import QuizFooter from "@quiz/QuizFooter.vue";
import { ref, provide } from "vue";
import TabbableTextarea from "@/components/TabbableTextarea.vue";

defineProps({ quiz: Object });

let name = ref('John Doe');

provide('name', name);
</script>