<template>
  <main class="products">
    <div class="wrapper">
      <section class="products_breadcrumb">
        <span>
          <router-link to="/products">拍賣專區</router-link>
        </span>
        <div class="icon">
          <img
            src="~@/assets/images/icons/arrow-right.png"
            alt="breadcrumb arrow"
          />
        </div>
        <span>商品詳情</span>
      </section>

      <section class="products_content">
        <aside class="products_aside">
          <ProductsAsideSearch @filterProducts="filterByInput" />
          <ProductsAsideTags @filterProducts="filterByTag" />
        </aside>

        <main class="products_main">
          <ProductsMainItem />
          <ProductsMainItemMsg />
        </main>
      </section>
    </div>
  </main>
</template>

<script>
import ProductsAsideSearch from "@/components/products/productsAside/ProductsAsideSearch";
import ProductsAsideTags from "@/components/products/productsAside/ProductsAsideTags";
import ProductsMainItem from "@/components/products/productsItem/ProductsMainItem";
import ProductsMainItemMsg from "@/components/products/productsItem/ProductsMainItemMsg";
import productTags from "@/composables/productTags";

export default {
  components: {
    ProductsAsideSearch,
    ProductsAsideTags,
    ProductsMainItem,
    ProductsMainItemMsg,
  },

  data() {
    return {};
  },

  methods: {
    // 搜尋欄過濾
    filterByInput(input) {
      this.$router.push({
        name: "products",
        query: { search: input },
      });
    },

    // tag 過濾
    filterByTag(type) {
      this.$router.push({
        name: "products",
        query: { tag: type },
      });
    },
  },
};
</script>

<style lang="scss">
.products {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  padding-top: 10rem;

  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 3rem 12rem;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    margin: auto;
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

  // 商品詳情
  // .product_main {
  //   &_detail {
  //     width: 100%;
  //     display: flex;
  //     flex-direction: row;
  //     justify-content: center;
  //     &_pic {
  //       width: 60%;
  //       display: flex;
  //       flex-direction: column;
  //       padding-left: 2rem;
  //       &_all {
  //         width: 100%;
  //         display: flex;
  //         padding-top: 1rem;
  //         gap: 0.75rem;
  //         &_small {
  //           width: 25%;
  //           & img {
  //             width: 100%;
  //           }
  //         }
  //       }
  //     }
  //     &_content {
  //       width: 80%;
  //       margin-left: 2rem;
  //       &_title {
  //         padding-bottom: 2rem;
  //         & span {
  //           color: var(--primary-black);
  //           font-size: 2rem;
  //           font-weight: 500;
  //           letter-spacing: 1.5px;
  //         }
  //       }
  //       &_body {
  //         color: var(--secondary-gray-1);
  //         padding: 0.75rem 0.75rem 0.75rem 0;
  //         border-bottom: 1px solid var(--secondary-gray-3);
  //         letter-spacing: 1.5px;
  //       }
  //     }
  //     .detail_footer {
  //       display: flex;
  //       align-items: flex-end;
  //       justify-content: space-between;
  //       .detail_price {
  //         font-weight: 500;
  //         letter-spacing: 1.5px;
  //         font-size: 1.75rem;
  //         color: var(--error-red);
  //         padding-top: 3rem;
  //       }
  //       & button {
  //         width: 150px;
  //         height: 50px;
  //         font-size: 1.25rem;
  //         font-weight: 500;
  //         letter-spacing: 6px;
  //         border-radius: var(--round);
  //         color: #ffffff;
  //         background-color: var(--error-yellow);
  //         transition: all 0.2s ease-in-out;
  //       }
  //       & button:hover {
  //         background-color: var(--error-red);
  //       }
  //     }
  //   }
  // }

  // 留言板
  // .product_message {
  //   padding: 2rem;
  //   padding-right: 0;
  //   &_title {
  //     width: 100%;
  //     display: flex;
  //     gap: 1.5rem;
  //     padding: 2rem 0 2rem 0;
  //     border-bottom: 2px solid var(--secondary-gray-2);
  //     font-weight: 500;
  //     letter-spacing: 6px;
  //     font-size: 1.25rem;
  //     &_block {
  //       width: 8px;
  //       height: 26px;
  //       background-color: var(--primary-blue);
  //     }
  //   }
  //   &_area {
  //     width: 100%;
  //     &_all {
  //       display: flex;
  //       padding: 4rem 0 1rem 0;
  //       border-bottom: 2px solid var(--secondary-gray-2);
  //       &_pic {
  //         width: 6rem;
  //         position: relative;
  //         &_user {
  //           width: 100%;
  //         }
  //         &_mark {
  //           position: absolute;
  //           top: -26px;
  //           left: 0px;
  //         }
  //       }
  //       &_text {
  //         width: 100%;
  //         display: flex;
  //         flex-direction: column;
  //         margin-left: 2rem;
  //         &_name {
  //           font-size: 1.25rem;
  //         }
  //         &_all {
  //           margin-top: 1rem;
  //           color: var(--secondary-gray-1);
  //         }
  //         &_date {
  //           margin-top: 4rem;
  //           text-align: right;
  //           color: var(--secondary-gray-1);
  //           font-size: 0.875rem;
  //           & img {
  //             margin-right: 1rem;
  //           }
  //         }
  //       }
  //     }
  //   }
  //   &_importing {
  //     width: 100%;
  //     display: flex;
  //     padding: 4rem 0 4rem 0;
  //     &_user_pic {
  //       width: 6rem;
  //       & img {
  //         width: 100%;
  //       }
  //     }
  //     &_text {
  //       width: 100%;
  //       & textarea {
  //         width: 90%;
  //         display: block;
  //         margin: 0 2rem 0 2rem;
  //         min-height: 192px;
  //         font-size: 1rem;
  //         padding: 1rem;
  //         background-color: var(--secondary-blue-4);
  //         border-radius: var(--round);
  //         border: none;
  //         &::placeholder {
  //           color: var(--secondary-gray-3);
  //         }
  //       }
  //     }
  //     & button {
  //       width: 150px;
  //       height: 50px;
  //       display: block;
  //       background-color: var(--primary-blue);
  //       color: #fff;
  //       font-size: 1.25rem;
  //       font-weight: 500;
  //       letter-spacing: 6px;
  //       border-radius: var(--round);
  //       border: none;
  //       margin-left: auto;
  //       margin-top: 2rem;
  //       margin-right: 2rem;
  //     }
  //   }
  //   &_notice {
  //     width: 100%;
  //     display: flex;
  //     justify-content: space-evenly;
  //     background-color: var(--secondary-blue-3);
  //     border-radius: var(--round);
  //     padding: 3rem 1rem;
  //     margin-bottom: 2rem;
  //     &_icon {
  //       width: 5%;
  //       & img {
  //         width: 100%;
  //       }
  //     }
  //     &_text {
  //       width: 85%;
  //       background-color: #fff;
  //       padding: 2rem;
  //       border-radius: var(--round);
  //       &_title {
  //         font-size: 1.25rem;
  //         color: var(--error-red);
  //       }
  //       &_detail {
  //         margin-top: 1rem;
  //         color: var(--secondary-gray-1);
  //       }
  //     }
  //   }
  // }
}
</style>
