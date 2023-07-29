<template>
  <div class="authentication_text">
    <div class="authentication_text_slogan">Forgot Password ?</div>
    <div class="authentication_text_title">忘記密碼</div>
    <div class="authentication_text_instructions">
      <div class="authentication_text_instructions_en">
        Enter the email address associated with your account.
      </div>
      <div class="authentication_text_instructions_ch">
        輸入與您的帳戶關聯的電子郵件地址。
      </div>
    </div>

    <div class="authentication_text_underline">
      <input type="email" placeholder="電子郵件/Email" />
    </div>
    <div class="authentication_text_codewrap">
      <div class="authentication_text_underline">
        <input type="text" placeholder="驗證碼輸入" />
      </div>
      <div class="authentication_text_underline_code">HI2k4q0PS</div>
    </div>

    <div class="authentication_text_btn">
      <button @click="checkStepOne">
        下一步
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </button>
    </div>

    <div class="authentication_psw_error">驗證碼輸入錯誤</div>
  </div>
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
.authentication {
  &_text {
    width: 50%;
    padding: 5rem 2rem 5rem 6rem;
    background-color: var(--pale-white);
    position: relative;
    display: flex;
    flex-direction: column;
    color: var(--secondary-gray-1);

    &_slogan {
      font-weight: bolder;
      font-size: 2.5rem;
      color: var(--primary-blue);
      font-family: "Montserrat";
    }

    &_title {
      font-family: "Noto Sans TC";
      font-size: 1.5rem;
      padding: 1.25rem 0rem;
    }
    &_subtitle {
      font-size: 1.25rem;
    }
    &_codewrap {
      display: flex;
    }
    &_underline {
      border-bottom: solid 1px #000;
      color: var(--secondary-gray-1);
      padding: 0.25rem;

      &_code {
        margin: 2rem 0rem 0rem 2rem;
        line-height: 3rem;
        height: 3rem;
        padding: 0 24px;
        background-color: var(--secondary-blue-2);
        border-radius: var(--round);
        font-size: 1.25rem;
        color: var(--pale-white);
      }
    }
    &_underline:nth-child(2n + 1) {
      width: 50%;
      display: flex;
    }
    &_instructions_ch {
      font-size: 1rem;
    }

    &_instructions_en {
      font-size: 1rem;
      letter-spacing: initial;
      font-family: "Montserrat", sans-serif;
      margin-bottom: 0.75rem;
    }

    input {
      border: 0;
      outline: none;
      padding-bottom: 0.25rem;
      width: 100%;
      margin: 2rem 0rem 0rem 0rem;
      font-size: 1rem;
      font-family: "Noto Sans TC";

      &::placeholder {
        color: var(--secondary-gray-3);
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
      }
    }

    &_btn {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        width: 10rem;
        border-radius: 2rem;
        padding: 0.5rem 0.25rem;
        background-color: var(--primary-blue);

        color: var(--pale-white);
        font-size: 1.25rem;
        font-family: "Noto Sans TC";
        font-weight: 500;
        letter-spacing: 5px;

        position: absolute;
        bottom: 6rem;
      }
    }

    .authentication_psw_error {
      width: 8rem;
      font-size: 1rem;
      color: var(--accent-red);
      text-align: center;
      // display: none;
    }
  }
}
</style>
