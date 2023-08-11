<template>
  <div @click="goToTop" class="goToTop">
    <font-awesome-icon icon="fa-solid fa-angle-up" />
  </div>
</template>

<script setup>
const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped lang="scss">
.goToTop {
  z-index: 800;
  text-align: center;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 20rem;
  width: 2rem;
  height: 2rem;
  background-color: var(--pale-white);
  color: var(--primary-blue);
  border: solid 1px var(--primary-blue);
  position: fixed;
  right: 1rem;
  bottom: 2rem;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: var(--primary-blue);
    color: var(--pale-white);
  }
  .svg-inline--fa.fa-angle-up {
    display: block;
  }
}
</style>
