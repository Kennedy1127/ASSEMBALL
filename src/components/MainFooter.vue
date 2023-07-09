<template>
  <footer>
    <div class="wrapper"></div>
  </footer>
</template>

<script></script>

<style scoped lang="scss">
footer {
  background-color: var(--primary-blue);
  width: 100%;
  height: 400px; // 測試高度

  & > div {
    // 測試用
    border: 5px solid #fa0;
    height: 100%;
  }
}
</style>
