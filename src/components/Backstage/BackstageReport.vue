<template>
  <div class="Report">
    <div class="Report_window">
      <!-- 視窗header -->
      <div class="Report_window_header">
        <div class="Report_window_header_title">檢舉內容</div>
        <div class="Report_window_header_search">
          <input type="text" placeholder="搜尋" v-model="searchText" />
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
      <!-- 表格 -->
      <div class="Report_table">
        <table class="Report_table_form">
          <!-- 表頭 -->
          <tr class="table_row">
            <td class="table_row_number">會員編號</td>
            <td class="table_row_name">會員姓名</td>
            <td class="table_row_type">
              檢舉類別
              <button class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_reason">
              舉發事由
              <button class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_link">連結</td>

            <td class="table_row_points">
              違規記點
              <button class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_blockade">
              直接封鎖
              <button class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
          </tr>
          <!-- 資料內容 -->
          <tr
            v-for="(item, index) in ReportList"
            :key="index"
            class="table_row"
          >
            <td class="table_row_number">{{ convertFont(item.Number) }}</td>
            <td class="table_row_name">{{ convertFont(item.Name) }}</td>
            <td class="table_row_type">
              {{ convertFont(item.Type) }}
            </td>
            <td class="table_row_reason">{{ convertFont(item.Reason) }}</td>
            <td class="table_row_link">{{ convertFont(item.Link) }}</td>
            <td class="table_row_points">
              {{ convertFont(item.Points) }}
            </td>
            <td class="table_row_blockade">
                <input type="checkbox" v-model="Blockade" name="Blockade" :value=index>
              {{ convertFont(item.Blockade) }}
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
      Report: [
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: true,
        },
      ],
      Blockade: [], //給V-model的陣列
    };
  },
  computed: {
    ReportList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.Report.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
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
    // focuscheckChange(item) {
    //   //焦點商品checkbox切換
    //   item.ProductsFocus = !item.ProductsFocus;
    // },
    // topcheckChange(item) {
    //   //TOP商品checkbox切換
    //   item.ProductsTop = !item.ProductsTop;
    // },
    pageup() {
      if (this.page != 1) {
        //往上換頁
        this.page--;
      }
    },
    pagedown() {
      //往下換頁
      if (this.page < this.Report.length / this.perPage) {
        // console.log("陣列長度", this.Products.length / this.perPage);
        this.page++;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.Report {
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
    .Report_table {
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
          //   個別欄位設定
          &_number {
            width: 10%;
          
          }
          &_name {
            width: 10%;
            
          }
          &_type {
            width: 10%;
          }
          &_reason {
            width: 10%;
          }
          &_link {
            width: 20%;
          }
          &_points {
            width: 10%;
          }
          &_blockade {
            width: 10%;
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

//球隊留言
</style>
