<template>
  <div class="p-7 pb-0">
    <h3 class="mb-4 text-2xl font-extrabold leading-none text-gray-900">Buttons</h3>
    <div class="mt-3">
      <Button @click="clicked">Primary</Button>
      <Button secondary>Secondary</Button>
      <Button outline>Outline Primary</Button>
      <Button outline secondary>Outline Secondary</Button>
    </div>
    <hr>
  </div>
  <div class="p-7 pb-0">
    <h3 class="mb-4 text-2xl font-extrabold leading-none text-gray-900">Text Inputs</h3>
    <div class="mt-3">
      <div class="mb-2">Input with Label</div>
      <Input label="Input label" id="text1" name="user[name]" />
    </div>
    <div class="mt-3">
      <div class="mb-2">Input without Label</div>
      <Input />
    </div>
    <div class="mt-3">
      <div class="mb-2">Input Placeholder</div>
      <Input placeholder="Some placeholder text"/>
    </div>
    <div class="mt-3">
      <div class="mb-2">Input with error</div>
      <Input label="Input label error" error="Error message" />
    </div>
    <hr>
  </div>
</template>

<script setup>
import Button from "./components/Button.vue"
import Input from "./components/Input.vue"

function clicked() {
  alert("Button clicked!")
}
</script>

<style scoped>
</style>
