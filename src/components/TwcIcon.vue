<template>
  <i :class="`${iconCss()} ${props.class}`"></i>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "regular",
  },
  sharp: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: "1x"
  },
  custom: {
    type: Boolean,
    default: false,
  }
})

function iconCss() {
  if (props.custom) {
    return `fa-kit fa-${props.icon} fa-${props.size}`
  } else {
    return `${props.sharp ? 'fa-sharp ' : ''}fa-${props.type} fa-${props.icon} fa-${props.size}`
  }
}
</script>

<style scoped>
</style>
