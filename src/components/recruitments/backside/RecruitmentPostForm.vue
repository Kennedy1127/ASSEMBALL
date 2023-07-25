<template>
  <div class="recruitment_post_form">
    <div class="recruitment_post_form_label">
      <label for="product_post_title" class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>徵人標題：
      </label>
      <label for="product_post_title" class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>經歷：
      </label>
      <label for="product_post_title" class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>職缺：
      </label>
      <label for="product_post_title" class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>所在地區(縣市)：
      </label>
      <label
        for="recruitment_post_info"
        class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>職缺說明：
      </label>
    </div>
    <div class="recruitment_post_form_text">
      <input
        type="text"
        id="recruitment_post_title"
        class="recruitment_post_form_text_input"
        maxlength="10"
        value
        placeholder="(0/10)"
      />
      <select id="recruitment_post_level"></select>
      <select id="recruitment_post_player"></select>
      <select id="recruitment_post_loation"></select>
      <textarea
        id="recruitment_post_info"
        cols="20"
        rows="10"
        maxlength="100"
        value
        placeholder="(0/100)"
      ></textarea>
      <div class="recruitment_post_form_btn">
        <button>取消</button>
        <button>上傳</button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.recruitment_post_form {
  display: flex;
  gap: 1rem;
  &_label {
    display: flex;
    flex-direction: column;
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

  &_text {
    display: flex;
    flex-direction: column;
    &_input {
      width: 36rem;
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
    & button:nth-child(1) {
      border: 2px solid;
      border-color: var(--secondary-gray-3);
      color: var(--secondary-gray-3);
      background-color: #fff;
    }
    & button:nth-child(2) {
      background-color: var(--primary-blue);
      color: var(--pale-white);
    }
  }
}
</style>
