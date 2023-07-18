<template>
  <header>
    <nav>
      <div class="wrapper">
        <div>
          <router-link to="/">home</router-link>
        </div>
        <div class="test">
          <router-link to="/products">go to products</router-link>
        </div>
        <div class="signin">
          <router-link to="/authentication">go to signup </router-link>
        </div>
        <div>
          <router-link to="/recruitments">recruitment</router-link>
        </div>
        <div>
          <router-link to="/recruitments/copywriting/1"
            >copywriting</router-link
          >
        </div>
        <div class="rookie">
          <router-link to="/rookie">go to rookie </router-link>
        </div>
      </div>
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
