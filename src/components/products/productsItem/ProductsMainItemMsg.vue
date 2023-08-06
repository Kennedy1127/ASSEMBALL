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
            :src="
              item.icon
                ? item.icon
                : require('@/assets/images/icons/main-icon.png')
            "
            alt="message_pic01"
          />
        </div>

        <div class="product_message_area_all_text">
          <div class="product_message_area_all_text_name">
            {{ item.name }}
          </div>
          <div class="product_message_area_all_text_all">
            {{ item.comment }}
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
      <div v-if="store.state.isMobile" class="product_message_importing_title">
        回覆留言：
      </div>
      <div class="product_message_importing_text">
        <div class="product_message_importing_text_input">
          <textarea
            placeholder="請輸入留言內容......"
            v-model="comment"
            maxlength="100"
          ></textarea>

          <div class="product_message_importing_text_count">
            {{ computedCommentLen }}/100
          </div>
        </div>
        <p v-if="error" class="product_message_importing_text_error">
          {{ error }}
        </p>
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
          <div>平台僅供會員自由張貼拍賣訊息。</div>
          <br />
          <div>
            進行交易時，確實比對貨品規格是否符合，並留下對方真實姓名(最好記下身分證字號)、聯絡方式，務必確認完整再行付款，以免產生糾紛。
          </div>
          <br />
          <div>建議用網站匯款方式進行交易，較有保障。</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { timestamp } from "@/firebase/config";
import useData from "@/composables/data/useData";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const props = defineProps({
  productMsgData: {
    type: Object,
    required: true,
  },
});
const { setDataSubCollection } = useData();

const comment = ref("");
const error = ref(null);
const computedCommentLen = computed(() => comment.value.length);
const comments = ref([...props.productMsgData.comments]);
const computedComments = computed(() => [...comments.value]);

const convertDate = (msgDate) => {
  if (!msgDate) return;
  const date = !msgDate.toDate ? new Date() : new Date(msgDate.toDate());
  return `${date.getFullYear()} / ${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )} / ${String(date.getDate()).padStart(2, "0")}`;
};

const submitComment = async () => {
  store.state.isPending = true;

  if (!comment.value) {
    error.value = "請輸入你的留言內容哦";
    return (store.state.isPending = false);
  }

  const productTarget = {
    collectionName: "PRODUCTS",
    documentId: route.params.productId,
    subCollectionName: "COMMENTS",
  };

  const subCollectionData = {
    comment: comment.value,
    icon: null,
    name: "棒球專家",
    user_id: "id",
    date: timestamp,
  };

  await setDataSubCollection(productTarget, subCollectionData);
  comments.value.push(subCollectionData);
  store.state.isPending = false;
  comment.value = "";
};
</script>

<style scoped lang="scss">
.product_message {
  padding: 2rem;
  padding-right: 0;

  @media all and (max-width: 420px) {
    padding: 0;
  }

  &_title {
    width: 100%;
    display: flex;
    gap: 1.5rem;
    padding: 2rem 0 2rem 0;
    border-bottom: 2px solid var(--secondary-gray-2);
    font-weight: 500;
    letter-spacing: 6px;
    font-size: 1.25rem;

    @media all and (max-width: 420px) {
      border-bottom: none;
      padding: 3rem 0 1.5rem;

      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;

        width: 40px;
        height: 5px;
        background-color: var(--primary-blue);
      }
    }

    &_block {
      width: 8px;
      height: 26px;
      background-color: var(--primary-blue);

      @media all and (max-width: 420px) {
        display: none;
      }
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

        @media all and (max-width: 420px) {
          margin-left: 1.5rem;
        }

        &_name {
          font-size: 1.25rem;
          font-weight: 500;

          @media all and (max-width: 420px) {
            font-size: 1rem;
          }
        }

        &_all {
          margin-top: 1rem;
          color: var(--secondary-gray-1);

          @media all and (max-width: 420px) {
            font-size: 14px;
          }
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

    @media all and (max-width: 420px) {
      flex-direction: column;
      padding: 0;
    }

    &_user_pic {
      width: 6rem;

      @media all and (max-width: 420px) {
        display: none;
      }

      & img {
        width: 100%;
      }
    }

    &_title {
      margin: 1.5rem 0;
      font-size: 1rem;
      font-weight: 500;
      color: var(--secondary-gray-1);
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

        @media all and (max-width: 420px) {
          width: 100%;
          margin: 0;
          min-height: 300px;
        }

        &::placeholder {
          color: var(--secondary-gray-3);
        }
      }
      textarea:focus {
        outline: 2px var(--secondary-blue-1) solid;
        background-color: var(--pale-white);
      }

      &_input {
        position: relative;
      }

      &_count {
        position: absolute;
        bottom: 1rem;
        right: 2rem;
        font-size: 1rem;
        color: var(--secondary-gray-3);

        @media all and (max-width: 420px) {
          right: 1rem;
        }
      }

      &_error {
        margin-top: 1rem;
        font-size: 1rem;
        text-align: center;
        color: var(--accent-red);
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

      @media all and (max-width: 420px) {
        margin: 1.5rem 0 3rem;
        width: 100%;
      }
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

    @media all and (max-width: 420px) {
      flex-direction: column;
      justify-content: initial;
      padding: 1.5rem;
      padding-top: 1rem;
      gap: 1rem;
    }

    &_icon {
      color: var(--primary-blue);
      font-size: 2.5rem;

      @media all and (max-width: 420px) {
        font-size: 2rem;
      }

      & img {
        width: 100%;
      }
    }

    &_text {
      width: 85%;

      background-color: #fff;
      padding: 2rem;
      border-radius: var(--round);

      @media all and (max-width: 420px) {
        width: 100%;
        padding: 1rem 1.25rem;
      }

      &_title {
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--error-red);

        @media all and (max-width: 420px) {
          font-size: 1rem;
        }
      }

      &_detail {
        margin-top: 1rem;
        color: var(--secondary-gray-1);

        @media all and (max-width: 420px) {
          font-size: 14px;

          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
