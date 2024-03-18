<template>
  <div
    :class="`inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface ${getSpeedClass()} ${props.color} ${props.class}`"
    role="status"
  >
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "text-black"
  },
  duration: {
    type: String,
    default: ""
  },
  class: {
    type: String,
    default: ""
  }
})

function getSpeedClass() {
  switch (props.duration) {
    case "1":
      return "animate-[spin_1.0s_linear_infinite]"
    case "1.5":
      return "animate-[spin_1.5s_linear_infinite]"
    case "2":
      return "animate-[spin_2.0s_linear_infinite]"
    case "3":
      return "animate-[spin_3.0s_linear_infinite]"
    default:
      return "animate-[spin_0.75s_linear_infinite]"
  }
}
</script>

<style scoped>
</style>
