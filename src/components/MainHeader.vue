<template>
  <header>
    <nav>
      <div class="wrapper"></div>
    </nav>
  </header>
</template>

<script></script>

<style scoped lang="scss">
header {
  position: relative;
  height: 8rem;

  nav {
    width: 100%;
    height: 100%;
    background-color: var(--primary-blue);

    position: absolute;
    top: 0;

    & > div {
      // 測試用
      border: 5px solid #fa0;
      height: 100%;
    }
  }
}
</style>
