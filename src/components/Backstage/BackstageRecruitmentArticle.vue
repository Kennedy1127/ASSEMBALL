<template>
  <div class="RecruitmentArticle">
    <div class="RecruitmentArticle_window">
      <!-- 視窗header -->
      <div class="RecruitmentArticle_window_header">
        <div class="RecruitmentArticle_window_header_title">徵人文章清單</div>
        <button class="icon_reset" @click="Reset">
          <font-awesome-icon icon="fa-solid fa-rotate-right" />
        </button>
        <div class="RecruitmentArticle_window_header_search">
          <input type="text" placeholder="搜尋" v-model="SearchText" />
          <button @click="updateSearch" class="icon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
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
                  @click="updateArea(item.area)"
                >
                  {{ item.area }}
                </li>
              </ul>
              地區
              <button @click="AreaMenu" class="table_row_menu" ref="Area">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_position">
              <ul class="table_row_position_menu" v-if="PositionMenuShow">
                <li
                  v-for="(item, index) in PositionArray"
                  :key="index"
                  @click="updatePosition(item.role)"
                >
                  {{ convertRole(item.role) }}
                </li>
              </ul>
              需求位置
              <button
                @click="PositionMenu"
                class="table_row_menu"
                ref="Position"
              >
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_date">
              <ul class="table_row_date_menu" v-if="DateMenuShow">
                <li
                  v-for="(item, index) in DateArray"
                  :key="index"
                  @click="updateDate(item.date)"
                >
                  {{ item.date }}
                </li>
              </ul>
              上架日期
              <button @click="DateMenu" class="table_row_menu" ref="Date">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_focus">
              <ul class="table_row_focus_menu" v-if="FocusMenuShow">
                <li
                  v-for="(item, index) in FocusArray"
                  :key="index"
                  @click="updateFocus(item.focus)"
                >
                  {{ item.focus }}
                </li>
              </ul>
              焦點文章 {{ focusNum }} /5
              <button @click="FocusMenu" class="table_row_menu" ref="Focus">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
          </tr>
          <!-- 資料內容 -->
          <tr
            v-for="(item, index) in ArticleList"
            :key="item.id"
            class="table_row"
          >
            <td class="table_row_name">
              {{ convertFont(convertTeam(item.team_id)) }}
            </td>
            <td class="table_row_area">
              {{ convertFont(item.area) }}
            </td>
            <td class="table_row_position">
              {{ convertFont(convertRole(item.role)) }}
            </td>
            <td class="table_row_date">
              {{item.date}}
            </td>
            <td class="table_row_focus">
              <input
                v-if="item.focus"
                type="checkbox"
                checked
                @click="handleFocusChange(item, $event)"
                name="Focus"
              />
              <input
                v-else
                type="checkbox"
                @click="handleFocusChange(item, $event)"
                name="Focus"
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
        <button class="btn_send" @click="AddArticle">送出</button>
      </div>
    </div>

    <!-- 球隊留言清單 -->
    <div class="TeamMessage_window">
      <!-- 視窗header -->
      <div class="TeamMessage_window_header">
        <div class="TeamMessage_window_header_title">球隊留言清單</div>
        <button class="icon_reset" @click="TeamMessageReset">
          <font-awesome-icon icon="fa-solid fa-rotate-right" />
        </button>
        <div class="TeamMessage_window_header_search">
          <input
            type="text"
            placeholder="搜尋"
            v-model="TeamMessageSearchText"
          />
          <button class="icon" @click="updateTeamMessageSearch">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      <!-- 表格 -->
      <div class="TeamMessage_table">
        <table class="TeamMessage_table_form">
          <!-- 表頭 -->
          <tr class="table_row">
            <td class="table_row_name">球隊名稱</td>
            <td class="table_row_member">留言者</td>
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
              <button
                @click="TeamMessageDateMenu"
                class="table_row_menu"
                ref="TeamMessageDate"
              >
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_content">留言內容</td>
            <td class="table_row_focus">
              <ul class="table_row_focus_menu" v-if="TeamMessageFocusMenuShow">
                <li
                  v-for="(item, index) in TeamMessageFocusArray"
                  :key="index"
                  @click="updateTeamMessageFocus(item.Focus)"
                >
                  {{ item.Focus }}
                </li>
              </ul>
              焦點文章 {{ TeamMessageFocusNum }} /5
              <button
                @click="TeamMessageFocusMenu"
                class="table_row_menu"
                ref="TeamMessageFocus"
              >
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
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
              <input
                v-if="item.Focus"
                type="checkbox"
                checked
                @click="handleTeamMessageFocusChange(item, $event)"
                name="Focus"
              />
              <input
                v-else
                type="checkbox"
                @click="handleTeamMessageFocusChange(item, $event)"
                name="Focus"
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
        <button class="btn_send" @click="AddTeamMessage">送出</button>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase/config"; //引入data base
import { addDoc, doc, getDoc, addDocs ,updateDoc} from "firebase/firestore";
import roles from "@/composables/tables/roles";
import { collection, query, where, getDocs } from "firebase/firestore";
export default {
  data() {
    return {
      page: 1,
      perPage: 17,
      TeamMessagePage: 1,
      TeamMessagePerPage: 17,
      Article: [],
      TeamMessage: [],
      Teams: [],
      // Article: [
      //   {
      //     Id: "1",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      // ],
      // TeamMessage: [
      //   {
      //     Id: "1",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content:
      //       "留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容",
      //     Focus: false,
      //   },
      // ],
      AreaArray: [], //地區種類陣列(存放每一種地區並排除重複的)
      PositionArray: [],
      DateArray: [],
      FocusArray: [],

      TeamMessageDateArray: [],
      TeamMessageFocusArray: [],

      AreaMenuShow: false, //切換是否顯示下拉式選單
      PositionMenuShow: false,
      DateMenuShow: false,
      FocusMenuShow: false,

      TeamMessageDateMenuShow: false,
      TeamMessageFocusMenuShow: false,

      currentArea: 0, //當前篩選地區
      currentPosition: "",
      currentDate: 0,
      currentFocus: 0,
      currentSearch: "",

      currentTeamMessageDate: 0,
      currentTeamMessageFocus: 0,
      currentTeamMessageSearch: "",
    };
  },
  computed: {
    focusNum() {
      //focus被勾了幾個
      return this.Article.filter((v) => v.focus).length; //返回Article中Focus的項目組成的陣列的長度
    },
    TeamMessageFocusNum() {
      return this.TeamMessage.filter((v) => v.Focus).length;
    },
    ArticleFilterArea() {
      //篩選地區
      if (this.currentArea === 0) return this.Article; //還沒篩選時回傳所有資料
      return this.Article.filter((v) => v.area == this.currentArea); //篩選現在點擊到的地區
    },
    ArticleFilterPosition() {
      //篩選位置
      if (this.currentPosition === "") return this.ArticleFilterArea;
      return this.ArticleFilterArea.filter(
        (v) => v.role == this.currentPosition
      ); //篩選現在點擊到的位置
    },
    ArticleFilterDate() {
      //篩選日期
      if (this.currentDate === 0) return this.ArticleFilterPosition;
      return this.ArticleFilterPosition.filter(
        (v) => v.date == this.currentDate
      ); //篩選現在點擊到的日期
    },
    ArticleFilterFocus() {
      if (this.currentFocus === 0) return this.ArticleFilterDate;
      return this.ArticleFilterDate.filter((v) => v.focus == this.currentFocus);
    },
    ArticleFilterSearch() {
      if (this.currentSearch == "") return this.ArticleFilterFocus;
      return this.ArticleFilterFocus.filter((v) =>
        v.team_id.includes(this.currentSearch)
      );
    },
    ArticleList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.ArticleFilterSearch.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },

    TeamMessageFilterDate() {
      //篩選日期
      if (this.currentTeamMessageDate == 0) return this.TeamMessage;
      return this.TeamMessage.filter(
        (v) => v.Date == this.currentTeamMessageDate
      ); //篩選現在點擊到的日期
    },

    TeamMessageFilterFocus() {
      if (this.currentTeamMessageFocus === 0) return this.TeamMessageFilterDate;
      return this.TeamMessageFilterDate.filter(
        (v) => v.Focus == this.currentTeamMessageFocus
      );
    },
    TeamMessageFilterSearch() {
      if (this.currentTeamMessageSearch == "")
        return this.TeamMessageFilterFocus;
      return this.TeamMessageFilterFocus.filter((v) =>
        v.Name.includes(this.currentTeamMessageSearch)
      );
    },

    TeamMessageList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.TeamMessageFilterSearch.slice(
        (this.TeamMessagePage - 1) * this.TeamMessagePerPage,
        this.TeamMessagePage * this.TeamMessagePerPage
      );
    },
  },
  methods: {
    //球隊ID轉球隊名
    convertTeam(e) {
      const index = this.Teams.findIndex((v) => v.id === e);
      if (index == -1) {
        return "無";
      }
      return this.Teams[index]?.teamName;
    },

    //球隊位置數字轉換成對應字串
    convertRole(role) {
      return roles[Number(role < 0 ? 0 : role) + 1].label;
    },
    convertDate(inputDate) {
      //日期轉字串
      console.log(inputDate);
      const date = new Date(inputDate);
      console.log("日期", date);
      return `${date.getFullYear()} / ${String(date.getMonth() + 1).padStart(
        2,
        0
      )} / ${String(date.getDate()).padStart(2, 0)}`;
    },

    handleFocusChange(focus, e) {
      e.preventDefault(); //阻止checkbox預設行為
      const index = this.Article.findIndex((v) => v.id === focus.id);
      //用findIndex方法返回=當前點到checkbox的物件id之索引值
      // console.log("當前物件索引值",index)

      if (this.Article[index].focus || this.focusNum < 5)
        //用index的索引值來查找Products中的ProductsFocus是否為true
        this.Article[index].focus = !this.Article[index].focus;
    },
    handleTeamMessageFocusChange(focus, e) {
      e.preventDefault(); //阻止checkbox預設行為
      const index = this.TeamMessage.findIndex((v) => v.Id === focus.Id);
      if (this.TeamMessage[index].Focus || this.TeamMessageFocusNum < 5)
        this.TeamMessage[index].Focus = !this.TeamMessage[index].Focus;
    },
    CloseMenu(e) {
      if (e.target.closest(".table_row_menu") === this.$refs.Area) {
        //點擊到的物件=ref時開啟選單
        this.AreaMenuShow = true;
      } else if (e.target.closest(".table_row_menu") === this.$refs.Position) {
        this.PositionMenuShow = true;
      } else if (e.target.closest(".table_row_menu") === this.$refs.Date) {
        this.DateMenuShow = true;
      } else if (e.target.closest(".table_row_menu") === this.$refs.Focus) {
        this.FocusMenuShow = true;
      } else {
        //點擊到的物件不=ref時關閉選單
        this.AreaMenuShow = false;
        this.PositionMenuShow = false;
        this.DateMenuShow = false;
        this.FocusMenuShow = false;
      }
    },

    AreaMenu() {
      const AreaSet = new Set(this.Article.map((item) => item.area));
      this.AreaArray = Array.from(AreaSet).map((item) => ({ area: item })); //將set資料放進陣列
      this.AreaMenuShow = !this.AreaMenuShow;
    },
    PositionMenu() {
      const PositionSet = new Set(this.Article.map((item) => item.role));
      this.PositionArray = Array.from(PositionSet).map((item) => ({
        role: item,
      })); //將set資料放進陣列
      this.PositionMenuShow = !this.PositionMenuShow;
    },
    DateMenu() {
      const DateSet = new Set(this.Article.map((item) => item.date));
      this.DateArray = Array.from(DateSet).map((item) => ({ date: item })); //將set資料放進陣列
      this.DateMenuShow = !this.DateMenuShow;
    },
    TeamMessageDateMenu() {
      const TeamMessageDateSet = new Set(this.TeamMessage.map((e) => e.Date));
      this.TeamMessageDateArray = Array.from(TeamMessageDateSet).map((e) => ({
        Date: e,
      }));
      this.TeamMessageDateMenuShow = !this.TeamMessageDateMenuShow;
    },

    TeamMessageFocusMenu() {
      const TeamMessageFocusSet = new Set(this.TeamMessage.map((e) => e.Focus));
      this.TeamMessageFocusArray = Array.from(TeamMessageFocusSet).map((e) => ({
        Focus: e,
      }));
      this.TeamMessageFocusMenuShow = !this.TeamMessageFocusMenuShow;
    },
    TeamMessageCloseMenu(e) {
      if (e.target.closest(".table_row_menu") === this.$refs.TeamMessageDate) {
        //點擊到的物件=ref時開啟選單
        this.TeamMessageDateMenuShow = true;
      } else if (
        e.target.closest(".table_row_menu") === this.$refs.TeamMessageFocus
      ) {
        this.TeamMessageFocusMenuShow = true;
      } else {
        //點擊到的物件不=ref時關閉選單
        this.TeamMessageDateMenuShow = false;
        this.TeamMessageFocusMenuShow = false;
      }
    },
    FocusMenu() {
      const FocusSet = new Set(this.Article.map((item) => item.focus));
      this.FocusArray = Array.from(FocusSet).map((item) => ({ focus: item })); //將set資料放進陣列
      this.FocusMenuShow = !this.FocusMenuShow;
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
    updateTeamMessageFocus(a) {
      this.currentTeamMessageFocus = a;
    },
    updateFocus(a) {
      this.currentFocus = a;
    },
    updateSearch() {
      this.currentSearch = this.SearchText;
      this.SearchText = "";
    },
    updateTeamMessageSearch() {
      this.currentTeamMessageSearch = this.TeamMessageSearchText;
    },
    Reset() {
      this.currentTeamMessageDate = 0;
      this.currentFocus = 0;
      this.currentDate = 0;
      this.currentPosition = "";
      this.currentArea = 0;
      this.currentSearch = "";
    },
    TeamMessageReset() {
      (this.currentTeamMessageDate = 0),
        (this.currentTeamMessageFocus = 0),
        (this.currentTeamMessageSearch = "");
    },

    convertFont(str) {
      if (!str) {
        return;
      }
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

    //從firebase引入資料
    async GetData() {
      try {
        const ArticleCollection = collection(db, "COPYWRITINGS"); // 取得集合
        const ArticleDocuments = await getDocs(ArticleCollection); // 取得集合內的所有物件
        ArticleDocuments.forEach((x) => {
          // console.log(x.data());
          this.Article.push(x.data()); // 物件轉陣列
        });
        for (let i = 0; i < this.Article.length; i++) {
          this.Article[i].date = this.convertDate(
            this.Article[i].date.toDate()
          );
        }

        const TeamMessageCollection = collection(db, "BACKSTAGETEAMMESSAGE"); // 取得集合
        const TeamMessageDocuments = await getDocs(TeamMessageCollection); // 取得集合內的所有物件
        TeamMessageDocuments.forEach((x) => {
          // console.log(x.data());
          this.TeamMessage.push(x.data()); // 物件轉陣列
        });

        const TeamsCollection = collection(db, "TEAMS"); // 取得球隊清單集合
        const TeamsDocuments = await getDocs(TeamsCollection); // 取得集合內的所有物件
        TeamsDocuments.forEach((x) => {
          // console.log(x.data());
          this.Teams.push(x.data()); // 物件轉陣列
        });
      } catch (err) {
        alert(err);
      }
    },
    //更動內容上傳資料庫
    async AddArticle() {
      for (let i = 0; i < this.Article.length; i++) {
        // console.log("i在這", i, "陣列", this.Article[i].id);
        const ArticleCollection = doc(db, "COPYWRITINGS",this.Article[i].id);
        await updateDoc(ArticleCollection, {
          focus: this.Article[i].focus||null,
        });
      }
    },
    async AddTeamMessage() {
      for (let i = 0; i < this.TeamMessage.length; i++) {
        // console.log("i在這", i, "陣列", this.Article[i].id);
        const TeamMessageCollection = doc(db, "BACKSTAGETEAMMESSAGE",this.TeamMessage[i].Id);
        await updateDoc(TeamMessageCollection, {
          Focus: this.TeamMessage[i].Focus||null,
        });
      }
    },

    // AddArticleData() {
    //   //Article的資料上傳到firebase
    //   const ArticleCollection = collection(db, "BACKSTAGEARTICLE"); // 將ArticleCollection設定為BACKSTAGEARTICLE集合
    //   this.Article.forEach(
    //     (
    //       x //將Article資料逐筆新增至firebase
    //     ) => {
    //       //const docRef =
    //       addDoc(ArticleCollection, x); //
    //       // console.log("資料", docRef);
    //     }
    //   );
    // },
    // AddTeamMessageData() {
    //   //TeamMessage的資料上傳到firebase
    //   const TeamMessageCollection = collection(db, "BACKSTAGETEAMMESSAGE");
    //   this.TeamMessage.forEach(
    //     (
    //       x //將TeamMessage資料逐筆新增至firebase
    //     ) => {
    //       //const docRef =
    //       addDoc(TeamMessageCollection, x); //
    //       // console.log("資料", docRef);
    //     }
    //   );
    // },
  },
  mounted() {
    window.addEventListener("click", this.CloseMenu); //監聽如果任意位置有被點擊觸發CloseMenu
    window.addEventListener("click", this.TeamMessageCloseMenu);
    this.GetData();
    // this.AddArticleData();
    //  this.AddTeamMessageData();
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
    // height: 853px;
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
            width: 30%;
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
        //個別欄位設定
        &_name {
          width: 20%;
        }
        &_member {
          width: 10%;
        }
        &_date {
          width: 25%;
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
          width: 25%;
          position: relative;
        }
        &_focus {
          width: 15%;
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
</style>
