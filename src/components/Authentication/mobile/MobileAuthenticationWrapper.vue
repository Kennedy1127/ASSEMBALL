<template>
  <div class="authentication_mobile">
    <div class="authentication_mobile_header">
      <div class="authentication_mobile_header_pic">
        <img
          src="~@/assets/images/authentication/mobile-header.png"
          alt="mobile header image"
        />
      </div>
      <h2 class="authentication_mobile_header_title">
        {{ info.title }}
      </h2>
    </div>

    <div class="authentication_mobile_content">
      <slot></slot>
    </div>
  </div>

  <nav class="authentication_mobile_navigation">
    <div
      :class="{
        authentication_mobile_navigation_link: true,
        'authentication_mobile_navigation_link--active':
          info.type === 'register',
      }"
    >
      <router-link :to="{ name: 'Register' }">前往註冊</router-link>
    </div>

    <div
      :class="{
        authentication_mobile_navigation_link: true,
        'authentication_mobile_navigation_link--active': info.type === 'login',
      }"
    >
      <router-link :to="{ name: 'Login' }">前往登入</router-link>
    </div>

    <div
      :class="{
        authentication_mobile_navigation_link: true,
        'authentication_mobile_navigation_link--active':
          info.type === 'forgotPassword',
      }"
    >
      <router-link :to="{ name: 'ForgotPassword' }">忘記密碼</router-link>
    </div>
  </nav>
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
.authentication_mobile {
  margin-top: 6rem;
  padding: 0 1rem;

  &_header {
    &_pic {
      display: flex;
      justify-content: center;
    }

    &_title {
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-blue);
    }
  }

  &_content {
    margin: 1rem 0 3rem;
    background-color: var(--secondary-blue-3);
    border-radius: var(--round);
  }

  &_navigation {
    display: flex;

    &_link {
      flex: 1;

      display: flex;
      justify-content: center;

      padding: 0.5rem 0;
      background-color: var(--secondary-blue-2);

      &--active {
        transform: translateY(-50%);
      }

      a {
        color: #fff;
        font-weight: 400;
        font-size: 1.25rem;
      }
    }
  }
}
</style>
