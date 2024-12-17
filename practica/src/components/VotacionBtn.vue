<template>
    <div class="d-flex justify-content-evenly">
        <button class="btn btn-primary" @click="enviarVoto">
            {{ label }}
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    label:{
        type: String,
        required: true,
    }
});

const emit = defineEmits(['vote']);

const enviarVoto =()=>{
    emit('vote', props.label)
}
</script>