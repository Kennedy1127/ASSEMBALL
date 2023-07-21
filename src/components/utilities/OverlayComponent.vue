<template>
  <div class="overlay" @click.self="closeOverlay">
    <slot v-if="type === 'apply'" name="apply">
      <CopywritingApplyModal @closeModal="closeOverlay" />
    </slot>
  </div>
</template>

<script setup>
import CopywritingApplyModal from "@/components/recruitments/copywriting/CopywritingApplyModal.vue";

const props = defineProps({
  type: {
    type: String,
  },
});
const emit = defineEmits(["closeOverlay"]);

const closeOverlay = () => {
  emit("closeOverlay");
};
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100vh;
}
</style>
