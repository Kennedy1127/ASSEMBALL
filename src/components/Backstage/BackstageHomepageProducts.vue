<template>
  <div class="HomepageProducts">
    <div class="HomepageProducts_window">
      <!-- 視窗header -->
      <div class="HomepageProducts_window_header">
        <div class="HomepageProducts_window_header_title">商品清單</div>
        <div class="HomepageProducts_window_header_search">
          <input type="text" placeholder="搜尋" v-model="searchText" />
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
      <!-- 表格 -->
      <div class="HomepageProducts_table">
        <table class="HomepageProducts_table_form">
          <!-- 表頭 -->
          <tr class="table_row">
            <td class="table_row_name">品名</td>
            <td class="table_row_price">
              價格
              <button class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_type">
              商品種類
              <button class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_data">
              上架日期
              <button class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_focus">焦點商品 1/5</td>
            <td class="table_row_top">TOP商品 1/3</td>
          </tr>
          <!-- 資料內容 -->
          <tr v-for="item in ProductsList" :key="index" class="table_row">
            <td class="table_row_name">{{ convertFont(item.ProductsName) }}</td>
            <td class="table_row_price">
              {{ convertFont(item.ProductsPrice) }}
            </td>
            <td class="table_row_type">{{ convertFont(item.ProductsType) }}</td>
            <td class="table_row_data">{{ convertFont(item.ProductsData) }}</td>
            <td class="table_row_focus">
              {{ convertFont("上架") }}
              <input
                type="checkbox"
                :checked="item.ProductsFocus"
                @click="focuscheckChange(item)"
              />
            </td>

            <td class="table_row_top">
              {{ item.ProductsFocus }}
           
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      perPage: 10,
      Products: [
        {
          ProductsName: "二手白樺木球棒",
          ProductsPrice: "2400",
          ProductsType: "球棒",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手手套",
          ProductsPrice: "2000",
          ProductsType: "手套",
          ProductsData: "2023/07/04",
          ProductsFocus: false,
          ProductsTop: false,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsData: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
      ],
    };
  },
  computed: {
    ProductsList() {
     
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.Products.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
     
    },
    aaa() {}
  },
  methods: {
    convertFont(str) {
      //限制資料字數
      if (str.length > 10) {
        return str.slice(0, 10) + "...";
      } else {
        return str;
      }
    },
    focuscheckChange(item) {
      //控制checkbox
      item.ProductsFocus = !item.ProductsFocus;
    },
    // pageup() {
    //   if (this.page != 1) {
    //     this.page--;
    //   }
    // },
    // pagedown() {
    //   if (this.page != this.teaching.length / this.perPage) {
    //     console.log("陣列長度", this.teaching.length / this.perPage);
    //     this.page++;
    //   }
    // },
  },
};
</script>
<style scoped lang="scss">
.HomepageProducts {
  width: 100%;
  padding: 10rem;
  &_window {
    width: 100%;
    height: 853px;
    background-color: var();
    border: var(--primary-black) solid;
    .HomepageProducts_window {
      &_header {
        padding: 1rem;
        width: 100%;
        background-color: var(--primary-blue);
        height: 111px;
        border-bottom: var(--primary-black) solid;
        display: flex;
        justify-content: space-between;
        &_title {
          font-size: 2.5rem;
          font-weight: 400;
          margin-left: 2rem;
        }
        &_search {
          position: relative;
          margin-right: 2rem;
          input {
            width: 200px;
            border: var(--secondary-blue-2) solid;
            padding: 1rem;
            height: 63px;
            border-radius: var(--round);
            background-color: var(--secondary-blue-4);
            font-size: 1.25rem;
            font-weight: 400;
          }
          input:focus {
            background-color: var(--pale-white);
            outline: 2px solid var(--secondary-blue-1);
          }

          .icon {
            font-size: 1.5rem;
            color: var(--primary-blue);
            position: absolute;
            top: 40%;
            right: 1.25rem;
            transform: translateY(-50%);

            pointer-events: none;
          }
        }
      }
    }
    .HomepageProducts_table {
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 2rem;
      &_form {
        width: 100%;

        border-collapse: collapse;
        .table_row {
          // display: flex;
          width: 100%;
          td {
            white-space: nowrap; /* 不换行 */
            overflow: hidden; /* 超出部分隐藏 */
            text-overflow: ellipsis; /* 显示省略号 */
            border: var(--primary-black) solid;
            background-color: var(--secondary-blue-2);
            text-align: center;
            font-size: 1rem;
            height: 2rem;
            button {
              background-color: var(--secondary-blue-2);
              color: var(--primary-blue);
            }
          }
          &_name {
            width: 20%;
          }
          &_price {
            width: 15%;
          }
          &_type {
            width: 20%;
          }
          &_data {
            width: 15%;
          }
          &_focus {
            width: 15%;
          }
          &_top {
            width: 15%;
          }
        }
      }
    }
  }
}
</style>
