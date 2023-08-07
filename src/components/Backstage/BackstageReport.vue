<template>
  <div class="Report">
    <div class="Report_window">
      <!-- 視窗header -->
      <div class="Report_window_header">
        <div class="Report_window_header_title">檢舉內容</div>
        <button class="icon_reset" @click="Reset">
          <font-awesome-icon icon="fa-solid fa-rotate-right" />
        </button>
        <div class="Report_window_header_search">
          <input type="text" placeholder="搜尋" v-model="SearchText" />
          <button class="icon" @click="updateSearch">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
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
              <ul class="table_row_type_menu" v-if="TypeMenuShow">
                <li
                  v-for="(item, index) in TypeArray"
                  :key="index"
                  @click="updateType(item.Type)"
                >
                  {{ item.Type }}
                </li>
              </ul>
              檢舉類別
              <button @click="TypeMenu" class="table_row_menu" ref="Type">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_reason">
              <ul class="table_row_reason_menu" v-if="ReasonMenuShow">
                <li
                  v-for="(item, index) in ReasonArray"
                  :key="index"
                  @click="updateReason(item.Reason)"
                >
                  {{ item.Reason }}
                </li>
              </ul>
              舉發事由
              <button @click="ReasonMenu" class="table_row_menu" ref="Reason">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_link">連結</td>

            <td class="table_row_points">
              <ul class="table_row_points_menu" v-if="PointsMenuShow">
                <li
                  v-for="(item, index) in PointsArray"
                  :key="index"
                  @click="updatePoints(item.Points)"
                >
                  {{ item.Points }}
                </li>
              </ul>
              違規記點
              <button @click="PointsMenu" class="table_row_menu" ref="Points">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_blockade">
              <ul class="table_row_blockade_menu" v-if="BlockadeMenuShow">
                <li
                  v-for="(item, index) in BlockadeArray"
                  :key="index"
                  @click="updateBlockade(item.Blockade)"
                >
                  {{ item.Blockade }}
                </li>
              </ul>
              直接封鎖
              <button @click="BlockadeMenu" class="table_row_menu" ref="Blockade">
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
              <input
                type="checkbox"
                v-model="item.Blockade"
                name="Blockade"
                :value="index"
              />
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
          Blockade: false,
        },
        {
          Number: "001",
          Name: "阿狗",
          Type: "商品",
          Reason: "商品不實",
          Link: "####################",
          Points: 2,
          Blockade: false,

        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "徵人文章",
          Reason: "垃圾文章",
          Link: "####################",
          Points: 3,
          Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "垃圾內容",
          Link: "####################",
          Points: 1,
          Blockade: false,

        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "垃圾廣告",
          Link: "####################",
          Points: 1,
          Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
          Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
        {
          Number: "001",
          Name: "楊佩蓉",
          Type: "留言",
          Reason: "辱罵他人",
          Link: "####################",
          Points: 1,
            Blockade: false,
        },
      ],

      TypeArray: [], //臨時陣列
      ReasonArray: [],
      PointsArray: [],
      BlockadeArray:[],

      TypeMenuShow: false, //控制下拉式選單
      ReasonMenuShow: false,
      PointsMenuShow: false,
      BlockadeMenuShow:false,

      currentType: 0, //當前篩選檢舉類型
      currentReason: 0,
      currentPoints: 0,
      currentBlockade:0,
      currentSearch:"",
    };
  },
  computed: {
    ReportFilterType() {
      
      if (this.currentType == 0) return this.Report;
      return this.Report.filter(
        (v) => v.Type == this.currentType
      );
    },

    ReportFilterReason() {
      if (this.currentReason == 0) return this.ReportFilterType;
      return this.ReportFilterType.filter(
        (v) => v.Reason == this.currentReason
      );
    },
    ReportFilterPoints() {
      if (this.currentPoints == 0) return this.ReportFilterReason;
      return this.ReportFilterReason.filter(
        (v) => v.Points == this.currentPoints
      );
    },
    ReportFilterBlockade() {
      if (this.currentBlockade === 0) return this.ReportFilterPoints;
      return this.ReportFilterPoints.filter(
        (v) => v.Blockade == this.currentBlockade
      );
    },
    ReportFilterSearch() {
      if (this.currentSearch == "") return this.ReportFilterBlockade;
      return this.ReportFilterBlockade.filter(
        (v) => v.Name.includes(this.currentSearch)
      );
    },

    ReportList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.ReportFilterSearch.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  methods: {
    TypeMenu() {
      const TypeSet = new Set(this.Report.map((item) => item.Type)); //Set
      this.TypeArray = Array.from(TypeSet).map((item) => ({ Type: item }));
      this.TypeMenuShow = !this.TypeMenuShow;
    },
    ReasonMenu() {
      const ReasonSet = new Set(this.Report.map((item) => item.Reason)); //Set
      this.ReasonArray = Array.from(ReasonSet).map((item) => ({ Reason: item }));
      this.ReasonMenuShow = !this.ReasonMenuShow;
    },
    PointsMenu() {
      const PointsSet = new Set(this.Report.map((item) => item.Points)); //Set
      this.PointsArray = Array.from(PointsSet).map((item) => ({ Points: item }));
      this.PointsMenuShow = !this.PointsMenuShow;
    },
    BlockadeMenu() {
      const BlockadeSet = new Set(this.Report.map((item) => item.Blockade)); //Set
      this.BlockadeArray = Array.from(BlockadeSet).map((item) => ({ Blockade: item }));
      this.BlockadeMenuShow = !this.BlockadeMenuShow;
    },
    convertFont(str) {
      //限制資料字數
      if (str.length > 10) {
        return str.slice(0, 10) + "...";
      } else {
        return str;
      }
    },
    CloseMenu(e) {
      if (e.target.closest(".table_row_menu") === this.$refs.Type) {
        this.TypeMenuShow = true;
      } else if (e.target.closest(".table_row_menu") === this.$refs.Reason) {
        this.ReasonMenuShow = true;
      } else if (e.target.closest(".table_row_menu") === this.$refs.Points) {
        this.PointsMenuShow = true;
      } else if (e.target.closest(".table_row_menu") === this.$refs. Blockade) {
        this. BlockadeMenuShow = true;
      } 
      
      
      else {
        this.TypeMenuShow = false;
        this.ReasonMenuShow = false;
        this.PointsMenuShow = false;
        this. BlockadeMenuShow = false;

      }
    },
 
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
    updateType(e) {
      this.currentType = e;
    },
    updateReason(e) {
      this.currentReason = e;
    },
    updatePoints(e) {
      this.currentPoints = e;
    },
    updateBlockade(e) {
      this.currentBlockade = e;
    },
    updateSearch(){
      this.currentSearch=this.SearchText;
      this.SearchText="";
    },
    Reset(){
      this.currentType = 0;
      this.currentReason = 0;
      this.currentPoints = 0;
      this.currentBlockade = 0;
      this.currentSearch="";
    }
  },
  mounted(){
    window.addEventListener("click", this.CloseMenu); //監聽如果任意位置有被點擊觸發CloseMenu

  }
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
      position: relative;
      &_title {
        //視窗header標題
        font-size: 2.5rem;
        font-weight: 400;
        margin-left: 2rem;
      }
      .icon_reset {
        font-size: 1.5rem;
        color: var(--primary-black);
        position: absolute;
        top: 2rem;
        width: 2rem;
        height: 2rem;
        background-color: var(--primary-blue);
        right: 0.5rem;
        cursor: pointer;
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
background-color: var(--pale-white);
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
            position: relative;

            &_menu {
              top: 2rem;
              position: absolute;
              width: 100%;
              background-color: var(--pale-white);
              border-radius: 8px;
              height: 4rem;
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
          &_reason {
            width: 10%;
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
          &_link {
            width: 20%;
          }
          &_points {
            width: 10%;
            position: relative;

            &_menu {
              top: 2rem;
              position: absolute;
              width: 100%;
              background-color: var(--pale-white);
              border-radius: 8px;
              height: 4rem;
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
          &_blockade {
            width: 10%;
            position: relative;

            &_menu {
              top: 2rem;
              position: absolute;
              width: 100%;
              background-color: var(--pale-white);
              border-radius: 8px;
              height: 3rem;
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
