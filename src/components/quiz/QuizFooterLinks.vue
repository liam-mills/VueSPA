<template>
    <div>
        <h5>{{ name }}</h5>

        <ul>
            <li><a href="#">Get a Job</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
</template>

<script setup>
import { inject } from "vue";

let name = inject('name');
</script>