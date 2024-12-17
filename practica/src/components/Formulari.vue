<template>
    <div class="mb-3">
        <input type="text" class="form-control" :placeholder="placeholder" @input="inputChange">
    </div>
</template>

<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['input-change']);

const inputChange = (event) => {
    emit('input-change', event.target.value);
};
</script>