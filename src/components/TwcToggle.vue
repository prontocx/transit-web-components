<template>
  <div>
    <div class="flex">
    <template v-if="$props.reverse">
      <label class="mr-4 font-semibold">{{ $props.label }}</label>
      <FwbToggle 
        v-model="model"
        class="TwcToggle"
        :disabled="$props.disabled"
        @click="notifyClick"
      />
    </template>
    <template v-else>
      <FwbToggle 
        v-model="model"
        class="TwcToggle"
        :disabled="$props.disabled"
        @click="notifyClick"
      />
      <label class="mr-4 font-semibold">{{ $props.label }}</label>
    </template>
    </div>
    <div class="flex flex-col">
      <label v-if="$props.hint" :class="`${smallTextClass} text-gray-500`">{{ $props.hint }}</label>
      <label v-if="$props.errorMessage" :class="`${smallTextClass} text-red-500`">{{ $props.errorMessage }}</label>
    </div>
  </div>
</template>

<script setup>
import { FwbToggle } from 'flowbite-vue'

const smallTextClass = "font-light text-xs mt-1"
const emit = defineEmits(['change', 'click'])
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  hint: {
    type: String,
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  reverse: {
    type: Boolean,
    required: false,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  }
})
const model = defineModel({
  default: false,
  type: Boolean
})

function notifyClick () {
  emit("click");
}
</script>

<style scoped>
.TwcToggle {
  touch-action: manipulation;
}
</style>
