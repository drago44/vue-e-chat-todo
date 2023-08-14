<script setup>
import { computed } from 'vue'

const props = defineProps({
  defaultClass: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'button',
    validator: function (value) {
      return ['delete', 'edit', 'add', 'button'].indexOf(value) !== -1
    }
  }
})

const variantClass = computed(() => {
  return {
    button: props.variant === 'button',
    'button--delete': props.variant === 'delete',
    'button--edit': props.variant === 'edit',
    'button--add': props.variant === 'add'
  }
})
</script>

<template>
  <button type="button" :class="[defaultClass, variantClass]">
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px 5px 5px;
  border-radius: 5px;
  border: 1px rgb(217, 217, 217) solid;
  transition: 0.3s all ease;
  outline: none;
  color: #fff;
  background: grey;
  cursor: pointer;
  position: relative;
  z-index: 0;
  min-height: 44px;

  span {
    line-height: 1;
  }

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }
  &:hover {
    border: black 1px solid;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    left: 0;
    top: 0;
    border-radius: 5px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &--add {
    &:before {
      opacity: 1;
    }
  }

  &--edit {
    &:before {
      background: linear-gradient(45deg, yellow, rgb(202, 202, 18));
      background-size: 400%;
    }

    &:hover {
      color: yellow;
    }
  }

  &--delete {
    &:before {
      background: linear-gradient(45deg, red, darkred);
      background-size: 400%;
    }

    &:hover {
      color: red;
    }
  }
}
</style>
