<template>
    <div>
        <button @click="changeName">{{ name }}</button>

        <ul>
            <li><a href="#">Get a Job</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
</template>

<script setup>
import { inject } from "vue";

let { name, changeName } = inject('name');
</script>