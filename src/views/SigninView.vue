<template>
  <div class="signin_wrap">
    <div class="signin">
      <div class="signin_pic">
        <div class="signin_pic_title">Welcome Back !</div>
        <div class="signin_pic_text">
          Are you ready <br />
          to unleash the power of baseball?
        </div>

        <button class="signin_btn">
          <div class="signin_btn_text">登入</div>
        </button>
      </div>
      <div class="signin_text">
        <div class="signin_text_slogan">Hello , Friend !</div>
        <div class="signin_text_title">會員註冊/Sign Up</div>
        <div class="signin_typing_name">
          <div class="signin_typing_name_underline">
            <input type="text" placeholder="姓/Last Name" />
          </div>

          <div class="signin_typing_name_underline">
            <input type="text" placeholder="名/First Name" />
          </div>
        </div>

        <div class="signin_text_underline">
          <input type="text" placeholder="使用者名稱/User Name" />
        </div>

        <div class="signin_text_underline">
          <input type="email" placeholder="電子郵件/Email" />
        </div>

        <div class="signin_text_underline">
          <input type="password" placeholder="密碼/Password" />
        </div>

        <div class="signin_text_underline">
          <input type="password" placeholder="密碼/Confirm Password" />
        </div>

        <button class="signin_text_btn">註冊</button>
        <div class="signin_psw_error_wrap">
          <div class="signin_psw_error"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.signin_wrap {
  background-color: var(--primary-blue);
  padding: 12rem 0rem;
}
.signin {
  display: flex;
  width: 1200px;
  min-height: 80vh;
  margin: auto;
  border: 1px solid #0003;
  box-shadow: var(--shadow-wide);
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  &_pic {
    // flex: 1;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    background-image: url(~@/assets/images/signin/signinbg.jpg);
    background-size: cover;
    background-repeat: no-repeat;

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

    .signin_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      width: 6rem;
      border-radius: 2rem;
      padding: 0.5rem 0.25rem;
      color: var(--primary-blue);
      font-size: 1.25rem;
      font-family: "Noto Sans TC";
      font-weight: 500;
      position: absolute;
      bottom: 17%;
    }
  }

  &_text {
    width: 50%;
    padding: 5rem 4rem;
    background-color: var(--pale-white);
    position: relative;

    &_slogan {
      text-align: center;
      font-weight: bolder;
      font-size: 2.5rem;
      color: var(--primary-blue);
      font-family: "Montserrat";
    }

    .signin_text_title {
      font-family: "Noto Sans TC";
      font-size: 1.5rem;
      padding: 1.25rem 0rem;
    }

    .signin_text_underline {
      border-bottom: solid 1px black;
      color: var(--secondary-gray-1);
      padding: 0.25rem;
    }

    input {
      border: 0;
      outline: none;
      padding-left: 0.25rem;
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

    .signin_typing_name {
      display: flex;
      justify-content: space-between;
      width: 100%;
      input {
        width: 100%;
        margin: 2rem 0rem 0rem 0rem;
      }
      &_underline {
        border-bottom: solid 1px #000;
        color: var(--secondary-gray-1);
        width: 45%;
        padding: 0.25rem;
      }
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      width: 6rem;
      border-radius: 2rem;
      padding: 0.5rem 0.25rem;
      margin: 10% auto 0% auto;
      color: var(--pale-white);
      font-size: 1.25rem;
      background-color: var(--primary-blue);
      font-weight: 500;
    }
    .signin_psw_error_wrap {
      width: 100%;
      //   background-color: red;
      display: flex;
      justify-content: center;
    }
    .signin_psw_error {
      width: 8rem;
      border: 1px double transparent;
      font-size: 1rem;
      color: var(--accent-red);
      margin: 2rem 0rem 0rem 0rem;
      text-align: center;
    }
  }
}
</style>
