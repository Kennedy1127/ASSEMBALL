<template>
  <form class="authentication_mobile">
    <h3 class="authentication_mobile_title">重設密碼</h3>

    <p class="authentication_mobile_text authentication_mobile_text--en">
      Membership authentication successful ! Please reset your password.
    </p>

    <p class="authentication_mobile_text authentication_mobile_text--ch">
      會員認證成功！ 請重新設置您的密碼。
    </p>

    <div class="authentication_mobile_groups">
      <div class="authentication_mobile_group">
        <div class="authentication_mobile_label">
          <label for="password">重設密碼/Password</label>
        </div>

        <div class="authentication_mobile_input">
          <input type="password" id="password" />
        </div>
      </div>

      <div class="authentication_mobile_group">
        <div class="authentication_mobile_label">
          <label for="confirmPassword">密碼確認/Confirm Password</label>
        </div>

        <div class="authentication_mobile_input">
          <input type="password" id="confirmPassword" />
        </div>
      </div>
    </div>

    <div class="authentication_mobile_btn">
      <button>
        變更
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </button>
    </div>

    <div class="authentication_mobile_error">密碼輸入錯誤</div>
  </form>
</template>

<script setup></script>

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

    &--ch {
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
