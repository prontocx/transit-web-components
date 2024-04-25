<template>
  <fwb-tabs v-model="activeTab" variant="underline" class="p-5">
    <!-- Buttons -->
    <fwb-tab name="buttons" title="Buttons">
      <TwcButton size="sm">Primary (small)</TwcButton>
      <span class="ml-2"></span>
      <TwcButton @click="clicked">Primary</TwcButton>
      <span class="ml-2"></span>
      <TwcButton size="lg">Primary (large)</TwcButton>
      <span class="ml-2"></span>
      <TwcButton square>Primary (Square)</TwcButton>
      <span class="ml-2"></span>
      <TwcButton color="dark">Dark</TwcButton>
      <span class="ml-2"></span>
      <TwcButton outline>Outline Primary</TwcButton>
      <span class="ml-2"></span>
      <TwcButton outline color="dark">Outline Dark</TwcButton>
      <span class="ml-2"></span>
      <TwcButton disabled>Disable</TwcButton>
      <span class="ml-2"></span>
      <TwcButton flat>Flat</TwcButton>
      <span class="ml-2"></span>
      <TwcButton link href="https://www.google.com">Link</TwcButton>
      <span class="ml-2"></span>
      <TwcButton icon>→</TwcButton>

    </fwb-tab>

    <!-- Inputs -->
    <fwb-tab name="inputs" title="Text Inputs">
      <div class="mb-2">Input without Label</div>
      <TwcInput />

      <hr class="my-4" />

      <div class="mb-2">Input with Label</div>
      <TwcInput label="Input label" id="text1" name="user[name]" />

      <hr class="my-4" />

      <div class="mb-2">Input Placeholder</div>
      <TwcInput placeholder="Some placeholder text"/>

      <hr class="my-4" />

      <div class="mb-2">Input with Helper</div>
      <TwcInput>
        <template #helper>
          We'll never share your details. Read our Privacy Policy.
        </template>
      </TwcInput>

      <hr class="my-4" />

      <div class="mb-2">Input with Prefix</div>
      <TwcInput>
        <template #prefix>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
          </svg>
        </template>
      </TwcInput>

      <hr class="my-4" />

      <div class="mb-2">Input with Suffix</div>
      <TwcInput>
        <template #suffix>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
          </svg>
        </template>
      </TwcInput>

      <hr class="my-4" />

      <div class="mb-2">Input with error</div>
      <TwcInput label="Input label error" error="Error message" validation-status="error" />
    </fwb-tab>

    <!-- Selects -->
    <fwb-tab name="select" title="Select Inputs">
      <TwcSelect
        label="Select a country"
        :options="[{value: 'us', name: 'United States'}, {value: 'cr', name: 'Costa Rica'}]"
      />

      <hr class="my-4" />

      <div class="mt-2">Disabled</div>
      <TwcSelect
        label="Select a country"
        :options="[{value: 'us', name: 'United States'}, {value: 'cr', name: 'Costa Rica'}]"
        disabled
        placeholder="You can't select"
      />

      <hr class="my-4" />

      <div class="mt-2">With Helper</div>
      <TwcSelect
        label="Select a country"
        :options="[{value: 'us', name: 'United States'}, {value: 'cr', name: 'Costa Rica'}]"
      >
        <template #helper>
          We'll never share your details. Read our Privacy Policy.
        </template>
      </TwcSelect>

      <hr class="my-4" />

      <div class="mt-2">Validation</div>
      <TwcSelect
        class="mt-3"
        label="Select a country"
        :options="[{value: 'us', name: 'United States'}, {value: 'cr', name: 'Costa Rica'}]"
        validation-status="success"
      />
      <TwcSelect
        label="Select a country"
        class="mt-3"
        :options="[{value: 'us', name: 'United States'}, {value: 'cr', name: 'Costa Rica'}]"
        validation-status="error"
      />
    </fwb-tab>

    <!-- Checkboxes -->
    <fwb-tab name="checkbox" title="Checkbox">
      <div class="w-1/4">
        <TwcToggle label="Default checkbox" />
        <hr class="my-4" />
        <TwcToggle label="Disabled checkbox" :disabled="true" />
        <hr class="my-4" />
        <TwcToggle label="Reversed checkbox" :reverse="true" />
        <hr class="my-4" />
        <TwcToggle 
          label="Checkbox with hint and error"
          hint="This is a hint"
          error-message="This is an error message"
          :reverse="true"
        />
      </div>
    </fwb-tab>

    <!-- Heading -->
    <fwb-tab name="headings" title="Headings">
      <TwcHeading tag="h1">Heading 1</TwcHeading>
      <TwcHeading tag="h2">Heading 2</TwcHeading>
      <TwcHeading tag="h3">Heading 3</TwcHeading>
      <TwcHeading tag="h4">Heading 4</TwcHeading>
      <TwcHeading tag="h5">Heading 5</TwcHeading>
      <TwcHeading tag="h6">Heading 6</TwcHeading>
      <TwcHeading class="!text-xl italic underline text-green-500">Custom heading</TwcHeading>
    </fwb-tab>

    <!-- Links -->
    <fwb-tab name="links" title="Links">
      <TwcLink href="#">Default link</TwcLink>
      <hr class="my-4" />
      <TwcLink href="#" class="text-orange-500 italic">Custom class</TwcLink>
    </fwb-tab>

    <!-- Paragraphs -->
    <fwb-tab name="paragraphs" title="Paragraphs">
      <TwcParagraph>
        Track work across the enterprise through an open, collaborative platform.
        Link issues across Jira and ingest data from other software development
        tools, so your IT support and operations teams have richer contextual
        information to rapidly respond to requests, incidents, and changes.
      </TwcParagraph>

      <hr class="my-4" />

      <div class="mt-2">With Custom class</div>
      <TwcParagraph class="font-bold">
        Track work across the enterprise through an open, collaborative platform.
        Link issues across Jira and ingest data from other software development
        tools, so your IT support and operations teams have richer contextual
        information to rapidly respond to requests, incidents, and changes.
      </TwcParagraph>
    </fwb-tab>

    <!-- Label -->
    <fwb-tab name="labels" title="Labels">
      <TwcLabel>Just a Label</TwcLabel>

      <hr class="my-4" />

      <TwcLabel class="italic text-red-500">With Custom class</TwcLabel>
    </fwb-tab>

     <!-- PhoneInput -->
    <fwb-tab name="phoneInputs" title="Phone Inputs">
      <TwcPhoneInput placeholder="Mobile phone"></TwcPhoneInput>
    </fwb-tab>

    <!-- Spinners -->
    <fwb-tab name="spinners" title="Spinners">
      <TwcLabel class="mb-2">Default 0.75s duration</TwcLabel>
      <TwcSpinner />
      <hr class="my-4" />
      <TwcLabel class="mb-2">1 second duration</TwcLabel>
      <TwcSpinner duration="1" />
      <hr class="my-4" />
      <TwcLabel class="mb-2">1.5 second duration</TwcLabel>
      <TwcSpinner duration="1.5" />
      <hr class="my-4" />
      <TwcLabel class="mb-2">2 seconds duration</TwcLabel>
      <TwcSpinner duration="2" />
      <hr class="my-4" />
      <TwcLabel class="mb-2">3 seconds duration</TwcLabel>
      <TwcSpinner duration="3" />
      <hr class="my-4" />
      <TwcLabel class="mb-2">Different colors</TwcLabel>
      <TwcSpinner color="text-red-500" class="mr-4" />
      <TwcSpinner color="text-blue-500" duration="1" />
      <TwcSpinner class="text-purple-500 ml-4" duration="1.5" />
    </fwb-tab>

    <!-- Icons -->
    <fwb-tab name="icons" title="Icons">
      <TwcLabel class="mb-2">Styles</TwcLabel>
      Solid
      <TwcIcon icon="bars" type="solid" size="2x" class="mr-2" />
      Regular
      <TwcIcon icon="bars" type="regular" size="2x" class="mr-2" />
      Light
      <TwcIcon icon="bars" type="light" size="2x" class="mr-2" />
      Duotone
      <TwcIcon icon="bars" type="duotone" size="2x" class="mr-2" />
      Thin
      <TwcIcon icon="bars" type="thin" size="2x" class="mr-2" />
      <hr class="my-4" />
      <TwcLabel class="mb-2">Sizing</TwcLabel>
      1x
      <TwcIcon icon="bars" size="1x" class="mr-2" />
      2x
      <TwcIcon icon="bars" size="2x" class="mr-2" />
      3x
      <TwcIcon icon="bars" size="3x" class="mr-2" />
      4x
      <TwcIcon icon="bars" size="4x" class="mr-2" />
      2xs
      <TwcIcon icon="bars" size="2xs" class="mr-2" />
      xs
      <TwcIcon icon="bars" size="xs" class="mr-2" />
      sm
      <TwcIcon icon="bars" size="sm" class="mr-2" />
      md
      <TwcIcon icon="bars" size="sm" class="mr-2" />
      lg
      <TwcIcon icon="bars" size="lg" class="mr-2" />
      <br>
      <TwcLink href="https://docs.fontawesome.com/web/style/size" class="text-blue-500">FontAwesome Sizing Docs</TwcLink>
      <hr class="my-4" />
      <TwcLabel class="mb-2">Sharp</TwcLabel>
      Solid
      <TwcIcon sharp icon="bars" type="solid" size="2x" class="mr-2" />
      Regular
      <TwcIcon sharp icon="bars" type="regular" size="2x" class="mr-2" />
      Light
      <TwcIcon sharp icon="bars" type="light" size="2x" class="mr-2" />
      Thin
      <TwcIcon sharp icon="bars" type="thin" size="2x" class="mr-2" />
      <hr class="my-4" />
      <TwcLabel class="mb-2">Customs</TwcLabel>
      <TwcIcon custom icon="nfc-n-mark" size="2x" class="mr-2" />
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'
import TwcButton from "./components/TwcButton.vue"
import TwcInput from "./components/TwcInput.vue"
import TwcSelect from "./components/TwcSelect.vue"
import TwcToggle from "./components/TwcToggle.vue"
import TwcHeading from "./components/TwcHeading.vue"
import TwcLabel from "./components/TwcLabel.vue"
import TwcLink from "./components/TwcLink.vue"
import TwcParagraph from "./components/TwcParagraph.vue"
import TwcPhoneInput from './components/TwcPhoneInput.vue'
import TwcSpinner from './components/TwcSpinner.vue'
import TwcIcon from './components/TwcIcon.vue'

const activeTab = ref('buttons')

function clicked() {
  alert("Button clicked!")
}
</script>

<style scoped>
</style>
