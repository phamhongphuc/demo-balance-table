<template>
  <div class="label">
    <span class="flex-1 text-center" :class="{ 'pl-5': closable }">
      {{ text }}
    </span>
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
  @apply flex items-center justify-center;
  @apply rounded;
  @apply h-8 px-1.5 text-sm;
  @apply transition-all;

  &__button {
    @apply w-5 h-5 rounded;
    @apply ml-auto text-center;
    @apply transition-all cursor-pointer;
    @apply hover:bg-[#00000022] active:bg-[#00000033];
  }
}
</style>
