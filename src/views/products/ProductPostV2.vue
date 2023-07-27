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

        <form action="">
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
                  placeholder="請輸入商品名稱(1-10字)"
                  v-model="productname"
                  maxlength="11"
                  pattern="[^%&',;=?$\x22]+"
                  required
                />
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
                  placeholder="改placeholder"
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
                  placeholder="改placeholder"
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
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
                  placeholder="請輸入手機號碼(格式：09xx-xxxxxx)"
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
              <div class="product_post_info_upload">
                <label for="image">
                  <img
                    src="~@/assets/images/MemberCenter/MemberCenter_Personal_pic.svg"
                    alt="MemberCenter_Personal_pic"
                  />上傳商品圖片
                  <input type="file" id="image" />
                </label>
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
                  placeholder="請填入留言版內容(10-100字)"
                  v-model="comment"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="product_post_info_btns">
            <button>取消</button>
            <button>刪除商品</button>
            <button>刊登商品</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SelectorComponent from "@/components/utilities/SelectorComponent.vue";

export default {
  components: { SelectorComponent },

  data() {
    return {
      // 表單資料
      productname: "",
      price: "",
      email: "",
      phone: "",
      comment: "",
      tag: -1,
      area: "",
      ////////////////

      // 下拉選單的tag分類
      productTags: [
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
      ],

      // 下拉選單的地區分類
      productArea: [
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
      ],
    };
  },

  methods: {
    //提交表單
    submitForm() {
      alert("商品上架的資料送出成功！");
      // 表單資料確認
      console.log("商品名稱：", this.productname);
      console.log("商品價格：", this.price);
      console.log("電子信箱：", this.email);
      console.log("手機號碼：", this.phone);
      console.log("賣家留言：", this.comment);
      //提交後重置表單資料
      this.productname = "";
      this.price = "";
      this.email = "";
      this.phone = "";
      this.comment = "";
    },
  },
};
</script>

<style lang="scss">
.product_post_wrap {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  padding-top: 8rem;
  .goback {
    font-size: 1.5rem;
    color: var(--primary-blue);
    margin-bottom: 1rem;
    // width: 100%;
    max-width: 1200px;
    margin: auto;

    & a {
      color: var(--primary-blue);
      font-size: 1.25rem;
      font-weight: 500;
      padding-bottom: 0.5rem;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 1rem;
      width: fit-content;

      & span {
        color: var(--primary-blue);
        font-size: 1.25rem;
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
      padding: 4rem rem;
    }
    @media screen and (max-width: 1500px) {
      padding: 4rem 6rem;
    }
    @media screen and (max-width: 1400px) {
      padding: 4rem 1.5rem;
    }

    &_caution {
      width: 100%;
      background-color: var(--secondary-blue-3);
      padding: 1.5rem;
      border-radius: 0.5rem;

      &_icon {
        color: var(--primary-blue);
        font-size: 2.5rem;
        margin-bottom: 1rem;
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
      &_title {
        display: flex;
        gap: 1.5rem;
        padding-bottom: 2rem;
        border-bottom: 2px solid var(--secondary-gray-2);

        font-size: 1.5rem;
        font-weight: 600;
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
      }

      &_group {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
      }

      &_label {
        flex-basis: 130px;

        display: flex;
        justify-content: flex-end;
        font-size: 1.25rem;
        font-weight: 400;

        .label-star {
          color: var(--caution-red);
        }

        label {
          color: var(--input-label-gray);
        }
      }

      &_input {
        flex: 1;

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
          input {
            width: 100%;
          }
        }
      }

      &_select {
        width: 30%;
        .selector-component {
          width: 100%;
          height: 50px;

          .ivu-select-selection {
            border: 2px solid var(--secondary-blue-1);

            color: (--secondary-blue-1);

            .ivu-select-placeholder {
              color: var(--secondary-blue-1);
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
        label {
          display: flex;
          flex-direction: column;
          text-align: center;
          color: var(--secondary-blue-1);
          border: 2px dashed var(--secondary-blue-1);
          padding: 1.5rem;
          max-width: 12rem;
          cursor: pointer;

          img {
            padding: 1rem;
            padding-left: 1.5rem;
            width: 8rem;
          }

          &:hover {
            background-color: var(--secondary-blue-4);
          }

          input {
            display: none;
          }
        }
      }

      &_btns {
        width: 85%;
        margin-top: 2rem;

        display: flex;
        justify-content: flex-end;
        gap: 1.5rem;

        button {
          border-radius: 10px;

          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 1.5px;

          width: 150px;
          height: 50px;

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
