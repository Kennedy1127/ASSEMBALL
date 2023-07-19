<template>
  <MainHeader v-if="$route.name !='Backstage'" />
  <router-view />
  <MainFooter  v-if="$route.name !='Backstage'"/>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  components: { MainHeader, MainFooter },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
