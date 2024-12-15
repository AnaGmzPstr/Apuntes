<template>
    <p>Color seleccionado: 
        <i 
        class="bi bi-suit-heart-fill"
        :style="{color: color}">
        </i>
    </p>
    <button type="button" class="btn btn-success" @click="changeColor('green')">Cambiar a verde</button>
    <button type="button" class="btn btn-danger" @click="changeColor('red')">Cambiar a rojo</button>
    <button type="button" class="btn btn-primary" @click="changeColor('blue')">Cambiar a azul</button>
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