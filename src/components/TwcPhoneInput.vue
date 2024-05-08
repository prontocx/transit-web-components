<template>
  <input
    v-model="model"
    ref="phoneInput"
    type="tel"
    :placeholder="$props.placeholder"
    :class="classes"
    :data-testid="$props.dataTestid"
    @input="updateInput">
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import intlTelInput from 'intl-tel-input'

const phoneInput = ref(null)
const iti = ref(null)
const isValidPhoneNumber = ref(false)
const model = defineModel({
  default: '',
  type: String
})
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
  },
  dataTestid: {
    type: String,
    default: "",
  }
})
const emit = defineEmits(['change', 'update:modelValue'])

function updateInput () {
  isValidPhoneNumber.value = iti.value.isValidNumber()

  if (isValidPhoneNumber.value) {
    emit('change', phoneInput.value.value, true, iti.value.getNumber())
  } else {
    emit('change', phoneInput.value.value, false)
  }
}

const classes = computed(() => {
  let result = "TwcPhoneInput mt-1 !text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm iti__tel-input";

  if (isValidPhoneNumber.value) {
    result += ' border-green-500 focus:border-green-500 focus:outline-green-500 focus:ring-green-500 bg-green-50';
  }

  if (props.displayError) {
    result += ' border-red-500 focus:border-red-500 focus:outline-red-500 bg-red-50';
  }

  return result;
})


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

.TwcPhoneInput {
  touch-action: manipulation;
}
</style>
