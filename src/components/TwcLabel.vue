<template>
  <label :class="labelClasses()">
    <slot></slot>
  </label>
</template>

<script setup>
const props = defineProps({
  class: {
    type: String,
    default: ""
  }
})

function labelClasses() {
  return `block text-sm font-medium ${props.class}`
}
</script>
