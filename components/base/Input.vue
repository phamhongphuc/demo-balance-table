<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
input {
  @apply border border-gray-600 rounded;
  @apply h-8 px-2 text-sm;
}
</style>
