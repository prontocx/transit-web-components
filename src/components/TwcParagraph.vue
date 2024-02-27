<template>
  <fwb-p v-bind="$props">
    <slot></slot>
  </fwb-p>
</template>

<script setup>
import { FwbP } from 'flowbite-vue'
</script>
