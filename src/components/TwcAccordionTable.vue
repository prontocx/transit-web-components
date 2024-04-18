<template>
    <fwb-accordion class="TwcAccordionTable">
      <slot></slot>
    </fwb-accordion>
  </template>
  
  <script setup>
  import { FwbAccordion } from 'flowbite-vue'
  </script>
  
  <style scoped>
  .TwcAccordionTable {
    touch-action: manipulation;
  }
  </style>
  