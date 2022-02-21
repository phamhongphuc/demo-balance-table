<template>
  <div class="label">
    {{ text }}
    <div v-if="closable" class="label__button" @click="$emit('close')">✕</div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  closable: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close']);
</script>

<style lang="scss" scoped>
.label {
  @apply rounded;
  @apply leading-8 h-8 text-sm;
  @apply px-6 truncate text-center;
  @apply transition-all;
  @apply relative;

  &__button {
    @apply absolute right-1.5 inset-y-0 my-auto;
    @apply w-5 h-5 leading-5 rounded;
    @apply ml-auto text-center;
    @apply transition-all cursor-pointer;
    @apply hover:bg-[#00000022] active:bg-[#00000033];
  }
}
</style>
