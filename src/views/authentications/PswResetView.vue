<template>
  <div class="authentication_wrap">
    <AuthenticationComponent :layout="normal">
      <template #form>
        <div class="authentication">
          <!-- 圖片區 -->
          <div class="authentication_pic">
            <div class="authentication_pic_title">That’s ok !</div>

            <div class="authentication_pic_text">
              Recover your lost password
              <br />and <br />
              return to the glory of the baseball field!
            </div>

            <button class="authentication_btn">
              註冊 <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
          </div>
          <div class="authentication_stepline">
            <div
              class="authentication_stepline_dot"
              v-for="item in 3"
              :key="item"
            ></div>
          </div>
          <!-- 忘記密碼區 -->
          <div class="authentication_text">
            <div class="authentication_text_slogan">Reset Password</div>
            <div class="authentication_text_title">重設密碼</div>
            <div class="authentication_text_instructions">
              <div class="authentication_text_instructions_en">
                Membership authentication successful ! <br />
                Please reset your password.
              </div>
              <div class="authentication_text_instructions_ch">
                會員認證成功！ 請重新設置您的密碼。
              </div>
            </div>

            <div class="authentication_text_underline">
              <input type="email" placeholder="重設密碼/Reset Password" />
            </div>

            <div class="authentication_text_underline">
              <input type="text" placeholder="密碼確認/Confirm Password" />
            </div>
            <div class="authentication_psw_error">輸入錯誤!</div>
            <div class="authentication_text_btn">
              <button>
                變更 <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </template>
    </AuthenticationComponent>
  </div>
</template>

<script>
import AuthenticationComponent from "@/components/Authourize/AuthenticationComponent";
export default {
  components: { AuthenticationComponent },
  props: {
    layout: {
      type: String,
      default: () => "normal",
    },
  },
};
</script>

<style scoped lang="scss">
.authentication {
  display: flex;
  position: relative;
  // width: 1200px;
  min-height: 80vh;
  // margin: auto;
  // border: 1px solid #0003;
  // box-shadow: var(--shadow-wide);
  // border-radius: 0.5rem;
  // overflow: hidden;
  &_stepline {
    position: absolute;
    left: 53%;
    top: 5rem;
    width: 2px;
    height: 80%;
    // background-color: red;
    z-index: 20;
    background-color: var(--primary-blue);
    z-index: 20;
    &_dot {
      width: 2rem;
      height: 2rem;
      border-radius: 2rem;
      position: absolute;
      background-color: var(--primary-blue);
      z-index: 22;
      left: -1rem;
    }
    &_dot:nth-child(1) {
      top: 0;
    }
    &_dot:nth-child(2) {
      width: 1rem;
      height: 1rem;
      left: -0.5rem;
      top: 50%;
    }
    &_dot:nth-child(3) {
      bottom: 0;
    }
  }

  &_text {
    width: 50%;
    padding: 5rem 6rem;
    background-color: var(--pale-white);
    position: relative;
    display: flex;
    flex-direction: column;
    color: var(--secondary-gray-1);

    &_slogan {
      text-align: left;
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

    &_instructions_ch {
      font-size: 1rem;
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
      margin-top: 6rem;
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
        color: var(--pale-white);
        font-size: 1.25rem;
        background-color: var(--primary-blue);
        font-family: "Noto Sans TC";
        font-weight: 500;
        position: absolute;
        bottom: 6rem;
      }
    }

    .authentication_psw_error {
      width: 8rem;
      font-size: 1rem;
      color: var(--accent-red);
      margin-top: 1rem;
      // display: none;
    }
  }
  &_pic {
    // flex: 1;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(~@/assets/images/authentication/PswForgot-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
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
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      width: 10rem;
      border-radius: 2rem;
      padding: 0.5rem 0.25rem;
      color: var(--primary-blue);
      font-size: 1.25rem;
      font-family: "Noto Sans TC";
      font-weight: 500;
      position: absolute;
      bottom: 6rem;
    }
  }
}
</style>
