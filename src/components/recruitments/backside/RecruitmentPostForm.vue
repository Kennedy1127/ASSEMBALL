<template>
  <div class="recruitment_post_form">
    <div class="recruitment_post_form_item">
      <label
        for="recruitment_post_title"
        class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>徵人標題：
      </label>
      <input
        type="text"
        id="recruitment_post_title"
        class="recruitment_post_form_item_input"
        maxlength="10"
        value
        placeholder="(0/10)"
      />
    </div>

    <div class="recruitment_post_form_item">
      <label
        for="recruitment_post_level"
        class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>經歷：
      </label>
      <select id="recruitment_post_level"></select>
    </div>

    <div class="recruitment_post_form_item">
      <label
        for="recruitment_post_player"
        class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>職缺：
      </label>
      <select id="recruitment_post_player"></select>
    </div>

    <div class="recruitment_post_form_item">
      <label
        for="recruitment_post_loation"
        class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>所在地區(縣市)：
      </label>
      <select id="recruitment_post_loation"></select>
    </div>

    <div class="recruitment_post_form_item">
      <label
        for="recruitment_post_info"
        class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>職缺說明：
      </label>
      <textarea
        id="recruitment_post_info"
        cols="30"
        rows="8"
        maxlength="100"
        value
        placeholder="(0/100)"
      ></textarea>
    </div>
    <div class="recruitment_post_form_btn">
      <!-- <button>取消</button> -->
      <button>刪除</button>
      <button>上傳</button>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.recruitment_post_form {
  &_label {
    &_title {
      display: block;
      width: 200px;
      text-align: right;
      font-size: 1.25rem;
      color: var(--input-label-gray);
      margin-bottom: 4rem;
      .requiredMark {
        color: var(--caution-red);
      }
    }
  }
  // 表單的item
  &_item {
    display: flex;
    label {
      width: 12rem;
      margin-right: 1rem;
    }
    &_input {
      width: 65%;
      border-radius: 10px;
      height: 3rem;
      font-size: 1.25rem;
      padding: 0.5rem;
      background-color: var(--secondary-blue-4);
      caret-color: var(--secondary-blue-1);
      border: 0;
      margin-bottom: 3rem;
      padding-left: 1rem;
    }
    &_input:focus {
      outline: 2px var(--secondary-blue-1) solid;
      background-color: var(--pale-white);
    }
    &_input::placeholder {
      text-align: right;
      line-height: 25rem;
    }
    select {
      width: 14rem;
      border-radius: 10px;
      border: 2px solid var(--secondary-blue-1);
      color: var(--secondary-blue-1);
      font-size: 1.5rem;
      outline: 0;
      margin-bottom: 3.2rem;
    }
    textarea {
      width: 65%;
      font-size: 1.25rem;
      line-height: 1.75;
      outline: 0;
      background-color: var(--secondary-blue-4);
      border: 0;
      border-radius: 10px;
      padding: 0.5rem;
      caret-color: var(--secondary-blue-1);
      padding-left: 1rem;
    }
    textarea::placeholder {
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
    }
    textarea:focus {
      outline: 2px var(--secondary-blue-1) solid;
      background-color: var(--pale-white);
    }
  }

  &_btn {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    font-size: 1.25rem;
    button {
      width: 10rem;
      height: 3rem;
      border-radius: 10px;
    }
    & button:nth-child(n) {
      border-radius: 10px;
      font-weight: 500;
      border: 0;
    }
    // & button:nth-child(1) {
    //   border: 2px solid;
    //   border-color: var(--secondary-gray-3);
    //   color: var(--secondary-gray-3);
    //   background-color: #fff;
    // }
    & button:nth-child(2) {
      background-color: var(--primary-blue);
      color: var(--pale-white);
    }
    & button:nth-child(1) {
      background-color: var(--error-yellow);
      color: var(--secondary-gray-1);
    }
  }
}
@media screen and (max-width: 420px) {
  .recruitment_post_form {
    &_item {
      display: block;
      margin-bottom: 1rem;
      &_input,
      select,
      textarea {
        width: 100%;
        margin-bottom: 0;
      }
    }
    &_label {
      &_title {
        // display: block;
        // width: 200px;
        text-align: initial;
        // font-size: 1.25rem;
        // color: var(--input-label-gray);
        margin-bottom: 0.5rem;
      }
    }

    &_btn {
      display: block;
      button {
        width: 100%;
        // !important
      }
      & button:nth-child(2) {
        margin: 1.25rem 0;
      }
    }
  }
}
</style>
