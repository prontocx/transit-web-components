<template>
  <fwb-accordion-panel class="TwcAccordionTableRow">
    <fwb-accordion-header>
      <div class="flex">
        <div
          v-for="(column, index) in data"
          :key="index"
          class="flex-1 self-center first:font-bold uppercase"
        >
          {{ column }}
        </div>
        <div v-if="$slots.action" class="flex-1 mr-5">
          <slot name="action"></slot>
        </div>
      </div>
    </fwb-accordion-header>
    <fwb-accordion-content>
      <slot></slot>
    </fwb-accordion-content>
  </fwb-accordion-panel>
</template>

<script setup>
import { FwbAccordionContent, FwbAccordionHeader, FwbAccordionPanel } from 'flowbite-vue'

defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style scoped>
.TwcAccordionTableRow {
  touch-action: manipulation;
}
</style>
