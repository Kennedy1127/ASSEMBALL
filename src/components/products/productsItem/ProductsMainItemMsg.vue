<template>
  <section class="product_message">
    <div class="product_message_title">
      <div class="product_message_title_block"></div>
      <span>留言板</span>
    </div>

    <div class="product_message_area">
      <div
        class="product_message_area_all"
        v-for="item in computedComments"
        :key="item"
      >
        <div class="product_message_area_all_pic">
          <img
            class="product_message_area_all_pic_mark"
            src="~@/assets/images/products/mark.png"
            alt="mark"
          />
          <img
            class="product_message_area_all_pic_user"
            src="~@/assets/images/products/message_pic01.png"
            alt="message_pic01"
          />
        </div>

        <div class="product_message_area_all_text">
          <div class="product_message_area_all_text_name">
            {{ item.name }}
          </div>
          <div class="product_message_area_all_text_all">
            {{ item.text }}
          </div>
          <div class="product_message_area_all_text_date">
            <img src="~@/assets/images/products/edit.png" alt="edit" />
            留言日期：{{ convertDate(item.date) }}
          </div>
        </div>
      </div>
    </div>

    <div class="product_message_importing">
      <div class="product_message_importing_user_pic">
        <img
          src="~@/assets/images/products/importing_pic.png"
          alt="importing_pic"
        />
      </div>
      <div class="product_message_importing_text">
        <textarea
          placeholder="請輸入留言內容......"
          v-model="comment"
        ></textarea>
        <button @click="submitComment">送出</button>
      </div>
    </div>

    <div class="product_message_notice">
      <div class="product_message_notice_icon">
        <span>
          <font-awesome-icon icon="fa-solid fa-circle-exclamation"
        /></span>
      </div>
      <div class="product_message_notice_text">
        <div class="product_message_notice_text_title">請注意：</div>
        <div class="product_message_notice_text_detail">
          平台僅供會員自由張貼拍賣訊息。
          <br />
          進行交易時，確實比對貨品規格是否符合，並留下對方真實姓名(最好記下身分證字號)、聯絡方式，務必確認完整再行付款，以免產生糾紛。
          <br />
          建議用網站匯款方式進行交易，較有保障。
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  productMsgData: {
    type: Object,
    required: true,
  },
});

const comment = ref("");

const computedComments = computed(() => props.productMsgData);

const convertDate = (copywritingDate) => {
  if (!copywritingDate) return;
  const date = new Date(copywritingDate);
  return `${date.getFullYear()} / ${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )} / ${String(date.getDate()).padStart(2, "0")}`;
};

const submitComment = () => {
  console.log(comment.value);
};
</script>

<style scoped lang="scss">
.product_message {
  padding: 2rem;
  padding-right: 0;
  &_title {
    width: 100%;
    display: flex;
    gap: 1.5rem;
    padding: 2rem 0 2rem 0;
    border-bottom: 2px solid var(--secondary-gray-2);
    font-weight: 500;
    letter-spacing: 6px;
    font-size: 1.25rem;
    &_block {
      width: 8px;
      height: 26px;
      background-color: var(--primary-blue);
    }
  }
  &_area {
    width: 100%;
    &_all,
    &_seller {
      display: flex;
      padding: 4rem 0 1rem 0;
      border-bottom: 2px solid var(--secondary-gray-2);
      &_pic {
        width: 6rem;
        position: relative;
        &_user {
          width: 100%;
        }
        &_mark {
          position: absolute;
          top: -26px;
          left: 0px;
        }
      }
      &_text {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
        &_name {
          font-size: 1.25rem;
          font-weight: 500;
        }
        &_all {
          margin-top: 1rem;
          color: var(--secondary-gray-1);
        }
        &_date {
          margin-top: 4rem;
          text-align: right;
          color: var(--secondary-gray-1);
          font-size: 0.875rem;
          & img {
            margin-right: 1rem;
          }
        }
      }
    }
  }
  &_importing {
    width: 100%;
    display: flex;
    padding: 4rem 0 4rem 0;
    &_user_pic {
      width: 6rem;
      & img {
        width: 100%;
      }
    }
    &_text {
      width: 100%;
      & textarea {
        resize: none;
        width: 95%;
        display: block;
        margin: 0 2rem 0 2rem;
        min-height: 192px;
        font-size: 1rem;
        padding: 1rem;
        background-color: var(--secondary-blue-4);
        border-radius: var(--round);
        border: none;
        &::placeholder {
          color: var(--secondary-gray-3);
        }
      }
      textarea:focus {
        outline: 2px var(--secondary-blue-1) solid;
        background-color: var(--pale-white);
      }
    }
    & button {
      width: 200px;
      height: 50px;
      display: block;
      background-color: var(--primary-blue);
      color: #fff;
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: 6px;
      border-radius: var(--round);
      border: none;
      margin-left: auto;
      margin-top: 2rem;
      margin-right: 1rem;
    }
  }
  &_notice {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: var(--secondary-blue-3);
    border-radius: var(--round);
    padding: 3rem 1rem;
    margin-bottom: 2rem;
    &_icon {
      color: var(--primary-blue);
      font-size: 2.5rem;
      & img {
        width: 100%;
      }
    }
    &_text {
      width: 85%;
      font-weight: 500;
      background-color: #fff;
      padding: 2rem;
      border-radius: var(--round);
      &_title {
        font-size: 1.25rem;
        color: var(--error-red);
      }
      &_detail {
        margin-top: 1rem;
        color: var(--secondary-gray-1);
      }
    }
  }
}
</style>
