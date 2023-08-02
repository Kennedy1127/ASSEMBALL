<template>
  <MobileAuthenticationWrapper :info="info">
    <form class="authentication_mobile" @submit.prevent="handleSignup">
      <h3 class="authentication_mobile_title">會員註冊/Sign Up</h3>

      <div class="authentication_mobile_groups">
        <div
          class="authentication_mobile_group authentication_mobile_group--name"
        >
          <div class="authentication_mobile_group">
            <div class="authentication_mobile_label">
              <label for="lastname">姓/Last Name</label>
            </div>

            <div class="authentication_mobile_input">
              <input type="text" id="lastname" v-model="lastname" />
            </div>
          </div>

          <div class="authentication_mobile_group">
            <div class="authentication_mobile_label">
              <label for="firstname">名/First Name</label>
            </div>

            <div class="authentication_mobile_input">
              <input type="text" id="firstname" v-model="firstname" />
            </div>
          </div>
        </div>

        <div class="authentication_mobile_group">
          <div class="authentication_mobile_label">
            <label for="username">使用者名稱/User Name</label>
          </div>

          <div class="authentication_mobile_input">
            <input type="text" id="username" v-model="username" />
          </div>
        </div>

        <div class="authentication_mobile_group">
          <div class="authentication_mobile_label">
            <label for="email">電子郵件/Email</label>
          </div>

          <div class="authentication_mobile_input">
            <input type="email" id="email" v-model="email" />
          </div>
        </div>

        <div class="authentication_mobile_group">
          <div class="authentication_mobile_label">
            <label for="password">密碼/Password</label>
          </div>

          <div class="authentication_mobile_input">
            <input
              type="password"
              id="password"
              v-model="password"
              ref="passwordInput"
            />

            <div class="authentication_mobile_input_icon">
              <font-awesome-icon
                v-if="showPassword"
                class="icon"
                icon="fa-solid fa-eye"
                @click="toggleShowPassword"
              />
              <font-awesome-icon
                v-if="!showPassword"
                class="icon"
                :icon="['fas', 'eye-slash']"
                @click="toggleShowPassword"
              />
            </div>
          </div>
        </div>

        <div class="authentication_mobile_group">
          <div class="authentication_mobile_label">
            <label for="confirmPassword">密碼確認 /Confirm Password </label>
          </div>

          <div class="authentication_mobile_input">
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              ref="confirmPasswordInput"
            />

            <div class="authentication_mobile_input_icon">
              <font-awesome-icon
                v-if="showConfirmPassword"
                class="icon"
                icon="fa-solid fa-eye"
                @click="toggleShowConfirmPassword"
              />
              <font-awesome-icon
                v-if="!showConfirmPassword"
                class="icon"
                :icon="['fas', 'eye-slash']"
                @click="toggleShowConfirmPassword"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="authentication_mobile_btn">
        <button>
          註冊
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
      </div>

      <div v-if="props.error" class="authentication_mobile_error">
        {{ props.error }}
      </div>
    </form>
  </MobileAuthenticationWrapper>
</template>

<script setup>
import MobileAuthenticationWrapper from "@/components/Authentication/mobile/MobileAuthenticationWrapper.vue";
import { ref } from "vue";

const props = defineProps({
  error: {
    required: true,
    default: null,
  },
});

const emit = defineEmits(["mobileSignup"]);

const info = {
  title: "Hello , Friend !",
  type: "register",
};

const passwordInput = ref();
const confirmPasswordInput = ref();
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
  showPassword.value === true
    ? (passwordInput.value.type = "text")
    : (passwordInput.value.type = "password");
};

const toggleShowConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
  showConfirmPassword.value === true
    ? (confirmPasswordInput.value.type = "text")
    : (confirmPasswordInput.value.type = "password");
};

const firstname = ref("");
const lastname = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleSignup = () => {
  const mobileSignupData = {
    firstname: firstname.value,
    lastname: lastname.value,
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  emit("mobileSignup", mobileSignupData);
};
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

  &_btn {
    margin-top: 3rem;

    display: flex;
    justify-content: center;

    button {
      width: 150px;
      height: 50px;
      border-radius: 2rem;
      background-color: var(--primary-blue);

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
