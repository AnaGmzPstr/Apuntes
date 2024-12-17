<template>
    <p class="fs-4">Color seleccionado: 
        <i 
        class="bi bi-flower1 fs-3"
        :style="{color: color}">
        </i>
    </p>
    <button type="button" class="btn text-light" style="background-color: #ffc107;" @click="changeColor('#ffc107')"><i class="bi bi-flower1"></i></button>
    <button type="button" class="btn text-light" style="background-color: #d63384;" @click="changeColor('#d63384')"><i class="bi bi-flower1"></i></button>
    <button type="button" class="btn text-light" style="background-color: #198754;" @click="changeColor('#198754')"><i class="bi bi-flower1"></i></button>
</template>
<script setup>
import { inject } from 'vue';

// Inyectar el color y la función para cambiar el color del icono
const color = inject('color');
const setColor = inject('setColor');

// Función para cambiar el color
const changeColor = (newColor) =>{
    setColor(newColor);
}
</script>