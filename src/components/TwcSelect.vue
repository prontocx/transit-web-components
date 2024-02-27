<template>
  <fwb-select v-bind="$props">
    <template #helper v-if="$slots.helper">
      <slot name="helper"></slot>
    </template>
  </fwb-select>
</template>

<script setup>
import { FwbSelect } from 'flowbite-vue'
</script>

<style scoped>
</style>
