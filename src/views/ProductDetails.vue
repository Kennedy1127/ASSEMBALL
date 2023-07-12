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
}
</style>
