<template>
    <div class="container mt-4">
        <!-- Título Principal -->
        <h1 class="text-left">Directivas Básicas de Vue.js</h1>
        <hr />
        <!-- Comandos para crear un proyecto Vue -->
        <div class="mt-5">
            <h2>1. Creación de un Proyecto Vue.js</h2>
            <p>Para crear un proyecto Vue.js, sigue estos comandos en tu terminal:</p>
            <pre><code>
                # Crear un nuevo proyecto Vue
                vue create vue@latest

                # Navegar al directorio del proyecto
                cd mi-proyecto-vue

                # Ejecutar el servidor de desarrollo
                npm run serve
            </code></pre>
            <p>
                Esto iniciará el proyecto y lo podrás ver en
                <code>http://localhost:8080</code>.
            </p>
        </div>

        <!-- Directiva v-text -->
        <div class="mt-5">
            <h2>2. Directiva <code>v-text</code></h2>
            <p>
                La directiva <code>v-text</code> se usa para insertar texto en un
                elemento.
            </p>
            <div class="card">
                <div class="card-body">
                    <p v-text="mensaje"></p>
                </div>
            </div>
        </div>

        <!-- Directiva v-html -->
        <div class="mt-5">
            <h2>3. Directiva <code>v-html</code></h2>
            <p>
                La directiva <code>v-html</code> permite insertar contenido HTML de
                manera dinámica.
            </p>
            <div class="card">
                <div class="card-body">
                    <div v-html="htmlContenido"></div>
                </div>
            </div>
        </div>

        <!-- Directiva v-bind -->
        <div class="mt-5">
            <h2>4. Directiva <code>v-bind</code></h2>
            <p>
                La directiva <code>v-bind</code> se utiliza para enlazar atributos HTML
                a datos dinámicos.
            </p>
            <div class="card">
                <div class="card-body">
                    <img :src="imagenUrl" alt="Ejemplo v-bind" class="img-fluid" />
                </div>
            </div>
        </div>

        <!-- Directiva v-if, v-else -->
        <div class="mt-5">
            <h2>5. Directiva <code>v-if</code> y <code>v-else</code></h2>
            <p>
                Estas directivas se utilizan para mostrar o esconder elementos en
                función de una condición.
            </p>
            <div class="card">
                <div class="card-body">
                    <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">
                        {{ mostrar ? "Ocultar mensaje" : "Mostrar mensaje" }}
                    </button>
                    <p v-if="mostrar">
                        Este es un mensaje mostrado con <code>v-if</code>.
                    </p>
                    <p v-else>El mensaje ha sido ocultado.</p>
                </div>
            </div>
        </div>

        <!-- Directiva v-for -->
        <div class="mt-5">
            <h2>6. Directiva <code>v-for</code></h2>
            <p>
                La directiva <code>v-for</code> se utiliza para iterar sobre listas o
                arrays.
            </p>
            <ul class="list-group">
                <li v-for="(item, index) in lista" :key="index" class="list-group-item">
                    {{ index + 1 }}. {{ item }}
                </li>
            </ul>
        </div>

        <!-- Directiva v-model -->
        <div class="mt-5">
            <h2>7. Directiva <code>v-model</code></h2>
            <p>
                La directiva <code>v-model</code> se utiliza para enlazar datos a
                elementos de formulario de manera reactiva.
            </p>
            <div class="card">
                <div class="card-body">
                    <label for="nombre">Escribe tu nombre:</label>
                    <input id="nombre" type="text" v-model="nombre" class="form-control" />
                    <p class="mt-3">
                        Tu nombre es: <strong>{{ nombre }}</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"; // Importa ref para datos reactivos

// Datos reactivos usando ref
const mensaje = ref("Este es un ejemplo de v-text.");
const htmlContenido = ref(
    "<strong>Este es un texto HTML insertado con v-html.</strong>"
);
const imagenUrl = ref("https://via.placeholder.com/300x150");
const mostrar = ref(true);
const lista = ref(["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"]);
const nombre = ref("");
</script>
