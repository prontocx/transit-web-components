<template>
  <fwb-button v-bind="$props">
    <slot></slot>
  </fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>

<style scoped>
</style>
