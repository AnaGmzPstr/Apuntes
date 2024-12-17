<template>
    <h1>Computed</h1>
    <!-- Descripción computed -->
    <p>Computed es un método que se ejecuta cada vez que cambia la información de <strong>data</strong> o <strong>props</strong>.</p>
    
    <hr>
    <h2>Filtrar por nombre</h2>
    <input type="text" v-model="search" placeholder="Buscar...">
    <ul>
        <li v-for="item in filterItems" :key="item">{{ item }}</li>
    </ul>
    <hr>
    <h2>Filtrar precios</h2>
    <label>Introduce el precio mínimo: </label>
    <input type="number" v-model="minPrecio" placeholder="Precio mínimo"><br>
    <label>Introduce el precio máximo: </label>
    <input type="number" v-model="maxPrecio" placeholder="Precio máximo">
    <ul>
        <li v-for="product in filterPrice" :key="product.id">{{ product.name }} - {{ product.price }}€</li>
    </ul>
</template>

<script setup>
import { ref, computed } from 'vue';
// Ejercicio 1
const search = ref('');
const items = ref([
    'Cereza', 
    'Manzana', 
    'Fresa', 
    'Mora',
    'Mandarina', 
    'Mango', 
    'Coco', 
]);

const filterItems = computed(() => {
    return items.value.filter(item => item.toLowerCase().includes(search.value.toLowerCase())
    );
});

// Ejercicio 2
const products = ref([
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 },
    { id: 4, name: 'Monitor', price: 300 },
    { id: 5, name: 'Teclado', price: 50 },
]);

const minPrecio = ref(0);
const maxPrecio = ref(10000);

const filterPrice = computed(()=>{
    return products.value.filter((product)=>
        product.price >= minPrecio.value && product.price <= maxPrecio.value
    )
})

</script>