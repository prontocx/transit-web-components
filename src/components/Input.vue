<template>
  <div :class="wrapperClass">
    <label
      :for="name"
      :class="labelClasses()"
      v-if="label"
    >{{label}}</label>
    <input
      :class="cssClasses()"
      v-bind="inputProps()"
    />
    <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-500">{{error}}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: String,
    id: String,
    name: String,
    type: String,
    class: String,
    wrapperClass: String,
    error: String,
    required: Boolean,
    placeholder: String,
    labelClass: String,
    maxlength: Number,
    pattern: String,
  })

  function inputProps() {
    const { label, wrapperClass, error, labelClass, ...rest } = props
    return rest
  }

  function cssClasses() {
    const commonClasses = "border text-sm rounded-lg block w-full p-2.5"
    if (props.error) {
      return `${commonClasses} bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 outline-red-500`
    } else {
      return `${commonClasses} border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500`
    }
  }

  function labelClasses() {
    if (props.error) {
      return "block mb-1 text-sm font-medium text-red-700 dark:text-red-500"
    } else {
      return "block mb-1 text-sm font-medium text-gray-900"
    }
  }
</script>

<style scoped>
</style>
