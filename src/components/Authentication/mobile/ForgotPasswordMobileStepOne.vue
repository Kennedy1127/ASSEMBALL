<template>
  <form class="authentication_mobile">
    <h3 class="authentication_mobile_title">忘記密碼</h3>

    <p class="authentication_mobile_text authentication_mobile_text--en">
      Enter the email address associated with you account.
    </p>

    <p class="authentication_mobile_text authentication_mobile_text--ch">
      輸入與您的帳戶關聯的電子郵件地址。
    </p>

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
          <label for="code">驗證碼輸入</label>
        </div>

        <div class="authentication_mobile_input">
          <input type="text" id="code" />
        </div>
      </div>
    </div>

    <div class="authentication_mobile_btn">
      <button @click="checkStepOne">
        下一步
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </button>
    </div>

    <div class="authentication_mobile_error">驗證碼輸入錯誤</div>
  </form>
</template>

<script setup>
const emit = defineEmits(["stepOneChecked"]);

const checkStepOne = () => {
  let pass = false;
  // 驗證
  pass = true;
  // 驗證
  if (pass) emit("stepOneChecked");
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

  &_text {
    font-size: 1rem;
    font-weight: 400;
    color: var(--secondary-gray-1);
    letter-spacing: initial;

    &--en {
      margin: 1rem 0 0.5rem;
      font-family: "Montserrat";
      letter-spacing: -0.5px;
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
