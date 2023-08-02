<template>
  <div class="goback">
    <router-link :to="{ name: 'Recruitments' }">
      <span><font-awesome-icon icon="fa-solid fa-angle-left" /></span>返回
    </router-link>
  </div>
  <div class="main_title_sm">{{ title }}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "title-text",
    },
  },
};
</script>
<style scoped lang="scss">
.goback {
  display: none;
}
.main_title_sm {
  font-weight: 600;
  display: none;
}

@media screen and (max-width: 768px) {
  .goback {
    margin-top: 6rem;
    display: block;
    @media all and (max-width: 420px) {
      padding-left: 1rem;
    }
    & a {
      display: inline-block;
      color: var(--primary-blue);
      font-size: 1.25rem;
      font-weight: 500;
      padding-bottom: 0.5rem;
      cursor: pointer;
      & span {
        color: var(--primary-blue);
        font-size: 1.25rem;
        padding-right: 0.5rem;
      }
    }
  }
  .main_title_sm {
    display: block;
    margin-bottom: 3rem;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--primary-blue);
    position: relative;
    &::after {
      position: absolute;
      left: calc(50% - 1.25rem);
      top: 2.5rem;
      content: "";
      width: 2.5rem;
      height: 5px;
      background-color: var(--primary-blue);
    }
  }
}
</style>
