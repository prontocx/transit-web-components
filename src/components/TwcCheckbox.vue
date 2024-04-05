<template>
  <FwbToggle v-bind="$props" class="TwcCheckbox"/>
</template>

<script setup>
import { FwbToggle } from 'flowbite-vue'
</script>

<style scoped>
.TwcCheckbox {
  touch-action: manipulation;
}
</style>
