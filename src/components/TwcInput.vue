<template>
  <fwb-input v-bind="$props" class="TwcInput">
    <template #helper v-if="$slots.helper">
      <slot name="helper"></slot>
    </template>
    <template #prefix v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </template>
    <template #suffix v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </template>
  </fwb-input>
</template>

<script setup>
import { FwbInput } from 'flowbite-vue'
</script>

<style scoped >
.TwcInput {
  touch-action: manipulation;
}
</style>
