<template>
  <div class="product_post_wrap">
    <div class="goback">
      <router-link :to="{ name: 'Products' }">
        <span>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </span>
        返回
      </router-link>
    </div>

    <div class="product_post">
      <div class="product_post_caution">
        <div class="product_post_caution_icon">
          <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
        </div>
        <div class="product_post_caution_content">
          <div class="product_post_caution_content_title">請注意：</div>
          <p class="product_post_caution_content_text">
            平台僅供會員自由張貼拍賣訊息。<br /><br />
            進行交易時，確實比對貨品規格是否符合，並留下對方真實姓名(最好記下身分證字號)、
            聯絡方式，務必確認完整再行付款，以免產生糾紛。<br /><br />
            建議用網站匯款方式進行交易，較有保障。
          </p>
        </div>
      </div>

      <div class="product_post_info">
        <div class="product_post_info_title">
          <div class="block"></div>
          <div>上傳基本資訊</div>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="product_post_info_content">
            <div class="product_post_info_group">
              <div class="product_post_info_label">
                <div class="label-star">*</div>
                <label for="productname">商品名稱：</label>
              </div>
              <div class="product_post_info_input">
                <input
                  type="text"
                  id="productname"
                  placeholder="請輸入商品名稱"
                  v-model="productName"
                  maxlength="10"
                  pattern="[^%&',;=?$\x22]+"
                  required
                />
                <div class="text-count">({{ computedProductNameLen }}/10)</div>
              </div>
            </div>

            <div class="product_post_info_group">
              <div class="product_post_info_label">
                <div class="label-star">*</div>
                <label for="">類別：</label>
              </div>
              <div class="product_post_info_select">
                <SelectorComponent
                  :options="productTags"
                  v-model="tag"
                  placeholder="選擇類別"
                />
              </div>
            </div>

            <div class="product_post_info_group">
              <div class="product_post_info_label">
                <label for="">所在縣市：</label>
              </div>
              <div class="product_post_info_select">
                <SelectorComponent
                  :options="productArea"
                  v-model="area"
                  placeholder="選擇地區"
                />
              </div>
            </div>

            <div class="product_post_info_group">
              <div class="product_post_info_label">
                <div class="label-star">*</div>
                <label for="price">價錢：</label>
              </div>
              <div
                class="product_post_info_input product_post_info_input--price"
              >
                <input
                  type="text"
                  id="price"
                  placeholder="請輸入商品價格"
                  v-model="price"
                  minlength="1"
                  pattern="^[0-9]*$"
                  required
                />
              </div>
            </div>

            <div class="product_post_info_group">
              <div class="product_post_info_label">
                <div class="label-star">*</div>
                <label for="email">Email：</label>
              </div>
              <div class="product_post_info_input">
                <input
                  type="email"
                  id="email"
                  placeholder="請輸入電子信箱"
                  v-model="email"
                  required
                />
              </div>
            </div>

            <div class="product_post_info_group">
              <div class="product_post_info_label">
                <div class="label-star">*</div>
                <label for="phone">電話：</label>
              </div>
              <div class="product_post_info_input">
                <input
                  type="tel"
                  id="phone"
                  placeholder="請輸入手機號碼(格式：09xxxxxxxx)"
                  v-model="phone"
                  maxlength="11"
                  pattern="09\d{2}-\d{6}"
                  required
                />
              </div>
            </div>

            <div class="product_post_info_group">
              <div class="product_post_info_label">
                <div class="label-star">*</div>
                <label for="image">商品圖片：</label>
              </div>
              <!-- //上傳 -->
              <div class="product_post_info_upload">
                <div
                  v-if="!computedPicIsUploaded"
                  class="product_post_info_upload_init"
                >
                  <div class="product_post_info_upload_pic">
                    <img
                      src="@/assets/images/icons/default_avatar.svg"
                      alt="upload icon"
                    />
                  </div>
                </div>

                <div
                  v-if="computedPicIsUploaded"
                  class="product_post_info_upload_pics"
                >
                  <div
                    v-for="(pic, index) in pics"
                    :key="index"
                    class="product_post_info_upload_pic"
                  >
                    <font-awesome-icon
                      class="icon"
                      :icon="['fas', 'circle-xmark']"
                      @click="deletePic(index)"
                    />
                    <img :src="picToUrl(pic)" alt="preview image" />
                  </div>
                </div>

                <label for="product_pic">
                  <span><font-awesome-icon icon="fa-solid fa-plus" /></span>
                  上傳商品照片
                  <input
                    multiple
                    type="file"
                    id="product_pic"
                    accept="image/*"
                    @change="onfile"
                  />
                </label>

                <p
                  v-if="picError"
                  class="product_post_info_error product_post_info_error--mt-1"
                >
                  {{ picError }}
                </p>
              </div>
            </div>

            <div class="product_post_info_group">
              <div class="product_post_info_label">
                <div class="label-star">*</div>
                <label for="comment">賣家留言：</label>
              </div>
              <div class="product_post_info_input">
                <textarea
                  id="comment"
                  cols="60"
                  rows="10"
                  minlength="10"
                  maxlength="100"
                  value
                  placeholder="請填入留言版內容..."
                  v-model="comment"
                ></textarea>
                <div class="text-count text-count--textarea">
                  ({{ computedCommentLen }}/100)
                </div>
              </div>
            </div>
          </div>

          <div class="product_post_info_btns">
            <button @click.prevent="console.log('cancel')">取消</button>
            <button @click.prevent="console.log('delete')">刪除商品</button>
            <button>刊登商品</button>
          </div>

          <p
            v-if="error"
            class="product_post_info_error product_post_info_error--mt-1"
          >
            {{ error }}
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import SelectorComponent from "@/components/utilities/SelectorComponent.vue";
import { timestamp } from "@/firebase/config";
import useData from "@/composables/data/useData";
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();
const { setDataError, setData, setDataSubCollection } = useData();

onMounted(() => {
  // console.log(store.state.)
});

const productName = ref("testtest");
const price = ref("111");
const email = ref("test@mail.com");
const phone = ref("0955-111222");
const comment = ref("testtesttest");
const pics = ref([]);
const tag = ref(2);
const area = ref(-1);
const productTags = ref([
  {
    id: 1,
    label: "球棒",
  },
  {
    id: 2,
    label: "球帽",
  },
  {
    id: 3,
    label: "球衣",
  },
  {
    id: 4,
    label: "球",
  },
  {
    id: 5,
    label: "護具",
  },
  {
    id: 6,
    label: "釘鞋",
  },
  {
    id: 7,
    label: "手套",
  },
]);
const productArea = ref([
  {
    id: "不限地區",
    label: "不限地區",
  },
  {
    id: "基隆市",
    label: "基隆市",
  },
  {
    id: "台北市",
    label: "台北市",
  },
  {
    id: "新北市",
    label: "新北市",
  },
  {
    id: "桃園市",
    label: "桃園市",
  },
  {
    id: "新竹縣",
    label: "新竹縣",
  },
  {
    id: "新竹市",
    label: "新竹市",
  },
  {
    id: "苗栗縣",
    label: "苗栗縣",
  },
  {
    id: "台中市",
    label: "台中市",
  },
  {
    id: "彰化縣",
    label: "彰化縣",
  },
  {
    id: "南投縣",
    label: "南投縣",
  },
  {
    id: "雲林縣",
    label: "雲林縣",
  },
  {
    id: "嘉義縣",
    label: "嘉義縣",
  },
  {
    id: "嘉義市",
    label: "嘉義市",
  },
  {
    id: "台南市",
    label: "台南市",
  },
  {
    id: "高雄市",
    label: "高雄市",
  },

  {
    id: "屏東縣",
    label: "屏東縣",
  },
  {
    id: "宜蘭縣",
    label: "宜蘭縣",
  },
  {
    id: "花蓮縣",
    label: "花蓮縣",
  },
  {
    id: "台東縣",
    label: "台東縣",
  },
  {
    id: "澎湖縣",
    label: "澎湖縣",
  },
]);
const error = ref(null);
const picError = ref(null);

const computedProductNameLen = computed(() => productName.value.length);
const computedCommentLen = computed(() => comment.value.length);
const computedPicIsUploaded = computed(() => pics.value.length > 0);

const onfile = (e) => {
  if (!e.target.files[0]) return;

  if (e.target.files.length + pics.value.length > 4) {
    return (picError.value = "最多接受4張商品圖片！");
  }

  for (const file of e.target.files) {
    pics.value.push(file);
  }
  picError.value = null;
};

const picToUrl = (pic) => URL.createObjectURL(pic);

const deletePic = (index) => {
  pics.value.splice(index, 1);
};

const checkSubmitData = () => {
  error.value = null;

  if (tag.value === -1) {
    return (error.value = "請選擇商品類別");
  }

  if (area.value === -1) {
    area.value = "不限地區";
  }

  if (pics.value.length !== 4) {
    return (error.value = "必須上傳至少4張商品圖片！");
  }

  if (!comment.value) {
    return (error.value =
      "賣家留言不得為空，為你的商品添加一些說明吧！ (最少10個字)");
  }
};

const postProduct = async (data) => {
  const id = await setData("PRODUCTS", data, pics.value);
  const productTarget = {
    collectionName: "PRODUCTS",
    documentId: id,
    subCollectionName: "COMMENTS",
  };

  const commentData = {
    comment: comment.value,
    icon: store.state.user.pic ? store.state.user.pic : null,
    name: store.state.user.firstname + store.state.user.lastname,
    user_id: store.state.user.id,
    date: timestamp,
    read: true,
  };

  await setDataSubCollection(productTarget, commentData);

  const productManageTarget = {
    collectionName: "MEMBERS",
    documentId: store.state.user.id,
    subCollectionName: "PRODUCTMANAGE",
  };

  const productManageData = {
    title: data.title,
    price: data.price,
    date: data.date,
    product_id: id,
  };

  await setDataSubCollection(productManageTarget, productManageData);
  return id;
};

const updateProduct = async (id, data) => {
  await setData("PRODUCTS", data, pics.value);
  return id;
};

const handleSubmit = async () => {
  store.state.isPending = true;
  checkSubmitData();
  if (error.value) return (store.state.isPending = false);

  const data = {
    title: productName.value,
    price: price.value,
    email: email.value,
    phone: phone.value,
    tag: tag.value,
    area: area.value,
    date: timestamp,
    status: true,
    home_status: -1,
    seller_icon: store.state.user.pic ? store.state.user.pic : null,
    seller_name: store.state.user.firstname + store.state.user.lastname,
    seller_id: store.state.user.id,
  };

  const id = await postProduct(data);
  if (setDataError.value) {
    error.value = "商品刊登失敗，請重新整理或洽平台管理員";
    return (store.state.isPending = false);
  }

  store.state.isPending = false;
  router.push({ name: "ProductDetail", params: { productId: id } });
};
</script>

<style lang="scss">
.product_post_wrap {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  padding-top: 8rem;

  @media all and (max-width: 420px) {
    padding-top: 4rem;
    background-color: #fff;
  }

  .goback {
    font-size: 1.5rem;
    color: var(--primary-blue);
    margin-bottom: 1rem;
    // width: 100%;
    max-width: 1200px;
    margin: auto;

    @media all and (max-width: 420px) {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;

      width: 100%;
      height: 80px;
      margin: 4.5rem 0 0;
      padding: 1rem 1.5rem 1rem 1rem;
      background-color: #fff;
      box-shadow: var(--shadow-light);

      display: flex;
      align-items: center;
    }

    & a {
      color: var(--primary-blue);
      font-size: 1.5rem;
      font-weight: 500;
      padding-bottom: 0.5rem;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 1rem;
      width: fit-content;

      @media all and (max-width: 420px) {
        padding-bottom: 0;
        font-size: 1.25rem;
      }

      & span {
        color: var(--primary-blue);
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
  }

  .product_post {
    background-color: var(--pale-white);
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    width: 100%;
    max-width: 1600px;
    margin: auto;
    padding: 4rem 12rem;

    display: grid;
    grid-template-columns: 1.5fr 3.5fr;
    align-items: start;
    gap: 5rem;

    @media screen and (max-width: 1600px) {
      padding: 4rem 12rem;
    }
    @media screen and (max-width: 1500px) {
      padding: 4rem 6rem;
    }
    @media screen and (max-width: 1400px) {
      padding: 4rem 1.5rem;
    }

    @media screen and (max-width: 420px) {
      margin-top: 8rem;
      padding: 0 1.5rem;
      grid-template-columns: 1fr;
      box-shadow: none;
    }

    &_caution {
      width: 100%;
      background-color: var(--secondary-blue-3);
      padding: 1.5rem;
      border-radius: 0.5rem;

      @media all and (max-width: 420px) {
        padding: 1rem;
        padding-top: 0.5rem;
        order: 2;
      }

      &_icon {
        color: var(--primary-blue);
        font-size: 2.5rem;
        margin-bottom: 1rem;

        @media all and (max-width: 420px) {
          font-size: 2rem;
        }
      }

      &_content {
        padding: 1rem;
        margin: auto;
        background-color: var(--pale-white);
        border-radius: 0.5rem;

        &_title {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--caution-red);
          font-weight: 500;

          @media all and (max-width: 420px) {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
        }

        &_text {
          font-size: 1rem;
          line-height: 1.75;
          // white-space: pre-wrap;
          text-align: left;
        }
      }
    }

    &_info {
      &_error {
        font-size: 1rem;
        text-align: center;
        color: var(--accent-red);

        &--mt-1 {
          margin-top: 1rem;
        }
      }

      &_title {
        display: flex;
        gap: 1.5rem;
        padding-bottom: 2rem;
        border-bottom: 2px solid var(--secondary-gray-2);

        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-blue);

        .block {
          width: 1rem;
          background-color: var(--primary-blue);
        }
      }

      &_content {
        padding-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 4rem;

        width: 85%;

        @media screen and (max-width: 420px) {
          width: 100%;
          gap: 2rem;
        }
      }

      &_group {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;

        @media screen and (max-width: 420px) {
          flex-direction: column;
          gap: 1rem;
        }
      }

      &_label {
        flex-basis: 130px;

        display: flex;
        justify-content: flex-end;
        font-size: 1.25rem;
        font-weight: 400;

        @media screen and (max-width: 420px) {
          flex-basis: 0;
        }

        .label-star {
          color: var(--caution-red);
        }

        label {
          color: var(--input-label-gray);
        }
      }

      &_input {
        flex: 1;
        position: relative;

        @media screen and (max-width: 420px) {
          flex: initial;
          width: 100%;
        }

        input,
        textarea {
          width: 100%;
          height: 50px;
          padding: 1rem;
          border-radius: 10px;
          background-color: var(--secondary-blue-4);
          font-size: 1.25rem;
          color: inherit;

          &:focus {
            outline: 2px var(--secondary-blue-1) solid;
            background-color: var(--pale-white);
          }
        }

        textarea {
          resize: none;
          border: none;
          min-height: 300px;
        }

        &--price {
          flex: initial;
          width: 30%;

          @media screen and (max-width: 420px) {
            width: 100%;
          }

          input {
            width: 100%;
          }
        }

        .text-count {
          position: absolute;
          top: 50%;
          right: 1rem;
          transform: translateY(-50%);
          font-size: 14px;
          color: var(--secondary-gray-3);

          @media screen and (max-width: 420px) {
            transform: translateY(0);
            top: initial;
            bottom: 0.75rem;
            right: 0.5rem;
            font-size: 1.25rem;
          }

          &--textarea {
            transform: translateY(0);
            top: initial;
            bottom: 1rem;
          }
        }
      }

      &_select {
        width: 30%;

        @media screen and (max-width: 420px) {
          width: 100%;
        }

        .selector-component {
          width: 100%;
          height: 50px;

          .ivu-select-selection {
            border: 2px solid var(--secondary-blue-1);

            color: (--secondary-blue-1);

            .ivu-select-placeholder {
              color: var(--input-label-gray);
            }

            div:first-of-type {
              padding: 0.5rem 1rem;

              i {
                &::before {
                  color: var(--secondary-blue-1);
                }
              }
            }
          }
        }
      }

      &_upload {
        flex: 1;

        @media screen and (max-width: 420px) {
          width: 100%;
        }

        &_pic {
          width: 150px;
          height: 150px;

          position: relative;

          @media screen and (max-width: 420px) {
            width: 100px;
            height: 100px;
          }

          .icon {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 1.5rem;
            color: var(--secondary-gray-3);
            background-color: #fff;
            border-radius: 50%;
            cursor: pointer;
          }
        }

        & img {
          width: 100%;
          height: 100%;
        }
        & label {
          display: flex;
          text-align: center;
          color: var(--secondary-blue-1);
          padding: 0.5rem;
          margin-top: 1rem;
          font-weight: 500;
          border: 2px dashed var(--secondary-blue-1);
          cursor: pointer;
          width: 150px;
          & span {
            padding-right: 0.5rem;
          }
          & input {
            display: none;
          }
        }
        & label:hover {
          background-color: var(--secondary-blue-4);
        }

        &_pics {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        // label {
        //   display: flex;
        //   flex-direction: column;
        //   text-align: center;
        //   color: var(--secondary-blue-1);
        //   border: 2px dashed var(--secondary-blue-1);
        //   padding: 1.5rem;
        //   max-width: 12rem;
        //   cursor: pointer;

        //   @media screen and (max-width: 420px) {
        //     max-width: 100%;
        //     min-height: 342px;
        //     align-items: center;
        //     justify-content: center;
        //   }

        //   img {
        //     padding: 1rem;
        //     padding-left: 1.5rem;
        //     width: 8rem;

        //     @media screen and (max-width: 420px) {
        //       width: 10rem;
        //     }
        //   }

        //   &:hover {
        //     background-color: var(--secondary-blue-4);
        //   }

        //   input {
        //     display: none;
        //   }
        // }
      }

      &_btns {
        width: 85%;
        margin-top: 2rem;

        display: flex;
        justify-content: flex-end;
        gap: 1.5rem;

        @media screen and (max-width: 420px) {
          width: 100%;
          flex-direction: column;
          justify-content: initial;
        }

        button {
          border-radius: 10px;

          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 1.5px;

          width: 150px;
          height: 50px;

          @media screen and (max-width: 420px) {
            width: 100%;
          }

          &:first-child {
            color: var(--secondary-gray-3);

            background-color: #fff;
            border: 2px solid var(--secondary-gray-3);
          }

          &:nth-child(2) {
            color: var(--secondary-gray-1);
            background-color: var(--error-yellow);
          }

          &:nth-child(3) {
            color: var(--pale-white);
            background-color: var(--primary-blue);
          }
        }
      }
    }
  }
}
</style>
