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
            v-if="productMsgData.seller_id === item.user_id"
            class="product_message_area_all_pic_mark"
            src="~@/assets/images/products/mark.png"
            alt="mark"
          />
          <img
            class="product_message_area_all_pic_user"
            :src="item.pic || require('@/assets/images/icons/main-icon.png')"
            alt="message_pic01"
          />
        </div>

        <div class="product_message_area_all_text">
          <div class="product_message_area_all_text_name">
            {{ item.name }}
          </div>
          <div class="product_message_area_all_text_all">
            <textarea
              :disabled="
                !editMode ||
                item.user_id !== auth.currentUser.uid ||
                editCommentId !== item.id
              "
              v-model="item.comment"
              ref="comment"
              :class="{
                active:
                  editMode &&
                  item.user_id === auth.currentUser.uid &&
                  editCommentId === item.id,
              }"
            >
            </textarea>
          </div>
          <div class="product_message_area_all_text_date">
            <div class="product_message_area_all_text_date_icons">
              <font-awesome-icon
                v-if="
                  item.user_id === auth.currentUser?.uid &&
                  editCommentId !== item.id
                "
                class="icon icon--pen"
                :icon="['fas', 'pen']"
                @click="openEditComment(item.id)"
              />
              <font-awesome-icon
                v-if="editCommentId === item.id"
                class="icon icon--xmark"
                :icon="['fas', 'xmark']"
                @click="closeEditComment"
              />
              <font-awesome-icon
                v-if="editCommentId === item.id"
                class="icon icon--check"
                :icon="['fas', 'check']"
                @click="submitUpdateComment(item.id)"
              />
            </div>
            <span>留言日期：{{ convertDate(item.date) }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="product_message_importing" ref="submitCommentEl">
      <div class="product_message_importing_user_pic">
        <img
          :src="
            store.state.user?.picUrls
              ? store.state.user?.picUrls[0]
              : require('@/assets/images/icons/main-icon.png')
          "
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
            v-model="inputComment"
            maxlength="100"
          ></textarea>

          <div class="product_message_importing_text_count">
            {{ computedInputCommentLen }}/100
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
import { timestamp, auth } from "@/firebase/config";
import getData from "@/composables/data/getData";
import useData from "@/composables/data/useData";
import useStorage from "@/composables/data/useStorage";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const router = useRouter();
const props = defineProps({
  productMsgData: {
    type: Object,
    required: true,
  },
});
const { getDocument, getSubCollectionDocuments } = getData();
const { setDataSubCollection, updateDataSubCollection } = useData();
const { getPicsLink } = useStorage();

onMounted(() => {
  props.productMsgData.comments.forEach(async (comment) => {
    const user = await getDocument("MEMBERS", comment.user_id);
    comment.name = user.lastname + user.firstname;
    const pic = await getPicsLink(
      1,
      `images/MEMBERS/${comment.user_id}`,
      "member"
    );

    if (pic) {
      comment.pic = pic;
    }
  });
});

const submitCommentEl = ref();
const inputComment = ref("");
const error = ref(null);
const computedInputCommentLen = computed(() => inputComment.value.length);

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

  if (!auth.currentUser) {
    store.state.isPending = false;
    return router.push({ name: "Login" });
  }

  if (!inputComment.value) {
    error.value = "請輸入你的留言內容哦";
    return (store.state.isPending = false);
  }

  const productTarget = {
    collectionName: "PRODUCTS",
    documentId: route.params.productId,
    subCollectionName: "COMMENTS",
  };

  const subCollectionData = {
    comment: inputComment.value,
    name: store.state.user.lastname + store.state.user.firstname,
    user_id: auth.currentUser.uid,
    date: timestamp,
    read: false,
  };

  await setDataSubCollection(productTarget, subCollectionData);

  const newComments = await getSubCollectionDocuments(
    {
      collectionName: "PRODUCTS",
      documentId: route.params.productId,
      subCollectionName: "COMMENTS",
    },
    [],
    ["date"]
  );

  for (let i = 0; i < newComments.length; i++) {
    const pic = await getPicsLink(
      1,
      `images/MEMBERS/${newComments[i].user_id}`,
      "member"
    );

    if (pic) {
      newComments[i].pic = pic;
    }
  }

  comments.value = [...newComments];
  submitCommentEl.value.scrollIntoView();

  store.state.isPending = false;
  inputComment.value = "";
};

const editMode = ref(false);
const editCommentId = ref(null);
let editComment = ref(null);
let lastComment = null;

const openEditComment = (id) => {
  editMode.value = true;
  editComment = comments.value.find((comment) => comment.id === id);
  editCommentId.value = id;
  lastComment = editComment.comment;
};

const closeEditComment = () => {
  editMode.value = false;
  editComment.comment = lastComment;
  editCommentId.value = null;
  lastComment = null;
};

const submitUpdateComment = async (id) => {
  if (!editComment.comment) {
    editComment.comment = lastComment;
    return;
  }

  const updateTarget = {
    collectionName: "PRODUCTS",
    documentId: route.params.productId,
    subCollectionName: "COMMENTS",
    subDocumentId: id,
  };
  const updateData = {
    comment: editComment.comment,
  };

  await updateDataSubCollection(updateTarget, updateData);
  lastComment = editComment.comment;
  editMode.value = false;
  editCommentId.value = null;
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
          width: 65%;
          color: var(--secondary-gray-1);

          textarea {
            resize: none;
            color: inherit;
            width: 100%;
            min-height: 150px;
            padding: 0rem 0.5rem;
            border: none;
            background-color: transparent;

            &.active {
              background-color: var(--pale-white);
              outline: 2px solid var(--secondary-blue-1);
            }
          }

          @media all and (max-width: 420px) {
            font-size: 14px;
          }
        }

        &_date {
          margin-top: 1rem;
          text-align: right;
          color: var(--secondary-gray-1);
          font-size: 0.875rem;

          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1.5rem;

          &_icons {
            font-size: 1.25rem;
            display: flex;
            gap: 1rem;
            .icon {
              cursor: pointer;
              width: 25px;
              height: 25px;
              background-color: #fff;

              &--pen {
                color: var(--secondary-gray-3);
              }

              &--xmark {
                color: var(--accent-red);
              }

              &--check {
                color: var(--primary-blue);
              }
            }
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
