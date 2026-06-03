<template>
<teleport to="body">

  <transition name="modal-fade">
    <div class="modal-overlay" v-if="show" @click.self="$emit('close')">
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </transition>

</teleport>
</template>

<script setup>

import { Teleport } from 'vue';
import './baseModal.css'

defineProps({
  show: Boolean
})

defineEmits(['close'])
</script>