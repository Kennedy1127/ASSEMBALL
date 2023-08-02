<template>
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
}
</style>
