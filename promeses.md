# Promesas Vue

## ¿Que es una promesa?
Una promesa es un objeto que se utiliza para manejar operaciones asíncronas en JavaScript. Es una forma de manejar la respuesta de una operación asíncrona de manera más segura y eficiente.

Operaciones asíncronas:
- Solicitudes HTTP a una API
- Lectura de un archivo
- Acceso a una base de datos
- Temporizadores (setTimeOut)

Una promesa tiene tres estados:
- "Pending": la promesa está a la espera de completarse o fallar
- "Fullfiled": resultado exitoso
- "Rejected": resultado fallido

Ejemplo (mirar del power)

## Fetch
La función fetch() es una API de JavaScript que permite realizar solicitudes HTTP a una API. La función fetch() devuelve una promesa que se resuelve con la respuesta del servidor.

Ejemplo (mirar tambien el del power):
```javascript
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))
```

## Async/Await
Async/Await es una forma de manejar promesas de manera más sencilla y legible. La palabra clave **async** indica que una función devuelve una promesa, mientras que la palabra clave **await** indica que una función espera a que una promesa se resuelva.

Ejemplo:
```javascript
async function ejemploAsinc() {
    const resultado = await miFuncion();
    console.log(resultado);
}
ejemploAsinc();
```

## Comparación promesas y async/await

### Promesas
```javascript
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))
```

### Async/Await
```javascript
async function ejemploAsinc() {
    try {
        const respuesta = await fetch('https://api.example.com/data');
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

## Callback function
Una función de llamada a una función que se pasa como argumento a otra función, y que se ejecuta cuando la función que la recibe ha terminado de ejecutarse.
