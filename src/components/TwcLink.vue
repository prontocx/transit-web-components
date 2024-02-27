<template>
  <fwb-a v-bind="$props">
    <slot></slot>
  </fwb-a>
</template>

<script setup>
import { FwbA } from 'flowbite-vue'
</script>
