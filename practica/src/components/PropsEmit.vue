<template>
    <h2>Ejercicio 1: Enviar datos de formulario (emit)</h2>
    <Formulari placeholder="Ingresa tu nombre" @input-change="nameInput" />

    <Formulari placeholder="Ingresa tu correo electrónico" @input-change="emailInput" />
    <p>Nombre: {{ name }}</p>
    <p>Correo: {{ email }}</p>
    <hr>
    <h2>Ejercicio 2: Votación</h2>
    <div class="mb-4">
        <Votacion v-for="opcion in opciones" :key="opcion" :label="opcion" @vote="voto" />
    </div>
    <h3>Resultados:</h3>
    <ul class="list-grupo">
        <li
            v-for="(votos, opcion) in resultados"
            :key="opcion"
            class="list-group-item d-flex justify-content-between align-items-center"
        >
        {{ opcion }}
        <span class="badge bg-primary rounded-pill">{{ votos }}</span>
        </li>
    </ul>
</template>

<script setup>
import Formulari from './Formulari.vue';
import Votacion from './VotacionBtn.vue'
import { ref } from "vue";

// Ejercicio 1
const name = ref('')
const email = ref('')

const nameInput = (value) => {
    name.value = value
}

const emailInput = (value) => {
    email.value = value
}

// Ejercicio 2
const opciones =['Perros', 'Gatos'];

const resultados = ref({
    'Perros': 0,
    'Gatos': 0
});

const voto = (option) =>{
    if(resultados.value[option] !== undefined) resultados.value[option]++;
}
</script>