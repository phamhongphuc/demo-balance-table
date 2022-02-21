<template>
  <button
    :class="{
      'bg-green-300 hover:bg-green-400 active:bg-green-500': color === 'green',
      'bg-red-300 hover:bg-red-400 active:bg-red-500': color === 'red',
    }"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'green',
  },
});

const emits = defineEmits(['click']);
</script>

<style lang="scss" scoped>
button {
  @apply rounded shadow-md;
  @apply h-8 px-3 text-sm;
  @apply transition-all;
}
</style>
