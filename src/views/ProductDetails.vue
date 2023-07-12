<template>
  <main class="products">
    <div class="wrapper">
      <section class="products_breadcrumb">
        <span>
          <router-link to="/">拍賣專區</router-link>
        </span>
        <div class="icon">
          <img
            src="~@/assets/images/icons/arrow-right.png"
            alt="breadcrumb arrow"
          />
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
          <section class="product_detail">
            <div class="detail_pic">
              <img
                src="~@/assets/images/products/productdetail_pic1.png"
                alt="productdetail_pic1"
              />
              <div class="smallpic">
                <img
                  src="~@/assets/images/products/productdetail_smallpic1.png"
                  alt="productdetail_pic1"
                />
                <img
                  src="~@/assets/images/products/productdetail_smallpic1.png"
                  alt="productdetail_pic1"
                />
                <img
                  src="~@/assets/images/products/productdetail_smallpic1.png"
                  alt="productdetail_pic1"
                />
                <img
                  src="~@/assets/images/products/productdetail_smallpic1.png"
                  alt="productdetail_pic1"
                />
              </div>
            </div>
            <div class="detail_content">
              <div class="detail_title">
                <span>{{ productDetail.Title }}</span>
              </div>
              <div
                class="detail_body"
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
            <div class="message_title">
              <div class="block"></div>
              <div>{{ productMessage.Title }}</div>
            </div>
            <div class="message_area">
              <div class="message_all" v-for="item in messageArea" :key="item">
                <div class="user_pic">
                  <img class="mark" src="~@/assets/images/products/mark.png"
                    alt="mark"/> 
                  <img class="user" src="~@/assets/images/products/message_pic01.png"
                  alt="message_pic01"/>  
                </div>
                <div class="message_text">
                  <div class="message_name">{{ item.name }}</div>
                  <div class="message_text_all">{{ item.textAll }}</div>
                  <div class="message_date">
                    <img
                    src="~@/assets/images/products/edit.png"
                    alt="edit"
                    />
                    {{ item.date }}</div>
                </div>
              </div>
            </div>
            <div class="message_importing">
              <div class="user_pic">
                  <img
                  src="~@/assets/images/products/importing_pic.png"
                  alt="importing_pic"
                />
              </div>
              <div class="importing_text">
                <textarea placeholder="請輸入留言內容......" name="comment" form="usrform"></textarea>
                <input type="submit" value="送出" />
              </div>
            </div>
            <div class="notice">
              <div class="notice_icon">
                <img
                  src="~@/assets/images/products/notice.png"
                  alt="notice"
                />
              </div>
              <div class="notice_text">
                <div class="title">{{ noticeText.Title }}</div>
                <div class="text">{{ noticeText.Text }}</div>
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
      productMessage:{
        Title:"留言板" ,
      },
      messageArea: [
        {name:"棒球專家小楊",
         textAll:"小弟這隻是Louisville slugger木棒，打了大約四年，有些地方碎裂許多，基本上不能打硬球QQ....只能打練習場的軟球了。想約打棒球的也可以約起來ʘ‿ʘ",
         date:"留言日期：2023 / 07 / 06"},
        {name:"棒球迷阿真",
         textAll:"你好我有興趣！！",
         date:"留言日期：2023 / 07 / 06"},
      ],
      noticeText:{
        Title:"請注意：",
        Text:"平台僅供會員自由張貼拍賣訊息。進行交易時，確實比對貨品規格是否符合，並留下對方真實姓名(最好記下身分證字號)、聯絡方式，務必確認完整再行付款，以免產生糾紛。建議用網站匯款方式進行交易，較有保障。",
      }
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
  .product_detail {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .detail_pic {
      display: flex;
      flex-direction: column;
      padding-left: 2rem;
      .smallpic {
        display: flex;
        padding-top: 1rem;
        gap: 0.75rem;
      }
    }
  }
  .detail_content {
    width: 80%;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    margin-left: 4rem;
    .detail_title {
      padding-bottom: 2.5rem;
      & span {
        color: var(--primary-black);
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: 1.5px;
      }
    }
    .detail_body {
      color: var(--secondary-gray-1);
      padding: 0.75rem 0.75rem 0.75rem 0;
      border-bottom: 1px solid var(--secondary-gray-3);
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
      font-size: 2rem;
      color: var(--error-red);
      padding-top: 4rem;
    }
    & button {
      font-size: 1.25rem;
      font-weight: 600;
      padding: 0.75rem 3rem;
      border-radius: var(--round);
      color: #ffffff;
      background-color: var(--error-yellow);
      transition: all 0.2s ease-in-out;
    }
    & button:hover {
      background-color: var(--error-red);
    }
  }
  //留言板
  .product_message {
    .message_title{
      width: 96.7%;
      display: flex;
      gap: 1.5rem;
      padding: 2rem 0rem 1.25rem 0rem;
      margin: 2rem 0 0 2rem;
      border-bottom: 2px solid var(--secondary-gray-2);
      font-weight: 500;
      letter-spacing: 6px;
      font-size: 1.25rem;
      & div {
        display: inline-block;
      }
    }
    .message_area {
      width: 100%;
      .message_all {
        display: flex;
        padding: 3rem 0 3rem 0;
        margin-left: 2rem;
        border-bottom: 2px solid var(--secondary-gray-2);
        .user_pic {
          width: 12%;
          position: relative;
          .user {
          width: 100%;
          }
          .mark {
            position: absolute;
            top: -25px;
            left: 5px;
          }
        }
        .message_text {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-left: 2rem;
          .message_name {
            font-size: 1.2rem;
          }
          .message_text_all{
            margin-top: 1rem;
            color: var(--secondary-gray-1);
          }
          .message_date {
            margin-top: 2rem;
            text-align: right;
            color: var(--secondary-gray-1);
            & img {
              margin-right: 1%;
            }
        }
        }
      }
    }
    .message_importing {
      width: 100%;
      display: flex;
      padding: 3rem 0 3rem 2rem;
      .importing_text {
        width: 100%;
        & textarea {
          display: block;
          width: 90%;
          min-height: 200px;
          margin-left: 2rem;
          font-size: 1rem;
          padding: 1rem;
          background-color: var(--secondary-blue-4);
          border-radius: var(--round);
          border: none;
          &::placeholder {
            color: var(--secondary-gray-3);
          }
        }
        & input {
          display: block;
          margin-left: auto;
          margin-right: 3rem;
          margin-top: 2rem;
          width: 150px;
          height: 50px;
          background-color: var(--primary-blue);
          color: #fff;
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 6px;
          border-radius: var(--round);
          border: none;
        }
      }
    }
    .notice {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      background-color: var(--secondary-blue-3);
      border-radius: var(--round);
      padding: 3rem 1rem;
      margin-bottom: 4rem;
      .notice_icon {
        width: 5%;
        & img {
          width: 100%;
        }
      }
      .notice_text {
        width: 85%;
        background-color: #fff;
        padding: 2rem;
        border-radius: var(--round);
        .title {
          font-size: 1.25rem;
          color: var(--error-red);
        }
        .text {
          margin-top: 1rem;
          color: var(--secondary-gray-1);
        }
      }
    }

  }
}
</style>
