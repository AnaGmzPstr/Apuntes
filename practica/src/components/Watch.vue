<template>
    <h1>Watch</h1>
    <hr>
    <h2>Ejercicio 1: Cambio input texto</h2>
    <input type="text" v-model="text" placeholder="Escribe lo que quieras">
    <p>Valor antiguo: {{ prevText }}</p>
    <p>Valor actual: {{ text }}</p>
    <hr>
    <h2>Ejercicio 2: Cambios datos anidados</h2>
    <input type="text" v-model="user.name" placeholder="Nombre" />
    <input type="number" v-model.number="user.age" placeholder="Edad" />
    <p>Nombre: {{ user.name }}</p>
    <p>Edad: {{ user.age }}</p>
</template>
<script setup>
import { ref, watch } from 'vue';
// Ejercicio 1
const text = ref('');
const prevText = ref('');

watch(
    text,
    (newValue, oldValue) => {
        prevText.value = oldValue;
    }
);

// Ejercicio 2
const user = ref({ name: '', age: 0 });

watch(
    () => user.name,
    (newName, oldName) => {
        console.log(`Nombre cambiado de ${oldName} a ${newName}`);
    }
);

watch(
    () => user.age,
    (newAge, oldAge) => {
        console.log(`Edad cambiada de ${oldAge} a ${newAge}`);
    }
);

</script>