<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Vue</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                <RouterLink class="nav-link text-white" to="provInject">Provide and Inject</RouterLink>
                <RouterLink class="nav-link text-white" to="watch">Watch</RouterLink>
                <RouterLink class="nav-link text-white" to="computed">Computed</RouterLink>

            </ul>
            </div>
            
        </div>

    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>