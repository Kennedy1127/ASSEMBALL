<template>
  <div>home</div>
  <div class="test">
    <router-link to="/products">go to products</router-link>
  </div>
  <div class="test-detail">
    <router-link to="/productsdetail">go to productsdetail</router-link>
  </div>
  <div class="test-detail">
    <router-link to="/product-post">go to productpost</router-link>
  </div>
  <div class="signin">
    <router-link to="/authentication">go to signup </router-link>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.test {
  text-align: center;
  font-size: 60px;
  color: blue;
  text-decoration: underline;
}

.test-detail {
  text-align: center;
  font-size: 60px;
  color: rgb(255, 0, 0);
  text-decoration: underline;
}
.signin {
  text-align: center;
  font-size: 60px;
  color: green;
  text-decoration: underline;
}
</style>
