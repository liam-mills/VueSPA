<template>
    <footer>
        <h4>{{ props.name }}</h4>

        <QuizFooterLinks />
    </footer>
</template>

<script setup>
import QuizFooterLinks from "@/components/quiz/QuizFooterLinks.vue";

let props = defineProps({
    name: String
});
</script>