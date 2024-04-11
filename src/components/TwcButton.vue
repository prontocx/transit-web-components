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

  let result = "TwcButton text-base";

  if (props.flat) {
    return `${result}border-0 bg-transparent text-gray-800 hover:bg-transparent focus:ring-0`;
  }

  if (props.icon) {
    return `${result}border-0 bg-transparent text-gray-800 hover:bg-gray-300 p-2`;
  }

  if (props.link) {
    return `${result}border-0 bg-transparent text-gray-800 hover:bg-transparent hover:underline p-0 text-blue-700`;
  }

  return result;
})
</script>

<style scoped>
.TwcButton {
  touch-action: manipulation;
}
</style>
