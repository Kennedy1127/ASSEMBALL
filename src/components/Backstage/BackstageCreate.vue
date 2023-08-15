<template>
  <div class="Create">
    <div class="Create_window">
      <!-- 視窗header -->
      <div class="Create_window_header">
        <div class="Create_window_header_title">創立球隊請求</div>
        <button class="icon_reset" @click="Reset">
          <font-awesome-icon icon="fa-solid fa-rotate-right" />
        </button>
        <div class="Create_window_header_search">
          <input type="text" placeholder="搜尋" v-model="SearchText" />
          <button class="icon" @click="updateSearch">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      <!-- 表格 -->
      <div class="Create_table">
        <table class="Create_table_form">
          <!-- 表頭 -->
          <tr class="table_row">
            <td class="table_row_number">編號</td>
            <td class="table_row_name">會員姓名</td>
            <td class="table_row_teamName">球隊名稱</td>
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
              <button @click="AreaMenu" class="table_row_menu" ref="Area">
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
              球隊性質
              <button @click="TypeMenu" class="table_row_menu" ref="Type">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>

            <td class="table_row_illustrate">球隊說明</td>
            <td class="table_row_result">是否通過</td>
          </tr>
          <!-- 資料內容 -->
          <tr
            v-for="(item, index) in CreateList"
            :key="index"
            class="table_row"
          >
            <td class="table_row_number">{{ convertFont(item.Number) }}</td>
            <td class="table_row_name">{{ convertFont(item.Name) }}</td>
            <td class="table_row_teamName">
              {{ convertFont(item.TeamName) }}
            </td>
            <td class="table_row_area">{{ convertFont(item.Area) }}</td>
            <td class="table_row_type">{{ convertFont(item.Type) }}</td>
            <td class="table_row_illustrate">
              {{ convertFont(item.Illustrate) }}
            </td>
            <td class="table_row_result">
              <input
                type="checkbox"
                v-model="item.Result"
                name="Result"
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
        <button class="btn_send" @click="AddCreate">送出</button>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase/config"; //引入data base
import { addDoc, doc, getDoc, addDocs } from "firebase/firestore";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
export default {
  data() {
    return {
      page: 1,
      perPage: 17,
      // Create: [
      //   {
      //     Number: "1",
      //     Name: "狗今生",
      //     TeamName: "吱吱隊",
      //     Area: "台北",
      //     Type: "老手",
      //     Illustrate:
      //       "我們的球隊以團結和合作為基石。我們相互支持，彼此信任，並相信每個隊員都有為球隊做出貢獻的能力，我們的目標是共同成長，一起攜手打造一支強大的球隊。",
      //     Result: false,
      //   },
      //   {
      //     Number: "2",
      //     Name: "阿福",
      //     TeamName: "爪爪隊",
      //     Area: "台南",
      //     Type: "初心者",
      //     Illustrate:
      //       "我們的球隊以團結和合作為基石。我們相互支持，彼此信任，並相信每個隊員都有為球隊做出貢獻的能力，我們的目標是共同成長，一起攜手打造一支強大的球隊。",
      //      Result: false,
      //   },
      //   {
      //     Number: "3",
      //     Name: "阿牛",
      //     TeamName: "喵喵隊",
      //     Area: "台東",
      //     Type: "初心者",
      //     Illustrate:
      //       "我們的球隊以團結和合作為基石。我們相互支持，彼此信任，並相信每個隊員都有為球隊做出貢獻的能力，我們的目標是共同成長，一起攜手打造一支強大的球隊。",
      //      Result: false,
      //   },
      //   {
      //     Number: "4",
      //     Name: "阿鬼",
      //     TeamName: "邦邦隊",
      //     Area: "台東",
      //     Type: "初心者",
      //     Illustrate:
      //       "我們的球隊以團結和合作為基石。我們相互支持，彼此信任，並相信每個隊員都有為球隊做出貢獻的能力，我們的目標是共同成長，一起攜手打造一支強大的球隊。",
      //      Result: false,
      //   },
      //   {
      //     Number: "5",
      //     Name: "阿真",
      //     TeamName: "香蕉隊",
      //     Area: "台北",
      //     Type: "初心者",
      //     Illustrate:
      //       "我們的球隊以團結和合作為基石。我們相互支持，彼此信任，並相信每個隊員都有為球隊做出貢獻的能力，我們的目標是共同成長，一起攜手打造一支強大的球隊。",
      //      Result: false,
      //   },
      //   {
      //     Number: "6",
      //     Name: "阿西",
      //     TeamName: "西瓜隊",
      //     Area: "台北",
      //     Type: "初心者",
      //     Illustrate:
      //       "我們的球隊以團結和合作為基石。我們相互支持，彼此信任，並相信每個隊員都有為球隊做出貢獻的能力，我們的目標是共同成長，一起攜手打造一支強大的球隊。",
      //      Result: false,
      //   },
      //   {
      //     Number: "7",
      //     Name: "阿東",
      //     TeamName: "鳳梨隊",
      //     Area: "台北",
      //     Type: "初心者",
      //     Illustrate:
      //       "我們的球隊以團結和合作為基石。我們相互支持，彼此信任，並相信每個隊員都有為球隊做出貢獻的能力，我們的目標是共同成長，一起攜手打造一支強大的球隊。",
      //      Result: false,
      //   },

      // ],
      Create: [],
      Teams: [],
      AreaArray: [], //篩選地區陣列
      TypeArray: [],

      AreaMenuShow: false, //切換下拉式選單
      TypeMenuShow: false,

      currentArea: 0,
      currentType: 0,
      currentSearch: "",
    };
  },
  computed: {
    CreateFilterArea() {
      if (this.currentArea == 0) return this.Create;
      return this.Create.filter((v) => v.Area == this.currentArea);
    },
    CreateFilterType() {
      if (this.currentType == 0) return this.CreateFilterArea;
      return this.CreateFilterArea.filter((v) => v.Type == this.currentType);
    },
    CreateFilterSearch() {
      if (this.currentSearch == "") return this.CreateFilterType;
      return this.CreateFilterType.filter((v) =>
        v.Name.includes(this.currentSearch)
      );
    },
    CreateList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.CreateFilterSearch.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  methods: {
    AreaMenu() {
      const AreaSet = new Set(this.Create.map((item) => item.Area)); //Set
      this.AreaArray = Array.from(AreaSet).map((item) => ({ Area: item }));
      this.AreaMenuShow = !this.AreaMenuShow;
    },

    TypeMenu() {
      const TypeSet = new Set(this.Create.map((item) => item.Type)); //Set
      this.TypeArray = Array.from(TypeSet).map((item) => ({ Type: item }));
      this.TypeMenuShow = !this.TypeMenuShow;
    },
    Reset() {
      this.currentArea = 0;
      this.currentType = 0;
      this.currentSearch = "";
    },
    CloseMenu(e) {
      if (e.target.closest(".table_row_menu") === this.$refs.Area) {
        this.AreaMenuShow = true;
      } else if (e.target.closest(".table_row_menu") === this.$refs.Type) {
        this.TypeMenuShow = true;
      } else {
        this.AreaMenuShow = false;
        this.TypeMenuShow = false;
      }
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

    pageup() {
      if (this.page != 1) {
        //往上換頁
        this.page--;
      }
    },
    pagedown() {
      //往下換頁
      if (this.page < this.Create.length / this.perPage) {
        // console.log("陣列長度", this.Products.length / this.perPage);
        this.page++;
      }
    },
    updateArea(e) {
      this.currentArea = e;
    },
    updateType(e) {
      this.currentType = e;
    },
    updateSearch() {
      this.currentSearch = this.SearchText;
      this.SearchText = "";
    },
    //更動內容上傳資料庫
    async AddCreate() {
      for (let i = 0; i < this.Create.length; i++) {
        const CreateCollection = doc(db, "BACKSTAGECREATE", this.Create[i].id);

        if (this.Create[i].Result == true) {
          const TeamsCollection = collection(db, "TEAMS"); //新增至firebase
          const NewTeams = {//隊伍資料新增至TEAMS
            id:this.Create[i].id,
            intro: this.Create[i].Illustrate,
            location: this.Create[i].Area,
            user_id:this.Create[i].Name,
            teamName:this.Create[i].TeamName,
          };
          addDoc(TeamsCollection, NewTeams);
        }
        await updateDoc(CreateCollection, {
          Result: this.Create[i].Result,
        });

      
      }
    },
    //從firebase引入資料
    async GetData() {
      try {
        const CreateCollection = collection(db, "BACKSTAGECREATE"); // 取得集合
        const CreateDocuments = await getDocs(CreateCollection); // 取得集合內的所有物件
        CreateDocuments.forEach((x) => {
          // console.log(x.data());
          this.Create.push(x.data()); // 物件轉陣列
          this.Create.sort(function (a, b) {
            return a.Number - b.Number; // 升序排序
          });
        });
        const TeamsCollection = collection(db, "TEAMS"); // 取得集合
        const TeamsDocuments = await getDocs(TeamsCollection); // 取得集合內的所有物件
        CreateDocuments.forEach((x) => {
          // console.log(x.data());
          this.Teams.push(x.data()); // 物件轉陣列
        });
      } catch (err) {
        alert(err);
      }
    },
    //      AddData(){
    //  //將資料上傳到firebase
    //         const CreateCollection = collection(db, "BACKSTAGECREATE");
    //         this.Create.forEach(x =>
    //         {
    //           const docRef = addDoc(CreateCollection, x)//
    //           // console.log("資料", docRef);
    //         })
    // }
  },
  mounted() {
    window.addEventListener("click", this.CloseMenu); //監聽如果任意位置有被點擊觸發CloseMenu
    // this.AddData();
    this.GetData();
  },
};
</script>
<style scoped lang="scss">
.Create {
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
    .Create_table {
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
          &_teamName {
            width: 15%;
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
          &_type {
            width: 20%;
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
          &_illustrate {
            width: 10%;
          }
          &_result {
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
