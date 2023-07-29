<template>
  <MobileAuthenticationWrapper :info="info"> </MobileAuthenticationWrapper>
</template>

<script setup>
import MobileAuthenticationWrapper from "@/components/Authentication/mobile/MobileAuthenticationWrapper.vue";

const info = {
  title: "Welcome Back !",
  type: "註冊",
};
</script>

<style scoped lang="scss"></style>
