<template>
  <input ref="phoneInput" :placeholder="$props.placeholder" :class="`mt-1 !text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm iti__tel-input ${isValidPhoneNumber ? 'border-green-500 focus:outline-green-500 bg-green-50' : ''} ${displayError ? 'border-red-500 focus:outline-red-500 bg-red-50' : ''}`" @input="updateInput">
</template>
<script setup>
import { ref, onMounted } from 'vue'
import intlTelInput from 'intl-tel-input'

const phoneInput = ref(null)
const iti = ref(null)
const isValidPhoneNumber = ref(false)
const props = defineProps({
  ipInfoKey: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: "",
  },
  displayError: {
    type: Boolean,
    default: false,
  }
})
const emit = defineEmits(['change'])

function updateInput () {
  isValidPhoneNumber.value = iti.value.isValidNumber()
  if (isValidPhoneNumber.value) {
    emit('change', phoneInput.value.value, true)
  } else {
    emit('change', phoneInput.value.value, false)
  }
}

onMounted(() => {
  const getIp = (callbackFun) => {
    if (localStorage?.getItem("ipCountry")) {
      callbackFun(localStorage.getItem("ipCountry"))
    } else if (props.ipInfoKey) {
      fetch(`https://ipinfo.io/json?token=${props.ipInfoKey}`, {
        headers: { Accept: "application/json" },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          callbackFun(resp.country)
          localStorage?.setItem("ipCountry", resp.country)
        })
        .catch(() => {
          callbackFun("US")
        })
    } else {
      callbackFun("US")
    }
  }

  iti.value = intlTelInput(phoneInput.value, {
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/19.5.7/js/utils.js",
  })
})
</script>
<style>
@import "intl-tel-input/build/css/intlTelInput";

.iti {
  width: 100%;
}
</style>
