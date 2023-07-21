<template>
  <OverlayComponent type="apply" @closeOverlay="closeOverlay">
  </OverlayComponent>
</template>

<script setup>
import OverlayComponent from "@/components/utilities/OverlayComponent.vue";

const emit = defineEmits(["closeOverlay"]);

const closeOverlay = () => {
  emit("closeOverlay");
};
</script>

<style scoped lang="scss"></style>
