<template>
  <div class="authentication_wrap">
    <AuthenticationComponent layout="normal">
      <template #form>
        <div class="authentication">
          <div class="authentication_text">
            <div class="authentication_text_slogan">Welocom Back !</div>
            <div class="authentication_text_title">會員註冊/Sign Up</div>
            <div class="authentication_text_subtitle">快速登入</div>
            <div class="authentication_text_quickLogin">
              <button class="authentication_text_quickLogin_FB">
                <!-- faFacebook, faLine -->
                <font-awesome-icon icon="fa-brands fa-facebook" />
                Facebook
              </button>
              <button class="authentication_text_quickLogin_LINE">
                <font-awesome-icon icon="fa-brands fa-line" />
                LINE
              </button>
            </div>
            <fieldset>
              <legend>or</legend>
            </fieldset>

            <div class="authentication_text_underline">
              <input type="email" placeholder="電子郵件/Email" />
            </div>

            <div class="authentication_text_underline">
              <input
                type="password"
                placeholder="密碼/Password"
              /><font-awesome-icon icon="fa-solid fa-eye" />
            </div>
            <div class="authentication_text_rememberPsw">
              <label class="authentication_text_rememberPsw_checkbox">
                <input type="checkbox" /><span>
                  <font-awesome-icon icon="fa-solid fa-circle-check"
                /></span>
              </label>
              <span class="authentication_text_rememberPsw_itemtext"
                >記住密碼</span
              >

              <span class="authentication_text_rememberPsw_item">
                <router-link :to="{ name: 'PswForgot' }">忘記密碼?</router-link>
              </span>
            </div>

            <div class="authentication_text_btn">
              <button>
                登入 <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </button>

              <div class="authentication_psw_error">輸入錯誤!</div>
            </div>
          </div>
          <!-- 左邊 -->
          <div class="authentication_pic">
            <div class="authentication_pic_title">Hello , Friend !</div>

            <div class="authentication_pic_text">
              Welcome to our baseball family!
            </div>
            <router-link :to="{ name: 'Authentication' }">
              <button class="authentication_btn">
                註冊
                <font-awesome-icon icon="fa-solid fa-chevron-right" /></button
            ></router-link>
          </div>
        </div>
      </template>
    </AuthenticationComponent>
  </div>

  <!-- <Authentication :layout="reverse">
      <template #form></template
    ></Authentication> -->

  <!-- <div class="authentication">
      <div v-if="layout !== 'normal'">
        <slot name="form">123</slot>
      </div>
      <div class="authentication_pic">
        <div class="authentication_pic_title">Welcome Back !</div>

        <div class="authentication_pic_text">
          Are you ready <br />
          to unleash the power of baseball?
        </div>

        <button class="authentication_btn">
          登入 <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
      </div>

      <div v-if="layout === 'normal'">
        <slot name="form"></slot>
      </div>
      <form class="authentication_text">
        <div class="authentication_text_slogan">Hello , Friend !</div>
        <div class="authentication_text_title">會員註冊/Sign Up</div>
        <div class="authentication_typing_name">
          <div class="authentication_typing_name_underline">
            <input type="text" placeholder="姓/Last Name" />
          </div>

          <div class="authentication_typing_name_underline">
            <input type="text" placeholder="名/First Name" />
          </div>
        </div>

        <div class="authentication_text_underline">
          <input type="text" placeholder="使用者名稱/User Name" />
        </div>

        <div class="authentication_text_underline">
          <input type="email" placeholder="電子郵件/Email" />
        </div>

        <div class="authentication_text_underline">
          <input type="password" placeholder="密碼/Password" />
        </div>

        <div class="authentication_text_underline">
          <input type="password" placeholder="確認密碼/Confirm Password" />
        </div>

        <div class="authentication_text_btn">
          <button>
            註冊 <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </button>

          <div class="authentication_psw_error">輸入錯誤!</div>
        </div>
      </form>
    </div> -->

  <!-- 框.vue -->
  <!-- <div class="authentication_wrap">
    <div class="authentication">
      <div v-if="layout !== 'normal'">
        <slot name="here"></slot>
      </div>
      <div class="authentication_pic">
        <div class="authentication_pic_title">Welcome Back !</div>

        <div class="authentication_pic_text">
          Are you ready <br />
          to unleash the power of baseball?
        </div>

        <button class="authentication_btn">
          登入 <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
      </div>
      <div v-if="layout === 'normal'">
        <slot name="here"></slot>
      </div>
    </div>
  </div> -->

  <!-- 表格login.vue -->
  <!-- <form>...</form> -->

  <!-- 表格Forget.vue -->
  <!-- <form>...</form> -->

  <!-- 表格Register.vue -->
  <!-- <form>...</form> -->

  <!-- 頁面登入.vue -->
  <!-- <框 layout="reverse">
          <template #here>
            <表格login />
          </template>
      </框> -->

  <!-- 頁面註冊.vue -->
  <!-- <框 layout="reverse">
          <template #here>
            <表格Register />
          </template>
      </框> -->
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
  // width: 1200px;
  // min-height: 80vh;
  // margin: auto;
  // border: 1px solid #0003;
  // box-shadow: var(--shadow-wide);
  // border-radius: 0.5rem;
  // overflow: hidden;

  &_text {
    width: 50%;
    padding: 5rem 4rem;
    background-color: var(--pale-white);
    position: relative;
    display: flex;
    flex-direction: column;
    color: var(--secondary-gray-1);

    &_slogan {
      text-align: center;
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
      border-bottom: solid 1px black;
      color: var(--secondary-gray-1);
      padding: 0.25rem;
    }

    input {
      border: 0;
      outline: none;
      padding-left: 0.25rem;
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

    .authentication_typing_name {
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
    fieldset {
      border: none;
      border-top: 1px solid var(--secondary-blue-2);
      legend {
        text-align: center;
        color: var(--secondary-blue-2);
        padding: 0 1rem;
      }
    }
    &_quickLogin {
      display: flex;
      gap: 2rem;
      margin: 1.5rem 0;
      button {
        padding: 0.5rem 2rem;
        width: 50%;
        border-radius: var(--round);
        color: var(--pale-white);
        font-size: 1.5rem;
        font-weight: 600;
      }
      &_LINE {
        background-color: #1dcb42;
      }
      &_FB {
        background-color: #1a76f2;
      }
    }

    &_rememberPsw {
      margin-top: 1rem;
      font-size: 1.25rem;
      color: var(--secondary-gray-1);
      &_itemtext {
        margin: 0 52% 0 3%;
      }
      input[type="checkbox"] {
        display: none;
      }
      input[type="checkbox"]:checked + span {
        color: var(--primary-blue);
      }
      a {
        color: gray;
        text-decoration: dashed;
      }
    }
    &_btn {
      margin-top: 6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      // position: absolute;
      // top: 80%;
      // left: 50%;
      // transform: translateX(-50%);

      button {
        width: 10rem;
        border-radius: 2rem;
        padding: 0.5rem 0.25rem;
        color: var(--pale-white);
        font-size: 1.25rem;
        background-color: var(--primary-blue);
        font-family: "Noto Sans TC";
        font-weight: 500;
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
  &_pic {
    // flex: 1;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(~@/assets/images/authentication/log-in-bg.png);
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
      top: 80%;
    }
  }
}
</style>
