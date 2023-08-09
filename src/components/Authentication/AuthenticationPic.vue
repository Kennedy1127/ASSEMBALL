<template>
  <div
    class="authentication_pic"
    :style="{ backgroundImage: `url(${info.imgSrc})` }"
  >
    <div class="authentication_pic_title">
      {{ info.title }}
    </div>

    <div
      v-for="(text, index) in info.text"
      :key="index"
      class="authentication_pic_text"
    >
      {{ text }}
    </div>

    <button class="authentication_btn">
      <router-link :to="{ name: info.link }">
        {{ info.linkName }}
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </router-link>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.authentication {
  &_pic {
    min-height: 750px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

    &_title {
      font-size: 2.5rem;
      color: var(--pale-white);
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
    }

    &_text {
      font-size: 1.25rem;
      color: var(--pale-white);
      text-align: center;
      font-family: "Montserrat", sans-serif;
    }

    .authentication_btn {
      width: 10rem;
      border-radius: 2rem;
      padding: 0.5rem 0.25rem;
      color: var(--primary-blue);

      font-size: 1.25rem;
      font-weight: 500;

      position: absolute;
      top: 80%;

      letter-spacing: 5px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      a {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .authentication {
    &_pic {
      display: none;
    }
  }
}
</style>
