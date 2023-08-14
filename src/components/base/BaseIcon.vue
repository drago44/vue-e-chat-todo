<script setup>
import { computed } from 'vue'
const props = defineProps({
  variant: {
    type: String,
    default: 'transparent'
  },
  width: {
    type: String,
    default: '24'
  },
  height: {
    type: String,
    default: '24'
  }
})

const iconVariant = computed(() => {
  switch (props.variant) {
    case 'add':
      return {
        strokeWidth: 1.5,
        strokeColor: 'currentColor',
        path: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M12 4.5v15m7.5-7.5h-15'
        }
      }
    case 'delete':
      return {
        strokeWidth: 1.5,
        strokeColor: 'currentColor',
        path: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
        }
      }
    case 'edit':
      return {
        strokeWidth: 1.5,
        strokeColor: 'currentColor',
        path: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
        }
      }
    case 'check':
      return {
        strokeWidth: 1.5,
        strokeColor: 'currentColor',
        path: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
        }
      }
    case 'progress':
      return {
        strokeWidth: 1.5,
        strokeColor: 'currentColor',
        path: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z'
        }
      }
    case 'notDone':
      return {
        strokeWidth: 1.5,
        strokeColor: 'currentColor',
        path: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M6 18L18 6M6 6l12 12'
        }
      }
    default:
      return null
  }
})
</script>

<template>
  <svg
    v-if="iconVariant"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :stroke-width="iconVariant.strokeWidth"
    :stroke="iconVariant.strokeColor"
  >
    <path
      v-if="iconVariant.path"
      :stroke-linecap="iconVariant.path.strokeLinecap"
      :stroke-linejoin="iconVariant.path.strokeLinejoin"
      :d="iconVariant.path.d"
    />
  </svg>
</template>
