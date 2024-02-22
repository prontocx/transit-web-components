<template>
  <button
    :class="cssClasses()"
    @click="onClick"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({
    type: {type: String, default: "button"},
    onClick: {type: Function, default: null},
    secondary: Boolean,
    class: {type: String, default: ""},
    outline: Boolean,
  })

  function cssClasses() {
    const outlineClass = props.secondary ? "text-secondary-700 hover:bg-secondary-700" : "text-primary-700 hover:bg-primary-700"
    const bgClass = props.secondary ? "bg-secondary-700 hover:bg-secondary-800" : "bg-primary-700 hover:bg-primary-800"

    return [
      "font-medium rounded text-sm px-5 py-2.5 me-2 mb-2",
      !props.outline && `text-white ${bgClass}`,
      props.outline && `bg-transparent outline outline-1 hover:text-white ${outlineClass}`,
      props.class
    ]
  }
</script>

<style scoped>
</style>
