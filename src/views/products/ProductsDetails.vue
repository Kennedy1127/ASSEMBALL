<template>
  <main class="products">
    <div class="wrapper">
      <section class="products_breadcrumb">
        <span>
          <router-link to="/">拍賣專區</router-link>
        </span>
        <div class="icon">
          <span> <font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
        </div>
        <span>
          <router-link to="/products">商品詳情</router-link>
        </span>
      </section>

      <section class="products_content">
        <aside class="products_aside">
          <ProductsAsideSearch />
          <ProductsAsideTags :productTags="productTags" />
        </aside>

        <main class="products_main">
          <section class="product_main_detail">
            <div class="product_main_detail_pic">
              <img
                src="~@/assets/images/products/productdetail_pic1.png"
                alt="productdetail_pic1"
              />
              <div class="product_main_detail_pic_all">
                <div class="product_main_detail_pic_all_small">
                  <img
                    src="~@/assets/images/products/productdetail_smallpic1.png"
                    alt="productdetail_pic1"
                  />
                </div>
                <div class="product_main_detail_pic_all_small">
                  <img
                    src="~@/assets/images/products/productdetail_smallpic1.png"
                    alt="productdetail_pic1"
                  />
                </div>
                <div class="product_main_detail_pic_all_small">
                  <img
                    src="~@/assets/images/products/productdetail_smallpic1.png"
                    alt="productdetail_pic1"
                  />
                </div>
                <div class="product_main_detail_pic_all_small">
                  <img
                    src="~@/assets/images/products/productdetail_smallpic1.png"
                    alt="productdetail_pic1"
                  />
                </div>
              </div>
            </div>
            <div class="product_main_detail_content">
              <div class="product_main_detail_content_title">
                <span>{{ productDetail.Title }}</span>
              </div>
              <div
                class="product_main_detail_content_body"
                v-for="item in productDetailBody"
                :key="item"
              >
                {{ item.title }}{{ item.text }}
              </div>
              <div class="detail_footer">
                <div class="detail_price">{{ productDetail.Price }}</div>
                <button>我要購買</button>
              </div>
            </div>
          </section>
          <section class="product_message">
            <div class="product_message_title">
              <div class="product_message_title_block"></div>
              <span>{{ productMessage.Title }}</span>
            </div>
            <div class="product_message_area">
              <div
                class="product_message_area_all"
                v-for="item in messageArea"
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
                    <span>{{ item.name }}</span>
                  </div>
                  <div class="product_message_area_all_text_all">
                    {{ item.textAll }}
                  </div>
                  <div class="product_message_area_all_text_date">
                    <span><font-awesome-icon icon="fa-solid fa-pen" /></span>
                    {{ item.date }}
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
                  name="comment"
                  form="usrform"
                ></textarea>
                <button>送出</button>
              </div>
            </div>
            <div class="product_message_notice">
              <div class="product_message_notice_icon">
                <span>
                  <font-awesome-icon icon="fa-solid fa-circle-exclamation"
                /></span>
              </div>
              <div class="product_message_notice_text">
                <div class="product_message_notice_text_title">
                  {{ noticeText.Title }}
                </div>
                <div class="product_message_notice_text_detail">
                  {{ noticeText.Text }}
                  <br />
                  {{ noticeText.TextTwo }}
                  <br />
                  {{ noticeText.TextThree }}
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  </main>
</template>

<script>
import ProductsAsideSearch from "@/components/products/productsAside/ProductsAsideSearch";
import ProductsAsideTags from "@/components/products/productsAside/ProductsAsideTags";
import productsData from "@/composables/productsData";

export default {
  components: {
    ProductsAsideSearch,
    ProductsAsideTags,
  },
  data() {
    return {
      productTags: [
        { name: "#全部", type: "all" },
        { name: "#球棒", type: "bat" },
        { name: "#手套", type: "glove" },
        { name: "#球衣", type: "jersey" },
        { name: "#打擊手套", type: "batting glove" },
        { name: "#球帽", type: "cap" },
      ],
      productsData: [...productsData],
      productDetail: {
        Title: "棒球界LV精品球棒",
        Price: "NT$4,500",
      },
      productDetailBody: [
        { title: "刊登日期 : ", text: "2023/07/06" },
        { title: "類別 : ", text: "球棒" },
        { title: "刊登者 : ", text: "棒球專家小羊" },
        { title: "縣市 : ", text: "新北市" },
        { title: "Email : ", text: "hawhaw052@gmail.com" },
        { title: "Phone : ", text: "0953299481" },
      ],
      productMessage: {
        Title: "留言板",
      },
      messageArea: [
        {
          name: "棒球專家小楊",
          textAll:
            "小弟這隻是Louisville slugger木棒，打了大約四年，有些地方碎裂許多，基本上不能打硬球QQ....只能打練習場的軟球了。想約打棒球的也可以約起來ʘ‿ʘ",
          date: "留言日期：2023 / 07 / 06",
        },
        {
          name: "棒球迷阿真",
          textAll: "你好我有興趣！！",
          date: "留言日期：2023 / 07 / 06",
        },
      ],
      noticeText: {
        Title: "請注意：",
        Text: "平台僅供會員自由張貼拍賣訊息。",
        TextTwo:
          "進行交易時，確實比對貨品規格是否符合，並留下對方真實姓名(最好記下身分證字號)、聯絡方式，務必確認完整再行付款，以免產生糾紛。",
        TextThree: "建議用網站匯款方式進行交易，較有保障。",
      },
    };
  },
};
</script>

<style lang="scss">
.products {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;

  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 3rem 12rem;
    margin-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 1600px) {
      padding: 3rem 10rem;
    }
    @media screen and (max-width: 1500px) {
      padding: 3rem 6rem;
    }
    @media screen and (max-width: 1400px) {
      padding: 3rem 2rem;
    }
  }

  &_breadcrumb {
    margin-bottom: 4rem;
    display: flex;
    gap: 1.5rem;

    font-size: 1.25rem;

    span:first-child a {
      color: var(--primary-blue);
      text-decoration: underline;
      text-underline-offset: 4px;
      // text-decoration-thickness: 2px;
    }
  }

  &_content {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 1.5rem;

    .block {
      width: 8px;
      height: 26px;
      background-color: var(--primary-blue);
    }

    .icon {
      display: flex;
      align-items: center;
    }
  }

  &_main_header_category,
  &_aside_search_title,
  &_aside_tags_title {
    display: flex;
    gap: 1.5rem;
    padding-bottom: 1rem;
    font-size: 1.25rem;
  }

  &_aside_search_title,
  &_aside_tags_title {
    border-bottom: 2px solid var(--secondary-gray-2);
    font-weight: 500;
    letter-spacing: 6px;
  }

  //商品詳情
  .product_main {
    &_detail {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      &_pic {
        width: 60%;
        display: flex;
        flex-direction: column;
        padding-left: 2rem;
        justify-content: space-between;
        &_all {
          width: 100%;
          display: flex;
          // padding-top: 1rem;
          gap: 0.75rem;
          &_small {
            width: 25%;
            & img {
              width: 100%;
              display: block;
            }
          }
        }
      }
      &_content {
        width: 80%;
        margin-left: 2rem;
        &_title {
          padding-bottom: 2rem;
          & span {
            color: var(--primary-black);
            font-size: 2rem;
            font-weight: 500;
            letter-spacing: 1.5px;
          }
        }
        &_body {
          color: var(--secondary-gray-1);
          padding: 0.75rem 0.75rem 0.75rem 0;
          border-bottom: 2px solid var(--secondary-gray-2);
          letter-spacing: 1.5px;
        }
      }
      .detail_footer {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        .detail_price {
          font-weight: 500;
          letter-spacing: 1.5px;
          font-size: 1.75rem;
          color: var(--error-red);
          padding-top: 3rem;
        }
        & button {
          width: 150px;
          height: 50px;
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 3px;
          border-radius: var(--round);
          color: #ffffff;
          background-color: var(--error-yellow);
          transition: all 0.2s ease-in-out;
        }
        & button:hover {
          background-color: var(--error-red);
        }
      }
    }
  }

  //留言板
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
      &_all {
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
            & span {
              margin-right: 0.5rem;
              color: var(--secondary-gray-3);
              cursor: pointer;
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
          width: 96%;
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
        & textarea:focus {
          background-color: var(--pale-white);
          outline: 2px solid var(--secondary-blue-1);
        }
      }
      & button {
        width: 150px;
        height: 50px;
        display: block;
        background-color: var(--primary-blue);
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: 6px;
        border-radius: var(--round);
        border: none;
        margin-left: auto;
        margin-top: 2rem;
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
        & span {
          font-size: 2rem;
          position: relative;
          top: 0;
          color: var(--primary-blue);
        }
      }
      &_text {
        width: 85%;
        background-color: #fff;
        padding: 2rem;
        border-radius: var(--round);
        &_title {
          font-size: 1.25rem;
          color: var(--error-red);
          font-weight: 500;
        }
        &_detail {
          margin-top: 1rem;
          color: var(--secondary-gray-1);
        }
      }
    }
  }
}
</style>
