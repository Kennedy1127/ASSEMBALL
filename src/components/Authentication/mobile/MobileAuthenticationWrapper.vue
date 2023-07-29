<template>
  <div class="authentication_mobile">
    <div class="authentication_mobile_header">
      <div class="authentication_mobile_header_pic">
        <img
          src="~@/assets/images/authentication/mobile-header.png"
          alt="mobile header image"
        />
      </div>
      <div class="authentication_mobile_header_title"></div>
    </div>

    <div class="authentication_mobile_content">
      <slot></slot>
    </div>

    <nav class="authentication_mobile_navigation"></nav>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.authentication_mobile {
  margin-top: 6rem;
}
</style>
