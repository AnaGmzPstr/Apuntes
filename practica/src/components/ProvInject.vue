<template>
    <h1>Provide & Inject</h1>
    <hr>
    <h2>Ejercicio 1: cambio de color</h2>
    <CambioColor/>
    <hr>
    <h2>Ejercicio 2: contador</h2>
    <p>Contador padre: {{ contador }}</p>
    <Contador/>
</template>

<script setup> 
import { ref, provide } from 'vue';

// Ejercicio 1
import CambioColor from '@/components/CambioColor.vue'
// Variable reactiva y el color inicial es el azul
const color = ref('#198754');

// Proveer el color y la función para cambiar el icono
provide('color', color);
provide('setColor', (newColor)=>{
    color.value = newColor;
})

// Ejercicio 2
import Contador from '@/components/Contador.vue';
// Variable reactiva
const contador = ref(0);
// Proveer el contador
provide('contador', contador);
// Proveer funciones que incrementan y decrementan
provide('incrementar', () => {
    contador.value++;
});
provide('decrementar', () =>{
    contador.value--;
})


</script>