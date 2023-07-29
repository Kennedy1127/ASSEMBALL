<template>
  <div class="authentication_wrap">
    <div class="authentication">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.authentication_wrap {
  background-color: var(--primary-blue);
  padding: 8rem 0rem;
}
.authentication {
  display: flex;
  width: 1200px;
  min-height: 80vh;
  margin: auto;
  border: 1px solid #0003;
  box-shadow: var(--shadow-wide);
  border-radius: 0.5rem;
  overflow: hidden;

  position: relative;
}
</style>
