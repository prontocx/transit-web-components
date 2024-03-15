<template>
  <fwb-button v-bind="$props" :class="classes">
    <slot></slot>
  </fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
import { computed } from 'vue';

const props = defineProps({
  flat: {
    type: Boolean,
    default: false
  },

  link: {
    type: Boolean,
    default: false
  },

  icon: {
    type: Boolean,
    default: false
  },
});

const classes = computed(() => {
  if (props.flat) {
    return "border-0 bg-transparent text-gray-800 hover:bg-gray-300";
  }

  if (props.icon) {
    return "border-0 bg-transparent text-gray-800 hover:bg-gray-300 p-2";
  }

  if (props.link) {
    return "border-0 bg-transparent text-gray-800 hover:bg-transparent hover:underline p-0 text-blue-700";
  }
})
</script>

<style scoped>
</style>
