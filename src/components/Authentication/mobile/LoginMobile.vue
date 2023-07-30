<template>
  <MobileAuthenticationWrapper :info="info">
    <form class="authentication_mobile">
      <h3 class="authentication_mobile_title">會員登入/Log In</h3>

      <div class="authentication_mobile_quicklogin">
        <h4 class="authentication_mobile_quicklogin_title">快速登入</h4>

        <button
          class="authentication_mobile_quicklogin_btn authentication_mobile_quicklogin_btn--FB"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'facebook']" />
          <span>Facebook</span>
        </button>

        <button
          class="authentication_mobile_quicklogin_btn authentication_mobile_quicklogin_btn--LINE"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'line']" />
          <span>LINE</span>
        </button>
      </div>

      <div class="authentication_mobile_groups">
        <div class="authentication_mobile_group">
          <div class="authentication_mobile_label">
            <label for="email">電子郵件/Email</label>
          </div>

          <div class="authentication_mobile_input">
            <input type="email" id="email" />
          </div>
        </div>

        <div class="authentication_mobile_group">
          <div class="authentication_mobile_label">
            <label for="password">密碼/Password</label>
          </div>

          <div class="authentication_mobile_input">
            <input type="password" id="password" />

            <div class="authentication_mobile_input_icon">
              <font-awesome-icon
                v-if="showPassword"
                class="icon"
                icon="fa-solid fa-eye"
              />
              <font-awesome-icon
                v-if="!showPassword"
                class="icon"
                :icon="['fas', 'eye-slash']"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="authentication_mobile_rememberPsw">
        <label class="authentication_mobile_rememberPsw_checkbox">
          <input type="checkbox" />
          <font-awesome-icon class="icon" icon="fa-solid fa-circle-check" />
        </label>
        <span class="authentication_mobile_rememberPsw_text">記住密碼</span>
      </div>

      <div class="authentication_mobile_btn">
        <button>
          登入
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
      </div>

      <div class="authentication_mobile_error">密碼輸入錯誤</div>
    </form>
  </MobileAuthenticationWrapper>
</template>

<script setup>
import MobileAuthenticationWrapper from "@/components/Authentication/mobile/MobileAuthenticationWrapper.vue";
import { ref } from "vue";

const info = {
  title: "Welocom Back !",
  type: "login",
};

const showPassword = ref(false);
</script>

<style scoped lang="scss">
.authentication_mobile {
  padding: 1.5rem 2rem;

  &_title {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--secondary-gray-1);
    text-align: center;
    letter-spacing: initial;
  }

  &_quicklogin {
    margin-top: 1rem;

    &_title {
      margin-bottom: 0.5rem;

      color: var(--secondary-gray-1);
      font-size: 1rem;
    }

    &_btn {
      width: 100%;
      height: 40px;

      font-family: "Montserrat", sans-serif;
      font-size: 1.25rem;
      font-weight: 600;
      color: #fff;

      position: relative;

      &--FB {
        background-color: #1a76f2;
        margin-bottom: 1rem;
      }

      &--LINE {
        background-color: #1dcb42;
      }

      .icon {
        font-size: 1.5rem;
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translateY(-50%);
      }
    }
  }

  &_groups {
    margin-top: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &_group {
    &--name {
      display: flex;
      gap: 2rem;
    }
  }

  &_label {
    font-size: 1rem;
    color: var(--secondary-gray-1);
  }

  &_input {
    margin-top: 0.5rem;
    position: relative;

    input {
      width: 100%;
      padding: 4px 8px;
      border-radius: var(--round);
      background-color: var(--secondary-blue-2);

      color: inherit;

      &:focus {
        background-color: var(--pale-white);
        outline: 2px solid var(--secondary-blue-1);
      }
    }

    &_icon {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);

      color: var(--secondary-blue-1);
    }
  }

  &_rememberPsw {
    margin-top: 1rem;

    &_checkbox {
      padding-right: 0.5rem;

      input {
        display: none;

        &:checked + .icon {
          color: var(--primary-blue);
        }
      }

      .icon {
        font-size: 1.25rem;
      }
    }

    &_text {
      font-size: 1rem;
      color: var(--secondary-gray-1);
    }
  }

  &_btn {
    margin-top: 3rem;

    display: flex;
    justify-content: center;

    button {
      width: 150px;
      height: 50px;
      border-radius: 2rem;
      background-color: var(--primary-blue);

      font-family: "Noto Sans TC", sans-serif;
      letter-spacing: 5px;
      font-size: 1.25rem;
      font-weight: 500;
      color: #fff;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }

  &_error {
    margin-top: 1.25rem;
    text-align: center;
    font-size: 1rem;
    color: var(--accent-red);
  }
}
</style>
