<template>

<button @click="$emit('close')" type="button" class="close-button">بستن</button>

</template>

<script setup>

defineEmits(['close'])

</script>

<style scoped src="./closeButton.css"></style>