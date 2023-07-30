<template>
  <div class="RecruitmentArticle">
    <div class="RecruitmentArticle_window">
      <!-- 視窗header -->
      <div class="RecruitmentArticle_window_header">
        <div class="RecruitmentArticle_window_header_title">徵人文章清單</div>
        <div class="RecruitmentArticle_window_header_search">
          <input type="text" placeholder="搜尋" v-model="searchText" />
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
      <!-- 表格 -->
      <div class="RecruitmentArticle_table">
        <table class="RecruitmentArticle_table_form">
          <!-- 表頭 -->
          <tr class="table_row">
            <td class="table_row_name">球隊名稱</td>
            <td class="table_row_area">
              <ul class="table_row_area_menu" v-if="AreaMenuShow">
                <li
                  v-for="(item, index) in AreaArray"
                  :key="index"
                  @click="updateArea(item.Area)"
                >
                  {{ item.Area }}
                </li>
              </ul>
              地區
              <button @click="AreaMenu" class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_position">
              <ul class="table_row_position_menu" v-if="PositionMenuShow">
                <li
                  v-for="(item, index) in PositionArray"
                  :key="index"
                  @click="updatePosition(item.Position)"
                >
                  {{ item.Position }}
                </li>
              </ul>
              需求位置
              <button @click="PositionMenu" class="table_row_menu">
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
            <td class="table_row_focus">焦點文章 1/5</td>
          </tr>
          <!-- 資料內容 -->
          <tr
            v-for="(item, index) in ArticleList"
            :key="index"
            class="table_row"
          >
            <td class="table_row_name">{{ convertFont(item.Name) }}</td>
            <td class="table_row_area">
              {{ convertFont(item.Area) }}
            </td>
            <td class="table_row_position">{{ convertFont(item.Position) }}</td>
            <td class="table_row_date">{{ convertFont(item.Date) }}</td>
            <td class="table_row_focus">
              {{ convertFont("上架") }}
              <!-- <input
                type="checkbox"
                :checked="item.ProductsFocus"
                @click="focuscheckChange(item)"
              /> -->
              <input
                type="checkbox"
                v-model="focus"
                name="focus"
                :value="index"
              />
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

    <!-- 球隊留言清單 -->
    <div class="TeamMessage_window">
      <!-- 視窗header -->
      <div class="TeamMessage_window_header">
        <div class="TeamMessage_window_header_title">徵人文章清單</div>
        <div class="TeamMessage_window_header_search">
          <input type="text" placeholder="搜尋" v-model="searchText" />
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
      <!-- 表格 -->
      <div class="TeamMessage_table">
        <table class="TeamMessage_table_form">
          <!-- 表頭 -->
          <tr class="table_row">
            <td class="table_row_name">球隊名稱</td>
            <td class="table_row_member">
              留言者
            </td>
            <td class="table_row_date">
              <ul class="table_row_date_menu" v-if="TeamMessageDateMenuShow">
                <li
                  v-for="(item, index) in TeamMessageDateArray"
                  :key="index"
                  @click="updateTeamMessageDate(item.Date)"
                >
                  {{ item.Date }}
                </li>
              </ul>
              上架日期
              <button @click="TeamMessageDateMenu" class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_content">留言內容</td>
            <td class="table_row_focus">焦點文章 1/5</td>
          </tr>
          <!-- 資料內容 -->
          <tr
            v-for="(item, index) in TeamMessageList"
            :key="index"
            class="table_row"
          >
            <td class="table_row_name">{{ convertFont(item.Name) }}</td>
            <td class="table_row_area">
              {{ convertFont(item.Member) }}
            </td>
            <td class="table_row_position">{{ convertFont(item.Date) }}</td>
            <td class="table_row_date">{{ convertFont(item.Content) }}</td>
            <td class="table_row_focus">
              {{ convertFont("上架") }}
              <!-- <input
                type="checkbox"
                :checked="item.ProductsFocus"
                @click="focuscheckChange(item)"
              /> -->
              <input
                type="checkbox"
                v-model="focus"
                name="focus"
                :value="index"
              />
            </td>
          </tr>
        </table>
        <button class="btn_up" @click="TeamMessagePageup">
          <font-awesome-icon icon="fa-solid fa-angle-up" />
        </button>
        <button class="btn_down" @click="TeamMessagePagedown">
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
      TeamMessagePage: 1,
      TeamMessagePerPage: 17,
      Article: [
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台中",
          Position: "補手",
          Date: "2023/07/05",
          Focus: true,
        },

        {
          Name: "烈火鷹",
          Area: "台南",
          Position: "左外野手",
          Date: "2023/07/05",
          Focus: true,
        },

        {
          Name: "烈火鷹",
          Area: "台東",
          Position: "一壘手",
          Date: "2023/07/05",
          Focus: true,
        },

        {
          Name: "烈火鷹",
          Area: "金門",
          Position: "二壘手",
          Date: "2023/07/07",
          Focus: true,
        },

        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "三壘手",
          Date: "2023/08/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "游擊手",
          Date: "2023/12/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "中外野手",
          Date: "2023/07/24",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "右外野手",
          Date: "2023/07/08",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },

        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
        {
          Name: "烈火鷹",
          Area: "台北",
          Position: "投手",
          Date: "2023/07/04",
          Focus: true,
        },
      ],
      TeamMessage: [
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content:
            "留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/05",
          Content:
            "留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/05",
          Content:
            "留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/05",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/05",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/14",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/14",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/14",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/24",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/24",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/24",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/24",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/08",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/08",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/08",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/08",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/08",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/08",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/08",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/08",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/08/04",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/08/04",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "222222222222222222222222222222222",

          Focus: true,
        },
        {
          Name: "烈火鷹",
          Member: "來福",
          Date: "2023/07/04",
          Content: "3333333333333333333333333333容",

          Focus: true,
        },
      ],
      AreaArray: [], //地區種類陣列(存放每一種地區並排除重複的)
      PositionArray:[],
      DateArray:[],

      TeamMessageDateArray:[],

      AreaMenuShow: false, //切換是否顯示下拉式選單
      PositionMenuShow:false,
      DateMenuShow:false,
      TeamMessageDateMenuShow:false,

      currentArea: 0, //當前篩選地區
      currentPosition:0,
      currentDate:0,
      currentTeamMessageDate:0,

      focus: [], //給V-model的陣列
    };
  },
  computed: {
    ArticleFilterArea() {
      //篩選地區
      if (this.currentArea == 0) return this.Article; //還沒篩選時回傳所有資料
      return this.Article.filter((v) => v.Area == this.currentArea); //篩選現在點擊到的地區
    },
    ArticleFilterPosition() {
      //篩選位置
      if (this.currentPosition == 0) return this.ArticleFilterArea; 
      return this.ArticleFilterArea.filter((v) => v.Position == this.currentPosition); //篩選現在點擊到的位置
    },
    ArticleFilterDate() {
      //篩選日期
      if (this.currentDate == 0) return this.ArticleFilterPosition; 
      return this.ArticleFilterPosition.filter((v) => v.Date == this.currentDate); //篩選現在點擊到的日期
    },
    ArticleList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.ArticleFilterDate.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },


    TeamMessageFilterDate() {
      //篩選日期
      if (this.currentTeamMessageDate == 0) return this.TeamMessage; 
      return this.TeamMessage.filter((v) => v.Date == this.currentTeamMessageDate); //篩選現在點擊到的日期
    },


    
    TeamMessageList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.TeamMessageFilterDate.slice(
        (this.TeamMessagePage - 1) * this.TeamMessagePerPage,
        this.TeamMessagePage * this.TeamMessagePerPage
      );
    },
  },
  methods: {
    AreaMenu() {
      const AreaSet = new Set( 
        this.Article.map((item) => item.Area)
      );
      this.AreaArray = Array.from(AreaSet).map((item) => ({ Area: item })); //將set資料放進陣列
      this.AreaMenuShow = !this.AreaMenuShow;
    },
    PositionMenu() {
      const PositionSet = new Set( 
        this.Article.map((item) => item.Position)
      );
      this.PositionArray = Array.from(PositionSet).map((item) => ({ Position: item })); //將set資料放進陣列
      this.PositionMenuShow = !this.PositionMenuShow;
    },
    DateMenu() {
      const DateSet = new Set( 
        this.Article.map((item) => item.Date)
      );
      this.DateArray = Array.from(DateSet).map((item) => ({ Date: item })); //將set資料放進陣列
      this.DateMenuShow = !this.DateMenuShow;
    },
    TeamMessageDateMenu(){
      const TeamMessageDateSet =new Set(
      this.TeamMessage.map((e)=>e.Date)
      );
      this.TeamMessageDateArray =Array.from(TeamMessageDateSet).map((e) =>({Date:e}));
      this.TeamMessageDateMenuShow=!this.TeamMessageDateMenuShow;




    },
    updateArea(a) {
      //把currentArea改成AreaArray對應項目的Area
      this.currentArea = a;
    },
    updatePosition(a) {
      this.currentPosition = a;
    },
    updateDate(a) {
      this.currentDate = a;
    },
    updateTeamMessageDate(a) {
      this.currentTeamMessageDate = a;
    },










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
      if (this.page < this.Article.length / this.perPage) {
        // console.log("陣列長度", this.Products.length / this.perPage);
        this.page++;
      }
    },
    TeamMessagePageup() {
      if (this.TeamMessagePage != 1) {
        //往上換頁
        this.TeamMessagePage--;
      }
    },
    TeamMessagePagedown() {
      //往下換頁
      if (
        this.TeamMessagePage <
        this.TeamMessage.length / this.TeamMessagePerPage
      ) {
        // console.log("陣列長度", this.Products.length / this.perPage);
        this.TeamMessagePage++;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.RecruitmentArticle {
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
    .RecruitmentArticle_table {
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
          &_area {
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
          &_position {
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

//球隊留言

.TeamMessage_window {
  //視窗
  margin-top: 10rem;
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
  .TeamMessage_table {
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
        &_member {
          width: 10%;
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
        &_content {
          width: 30%;
        }
        &_focus {
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
</style>
