<template>
  <div class="Member">
    <div class="Member_window">
      <!-- 視窗header -->
      <div class="Member_window_header">
        <div class="Member_window_header_title">會員名單</div>
        <div class="Member_window_header_search">
          <input type="text" placeholder="搜尋" v-model="searchText" />
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
      <!-- 表格 -->
      <div class="Member_table">
        <table class="Member_table_form">
          <!-- 表頭 -->
          <tr class="table_row">
            <td class="table_row_number">會員編號</td>
            <td class="table_row_name">會員姓名</td>
            <td class="table_row_teamName">
              <ul class="table_row_teamName_menu" v-if="TeamNameMenuShow">
                <li
                  v-for="(item, index) in TeamNameArray"
                  :key="index"
                  @click="updateTeamName(item.TeamName)"
                >
                  {{ item.TeamName }}
                </li>
              </ul>
              所屬球隊
              <button @click="TeamNameMenu" class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>

            <td class="table_row_manager">
              <ul class="table_row_manager_menu" v-if="ManagerMenuShow">
                <li
                  v-for="(item, index) in ManagerArray"
                  :key="index"
                  @click="updateManager(item.Manager)"
                >
                  {{ item.Manager }}
                </li>
              </ul>
              球隊管理者
              <button @click="ManagerMenu" class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_violation">
              <ul class="table_row_violation_menu" v-if="ViolationMenuShow">
                <li
                  v-for="(item, index) in ViolationArray"
                  :key="index"
                  @click="updateViolation(item.Violation)"
                >
                  {{ item.Violation }}
                </li>
              </ul>
              違規次數
              <button @click="ViolationMenu" class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>

            <td class="table_row_state">
              <ul class="table_row_state_menu" v-if="StateMenuShow">
                <li
                  v-for="(item, index) in StateArray"
                  :key="index"
                  @click="updateState(item.State)"
                >
                  {{ item.State }}
                </li>
              </ul>
              權限狀態
              <button @click="StateMenu" class="table_row_menu">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
          </tr>
          <!-- 資料內容 -->
          <tr
            v-for="(item, index) in MemberList"
            :key="index"
            class="table_row"
          >
            <td class="table_row_number">{{ convertFont(item.Number) }}</td>
            <td class="table_row_name">{{ convertFont(item.Name) }}</td>
            <td class="table_row_teamName">
              {{ convertFont(item.TeamName) }}
            </td>
            <td class="table_row_manager">
              {{ convertFont(item.Manager) }}
              <input
                type="checkbox"
                v-model="Manager"
                name="Manager"
                :value="index"
              />
            </td>
            <td class="table_row_violation">
              {{ convertFont(item.Violation) }}
            </td>
            <td class="table_row_state">
              {{ convertFont(item.State) }}
              <input
                type="checkbox"
                v-model="State"
                name="State"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      perPage: 17,
      Member: [
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "是",
          Violation: 2,
          State: "正常",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "教士隊",
          Manager:"否",
          Violation: 3,
          State: "正常",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "兄弟隊",
          Manager:"是",
          Violation: 1,
          State: "正常",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "洋基隊",
          Manager:"是",
          Violation: 1,
          State: "正常",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "洋基隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "洋基隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "熱火隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "勇士隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "否",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "否",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "否",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "否",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "否",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "否",
          Violation: 1,
          State: "停權",
        },
        {
          Number: "001",
          Name: "狗今生",
          TeamName: "天使隊",
          Manager: "是",
          Violation: 1,
          State: "停權",
        },
      ],
      TeamNameArray: [], //球隊名稱陣列
      ManagerArray:[],
      ViolationArray:[],
      StateArray:[],

      TeamNameMenuShow: false, //切換是否顯示下拉式選單
      ManagerMenuShow:false,
      ViolationMenuShow:false,
      StateMenuShow:false,

      currentTeamName: 0, //現在球隊名稱
      currentManager:0,
      currentViolation:0,
      currentState:0
    };
  },
  computed: {
    MemberFilterTeamName() {
      //篩選球隊名稱
      if (this.currentTeamName == 0) return this.Member; //還沒篩選時回傳所有資料
      return this.Member.filter((v) => v.TeamName == this.currentTeamName); //篩選現在點擊到的球隊名稱
    },
    MemberFilterManager() {
      if (this.currentManager == 0) return this.MemberFilterTeamName; 
      return this.MemberFilterTeamName.filter((v) => v.Manager == this.currentManager); 
    },

    MemberFilterViolation() {
     
      if (this.currentViolation == 0) return this.MemberFilterManager; 
      return this.MemberFilterManager.filter((v) => v.Violation == this.currentViolation); 
    },

    MemberFilterState() {
     
     if (this.currentState == 0) return this.MemberFilterViolation; 
     return this.MemberFilterViolation.filter((v) => v.State == this.currentState); 
   },
    
    MemberList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.MemberFilterState.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  methods: {
    TeamNameMenu() {
      const TeamNameSet = new Set(this.Member.map((e) => e.TeamName)); //把Member陣列中每個物件的TeamName提出來回傳並組成set
      this.TeamNameArray = Array.from(TeamNameSet).map((item) => ({ TeamName: item })); //將set資料放進陣列
      this.TeamNameMenuShow = !this.TeamNameMenuShow;
    },
    ManagerMenu() {
      const ManagerSet = new Set(this.Member.map((e) => e.Manager)); 
      this.ManagerArray = Array.from(ManagerSet).map((item) => ({ Manager: item })); //將set資料放進陣列
      this.ManagerMenuShow = !this.ManagerMenuShow;
    },

    ViolationMenu() {
      const ViolationSet = new Set(this.Member.map((e) => e.Violation)); 
      this.ViolationArray = Array.from(ViolationSet).map((item) => ({ Violation: item })); //將set資料放進陣列
      this.ViolationMenuShow = !this.ViolationMenuShow;
    },
    StateMenu() {
      const StateSet = new Set(this.Member.map((e) => e.State)); 
      this.StateArray = Array.from(StateSet).map((item) => ({ State: item })); //將set資料放進陣列
      this.StateMenuShow = !this.StateMenuShow;
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
      if (this.page < this.Member.length / this.perPage) {
        // console.log("陣列長度", this.Products.length / this.perPage);
        this.page++;
      }
    },
    updateTeamName(e) {
      //把currentTeamName改成TeamNameArray對應項目的TeamName
      this.currentTeamName = e;
    },
    updateManager(e) {
      this.currentManager = e;
    },

    updateViolation(e) {
      this.currentViolation = e;
    },
    updateState(e) {
      this.currentState = e;
    },
  },
};
</script>
<style scoped lang="scss">
.Member {
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
    .Member_table {
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
          &_manager {
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
          &_violation {
            width: 10%;
            position: relative;
            &_menu {
              top: 2rem;
              position: absolute;
              width: 100%;
              background-color: var(--pale-white);
              border-radius: 8px;
              height: 5rem;
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
          &_state {
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
