<template>
    <h2>Ejercicio 1: Carrito de la compra</h2>
    <ul>
        <li v-for="item in dataProducts" :key="item.id">
            {{ item.name }} - {{ item.price }}€
            <button class="btn bg-primary rounded-circle"
            @click="addProduct(item.id)">
                <i class="bi bi-plus-circle text-light"></i>
            </button>
        </li>
    </ul>
    <div class="card" style="width: 500px;">
        <div class="card-body">
            <h5 class="card-title">Tus productos</h5>
            <ul>
                <p v-if="productsCart.length==0"
                class="text-danger">No tienes productos</p>
                <div v-else>
                    <li v-for="prod in productsCart" :key="prod.id">
                        {{ prod.name }} - {{ prod.price }}€
                        <button @click="deleteItem(prod)" class="btn"><i class="bi bi-trash text-danger"></i></button>
                    </li>
                </div>
            </ul>
            <hr>
            <p>TOTAL: {{ preuTotal }}€</p>
        </div>
    </div>
    <hr>
    <h2>Ejercicio 2: Lista de tareas</h2>
    <!-- Lista de tareas -->
    <div class="card">
        <div class="card-body">
            <ul>
                <li v-for="task in dataTasks" :key="task.id">
                        <input type="checkbox" :checked="task.done">
                        <span :class="{ 'text-decoration-line-through': task.done }">{{ task.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Ejercicio 1
import dataProducts from '../assets/products.json';
const preuTotal = ref(0);
const productsCart = ref([]);
console.log(productsCart)
const addProduct = (id) => {
    const product = dataProducts.find((product) => product.id === id);
    if (product) {
        productsCart.value.push(product);
        preuTotal.value += product.price;
    }
}
const deleteItem = (prod) => {
    const index = productsCart.value.indexOf(prod);
    if (index !== -1) {
        preuTotal.value -= productsCart.value[index].price;
        productsCart.value.splice(index, 1);
    }
}

// Ejercicio 2
import dataTasks from '../assets/tasks.json';

</script>