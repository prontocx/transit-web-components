<template>
  <div class="p-7">
    <h1>Buttons</h1>
    <div class="mt-3">
      <Button @click="clicked">Primary</Button>
      <Button secondary>Secondary</Button>
      <Button outline>Outline Primary</Button>
      <Button outline secondary>Outline Secondary</Button>
    </div>
    <hr>
  </div>
</template>

<script setup>
import Button from "./components/Button.vue"

function clicked() {
  alert("Button clicked!")
}
</script>

<style scoped>
</style>
