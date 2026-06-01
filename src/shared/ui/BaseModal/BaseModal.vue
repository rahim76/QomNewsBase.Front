<template>
  <transition name="modal-fade">
    <div class="modal-overlay" v-if="show" @click.self="$emit('close')">
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script setup>

import './baseModal.css'

defineProps({
  show: Boolean
})

defineEmits(['close'])
</script>