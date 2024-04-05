<template>
  <fwb-select v-bind="$props" class="TwcSelect">
    <template #helper v-if="$slots.helper">
      <slot name="helper"></slot>
    </template>
  </fwb-select>
</template>

<script setup>
import { FwbSelect } from 'flowbite-vue'
</script>

<style scoped>

.TwcSelect {
  touch-action: manipulation;
}

</style>
