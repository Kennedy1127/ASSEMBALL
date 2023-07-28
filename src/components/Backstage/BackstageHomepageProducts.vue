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
              <ul class="table_row_price_menu" v-if="PriceMenuShow">
                <li
                  v-for="(item, index) in PriceArray"
                  :key="index"
                  @click="updatePrice(item.Price)"
                >
                  {{ item.Price }}
                </li>
              </ul>

              價格
              <button @click="PriceMenu" class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_type">
              <ul class="table_row_type_menu" v-if="TypeMenuShow">
                <li
                  v-for="(item, index) in TypeArray"
                  :key="index"
                  @click="updateType(item.Type)"
                >
                  {{ item.Type }}
                </li>
              </ul>
              商品種類
              <button @click="TypeMenu" class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_date">
              <ul class="table_row_date_menu" v-if="DateMenuShow">
                <li
                  v-for="(item, index) in DateArray"
                  :key="index"
                  @click="updateDate(item.Date)"
                >
                  {{ item.Date }}
                </li>
              </ul>
              上架日期
              <button @click="DateMenu" class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_focus">焦點商品 1/5</td>
            <td class="table_row_top">TOP商品 1/3</td>
          </tr>
          <!-- 資料內容 -->
          <tr
            v-for="(item, index) in ProductsList"
            :key="index"
            class="table_row"
          >
            <td class="table_row_name">{{ convertFont(item.ProductsName) }}</td>
            <td class="table_row_price">
              {{ convertFont(item.ProductsPrice) }}
            </td>
            <td class="table_row_type">{{ convertFont(item.ProductsType) }}</td>
            <td class="table_row_date">{{ convertFont(item.ProductsDate) }}</td>
            <td class="table_row_focus">
              {{ convertFont("上架") }}
              <!-- <input
                type="checkbox"
                :checked="item.ProductsFocus"
                @click="focuscheckChange(item)"
              /> -->
              <input
                type="checkbox"
                v-model="focusProduct"
                name="focusProduct"
                :value="index"
              />
            </td>
            <td class="table_row_top">
              {{ item.ProductsFocus }}
            </td>
          </tr>
        </table>
        <button class="btn_up" @click="pageup">
          <font-awesome-icon icon="fa-solid fa-angle-up" />
        </button>
        <button class="btn_down" @click="pagedown">
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </button>
        <button class="btn_send">送出</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      perPage: 17,
      Products: [
        {
          ProductsName: "二手白樺木球棒",
          ProductsPrice: "2400",
          ProductsType: "球棒",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手手套",
          ProductsPrice: "2000",
          ProductsType: "手套",
          ProductsDate: "2023/08/04",
          ProductsFocus: false,
          ProductsTop: false,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "1400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/14",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2500",
          ProductsType: "球褲",
          ProductsDate: "2023/07/24",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手打擊頭盔",
          ProductsPrice: "2700",
          ProductsType: "頭盔",
          ProductsDate: "2023/07/11",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手捕手護具",
          ProductsPrice: "2900",
          ProductsType: "護具",
          ProductsDate: "2023/07/05",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2422",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "24400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/09",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2420",
          ProductsType: "球褲",
          ProductsDate: "2023/07/24",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2850",
          ProductsType: "球褲",
          ProductsDate: "2023/08/14",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2100",
          ProductsType: "球褲",
          ProductsDate: "2023/08/08",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "1400",
          ProductsType: "球褲",
          ProductsDate: "2023/08/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "4400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "24400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
        {
          ProductsName: "二手球褲",
          ProductsPrice: "2400",
          ProductsType: "球褲",
          ProductsDate: "2023/07/04",
          ProductsFocus: true,
          ProductsTop: true,
        },
      ],

      PriceArray: [], //價格種類陣列(存放每一種價格並排除重複的)
      TypeArray: [], //商品類型陣列
      DateArray: [],

      PriceMenuShow: false, //切換是否顯示下拉式選單
      TypeMenuShow: false,
      DateMenuShow: false,

      currentPrice: 0, //當前篩選價格
      currentType: 0, //當前篩選類型
      currentDate: 0,

      focusProduct: [], //給V-model的陣列
    };
  },
  computed: {
    productFilterPrice() {
      //篩選價格
      if (this.currentPrice == 0) return this.Products; //還沒篩選時回傳所有資料
      return this.Products.filter((v) => v.ProductsPrice == this.currentPrice); //篩選現在點擊到的價格
    },
    productFilterType() {
      //篩選類型如果沒選的話會去抓價格的資料
      if (this.currentType == 0) return this.productFilterPrice;
      return this.productFilterPrice.filter(
        (v) => v.ProductsType == this.currentType
      );
    },
    productFilterDate() {
      //篩選日期
      if (this.currentDate == 0) return this.productFilterType;
      return this.productFilterType.filter(
        (v) => v.ProductsDate == this.currentDate
      );
    },

    ProductsList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.productFilterDate.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
    // priceList() {//下拉式選單(相同項目只顯示一次)(無法排除相同資料先不用)
    //   // const allPrice = this.Products.map((v) => v.ProductsPrice);
    //   const allPrice = this.Products.map((item) =>({ Price:item.ProductsPrice}));
    //   // return allPrice.filter((v, i) => allPrice.indexOf(v) === i);
    // },
  },
  methods: {
    PriceMenu() {
      const PricesSet = new Set( //新增一個set並將Products內每個項目的價格放入
        this.Products.map((item) => item.ProductsPrice)
      );
      this.PriceArray = Array.from(PricesSet).map((item) => ({ Price: item })); //將set資料放進陣列
      this.PriceMenuShow = !this.PriceMenuShow;
    },
    TypeMenu() {
      const TypeSet = new Set(this.Products.map((item) => item.ProductsType)); //用set篩掉重複的type
      this.TypeArray = Array.from(TypeSet).map((item) => ({ Type: item }));
      this.TypeMenuShow = !this.TypeMenuShow;
    },
    DateMenu() {
      const DateSet = new Set(this.Products.map((item) => item.ProductsDate)); //Set
      this.DateArray = Array.from(DateSet).map((item) => ({ Date: item }));
      this.DateMenuShow = !this.DateMenuShow;
    },

    convertFont(str) {
      //限制資料字數
      if (str.length > 10) {
        return str.slice(0, 10) + "...";
      } else {
        return str;
      }
    },
    focuscheckChange(item) {
      //焦點商品checkbox切換
      item.ProductsFocus = !item.ProductsFocus;
    },
    topcheckChange(item) {
      //TOP商品checkbox切換
      item.ProductsTop = !item.ProductsTop;
    },
    pageup() {
      if (this.page != 1) {
        //往上換頁
        this.page--;
      }
    },
    pagedown() {
      //往下換頁
      if (this.page < this.Products.length / this.perPage) {
        // console.log("陣列長度", this.Products.length / this.perPage);
        this.page++;
      }
    },
    updatePrice(price) {
      //把currentPrice改成PriceArray對應項目的price
      this.currentPrice = price;
    },
    updateType(e) {
      //把currentType改成PriceArray對應項目的Type
      this.currentType = e;
    },
    updateDate(e) {
      //把currentDate改成DateArray對應項目的Date
      this.currentDate = e;
    },
  },

  mounted() {
    // 初始化內容
  },
};
</script>

<style scoped lang="scss">
.HomepageProducts {
  width: 100%;
  padding: 10rem;
  &_window {
    //視窗
    width: 100%;
    height: 853px;
    background-color: var();
    border: var(--primary-black) solid;

    &_header {
      //視窗header
      padding: 1rem;
      width: 100%;
      background-color: var(--primary-blue);
      height: 111px;
      border-bottom: var(--primary-black) solid;
      display: flex;
      justify-content: space-between;
      &_title {
        //視窗header標題
        font-size: 2.5rem;
        font-weight: 400;
        margin-left: 2rem;
      }
      &_search {
        //視窗header搜尋
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
    .HomepageProducts_table {
      //表格
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 5rem;
      &_form {
        width: 100%;
        border-collapse: collapse;
        .table_row {
          //表格橫排

          width: 100%;
          //表格欄位設定
          td {
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
          //個別欄位設定
          &_name {
            width: 20%;
          }
          &_price {
            width: 15%;
            position: relative;

            &_menu {
              top: 2rem;
              position: absolute;
              width: 100%;
              background-color: var(--pale-white);
              border-radius: 8px;
              height: 7rem;
              overflow: scroll;
              overflow-x: hidden;
              z-index: 1;
              li {
                padding: 0.1rem;
              }
              li:hover {
                cursor: pointer;
                background-color: var(--secondary-gray-2);
              }
            }
          }
          &_type {
            width: 20%;
            position: relative;
            &_menu {
              top: 2rem;
              position: absolute;
              width: 100%;
              background-color: var(--pale-white);
              border-radius: 8px;
              height: 7rem;
              overflow: scroll;
              overflow-x: hidden;
              z-index: 1;
              li {
                padding: 0.1rem;
              }
              li:hover {
                cursor: pointer;
                background-color: var(--secondary-gray-2);
              }
            }
          }
          &_date {
            width: 15%;
            position: relative;
            &_menu {
              top: 2rem;
              position: absolute;
              width: 100%;
              background-color: var(--pale-white);
              border-radius: 8px;
              height: 7rem;
              overflow: scroll;
              overflow-x: hidden;
              z-index: 1;
              li {
                padding: 0.1rem;
              }
              li:hover {
                cursor: pointer;
                background-color: var(--secondary-gray-2);
              }
            }
          }
          &_focus {
            width: 15%;
          }
          &_top {
            width: 15%;
          }
        }
      }

      .btn_up {
        //往上換頁按鈕
        position: absolute;
        width: 40px;
        height: 40px;
        right: 4rem;
        top: 1rem;
        color: var(--primary-blue);
        font-size: 1.5rem;
        background-color: var(--pale-white);
      }
      .btn_down {
        //往下換頁按鈕
        position: absolute;
        width: 40px;
        height: 40px;
        right: 4rem;
        bottom: 1rem;
        color: var(--primary-blue);
        background-color: var(--pale-white);
        font-size: 1.5rem;
      }
      .btn_send {
        //送出按鈕
        position: absolute;
        width: 107px;
        height: 40px;
        border-radius: 8px;
        background-color: var(--accent-yellow);
        font-size: 1.25rem;
        bottom: 1rem;
        right: 40%;
      }
    }
  }
}
</style>
