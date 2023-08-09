<template>
  <main class="BackstageLogin">
    <div class="BackstageLogin_window">
      <div class="BackstageLogin_window_header">
        <header>管理者登入</header>
      </div>
      <div class="BackstageLogin_window_content" v-if="LoginState === 'Login'">
        <label for="Account"
          >帳號:<input type="text" v-model="AccountText" id="Account"
        /></label>
        <label for="Password"
          >密碼:<input type="password" v-model="PasswordText" id="Password"
        /></label>
        <button class="enter" @click="Verify">送出</button>
      </div>
      <div
        class="BackstageLogin_window_content"
        v-else-if="LoginState === 'LoginSuccess'"
      >
        <div class="BackstageLogin_window_content_loginsuccess">
          登入成功!!!
        </div>
      </div>
      <div
        class="BackstageLogin_window_content"
        v-else-if="LoginState === 'LoginFail'"
      >
        <div class="BackstageLogin_window_content_loginfail">登入失敗!!!</div>
        <button @click="Back" class="back">返回</button>
      </div>
    </div>
  </main>
</template>
<script>
import { db } from "@/firebase/config"; //引入data base
import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      AccountText: "",
      PasswordText: "",
      LoginState: "Login",
      //   AccountList: [
      //     {
      //       Account: "aaa",
      //       Password: "aaa",
      //       Super: true,
      //     },
      //     {
      //       Account: "bbb",
      //       Password: "bbb",
      //       Super: false,
      //     },
      //   ],
    };
  },
  components: {},
  methods: {
    async Verify() {
      if (this.AccountText == "") {
        return alert("請輸入帳號");
      } else if (!this.PasswordText) {
        return alert("請輸入密碼");
      }

      try {
        const q = query(
          collection(db, "ADMINS"),
          where("Account", "==", this.AccountText),
          where("Password", "==", this.PasswordText)
         
        );
        console.log( "阿豪",collection(db, "ADMINS"))
        const ADMINS = await getDocs(q);
        if (ADMINS.docs.length == 0) return alert("帳密錯誤");
        return this.$router.push("Backstage");
      } catch (err) {
        alert(err);
      }
    },

    // Verify() {
    //   if (
    //     this.ADMINS.docs.find(
    //       (v) =>
    //         v.Account === this.AccountText && v.Password === this.PasswordText
    //     )
    //   ) {
    //     this.$router.push("Backstage");
    //   } else {
    //     this.LoginState = "LoginFail";
    //   }
    // },
    Back() {
      this.LoginState = "Login";
    },
  },
};
</script>
<style scoped lang="scss">
.BackstageLogin {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10rem;
  padding: 3rem;
  background-color: var(--secondary-blue-4);

  &_window {
    border: var(--primary-black) solid;
    width: 60%;
    &_header {
      background-color: var(--primary-blue);
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      border-bottom: var(--primary-black) solid;
      header {
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
    &_content {
      position: relative;
      width: 100%;
      height: 20rem;
      display: flex;
      flex-direction: column;
      padding-top: 5rem;
      align-content: center;
      align-items: center;
      gap: 2rem;
      input {
        border: var(--primary-black) solid;
      }
      .enter {
        background-color: var(--accent-yellow);
        width: 5rem;
        border-radius: 4px;
        position: relative;
        left: 1rem;
      }
      &_loginsuccess {
        margin-top: 3rem;
        font-size: 1.5rem;
      }
      &_loginfail {
        margin-top: 3rem;
        font-size: 1.5rem;
      }
      .back {
        margin-top: 3rem;
        width: 5rem;
        background-color: var(--accent-yellow);
        border-radius: 4px;
      }
    }
  }
}
</style>
