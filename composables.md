# Composables

## Definició
Un composable és una funció que hem encapsulat per poder fer servir la seva funcionalitat a qualsevol component. 

Mirar exemples power point

## watchEffect
El `watchEffect` és una funció que permet a un component reaccionar a canvis dins la seva dependència. Per exemple, si tenim un component que mostra el preu d'un producte, quan el preu del producte canvia, el component també ha de canviar. Per això podem utilitzar `watchEffect` per fer que el component es reactualitzi quan el preu del producte canvia.

```vue.js
<template>
<div>
<p>Preu del producte: {{ preu }}</p>
</div>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
const preu = ref(10);
watchEffect(() => {
    console.log('El preu del producte ha canviat');
});
    </script>
```
## Composable + watchEffect
```vue.js
<script setup>

import { ref, watchEffect, toValue } from 'vue';

export function useFetch(url){
    const data = ref(null)
    const error = ref(null)
    const fetchData = () =>{
        data.value = null
        error.value = null
        fetch(toValue(url))
            .then((res)=>res.json())
            .then((data)=>(data.value = json))
            .catch((error)=>(error.value = error))
    }
    watchEffect(() => {
        fetchData()
    })
    return {data, error}
}


</script>
```