<template>
  <div class="Manager">
    <div class="Manager_window">
      <!-- 視窗header -->
      <div class="Manager_window_header">
        <div class="Manager_window_header_title">管理員名單</div>
      </div>
      <!-- 表格 -->
      <div class="Manager_table">
        <table class="Manager_table_form">
          <!-- 表頭 -->
          <tr class="table_row">
            <td class="table_row_number">管理員編號</td>
            <td class="table_row_name">管理員姓名</td>

            <td class="table_row_state">管理員權限</td>
            <td class="table_row_super">超級管理員</td>
          </tr>
          <!-- 資料內容 -->
          <tr
            v-for="(item, index) in ManagerList"
            :key="index"
            class="table_row"
          >
            <td class="table_row_number">{{ convertFont(item.Number) }}</td>
            <td class="table_row_name">{{ convertFont(item.Name) }}</td>

            <td class="table_row_state">
              <div class="super" v-if="item.Super">超級管理員</div>
              <input type="checkbox" v-model="item.State" name="State" v-if="!item.Super"/>
            </td>
            <td class="table_row_super">
              <div class="super" v-if="item.Super">是</div>
              <div class="super" v-if="!item.Super">否</div>
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
import { db } from "@/firebase/config"; //引入data base
import { addDoc, doc, getDoc, addDocs } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
export default {
  data() {
    return {
      page: 1,
      perPage: 17,
      Manager:[],
      // Manager: [
      //   {
      //     Number: "1",
      //     Name: "阿狗",
      //     State: true,
      //     Super: true,
      //   },
      //   {
      //     Number: "2",
      //     Name: "阿貓",
      //     State: true,
      //     Super: false,
      //   },
      //   {
      //     Number: "3",
      //     Name: "來福",
      //     State: true,
      //     Super: false,
      //   },
      //   {
      //     Number: "4",
      //     Name: "旺財",
      //     State: true,
      //     Super: false,
      //   },
      //   {
      //     Number: "5",
      //     Name: "常威",
      //     State: true,
      //     Super: false,
      //   },
      //   {
      //     Number: "6",
      //     Name: "阿梅",
      //     State: true,
      //     Super: false,
      //   },
      //   {
      //     Number: "7",
      //     Name: "阿真",
      //     State: true,
      //     Super: false,
      //   },
      //   {
      //     Number: "8",
      //     Name: "阿強",
      //     State: true,
      //     Super: false,
      //   },
      //   {
      //     Number: "9",
      //     Name: "賴世原",
      //     State: true,
      //     Super: false,
      //   },
      // ],
      Super: [], //給V-model的陣列
      State: [], //給V-model的陣列
    };
  },
  computed: {
    ManagerList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.Manager.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  methods: {
    convertFont(str) {
      if(!str){return};
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
      if (this.page < this.Manager.length / this.perPage) {
        // console.log("陣列長度", this.Products.length / this.perPage);
        this.page++;
      }
    },
     //從firebase引入資料
     async GetData() {
      try {
        const ManagerCollection = collection(db, "BACKSTAGEMANAGER"); // 取得集合
        const ManagerDocuments = await getDocs(ManagerCollection); // 取得集合內的所有物件
        ManagerDocuments.forEach((x) => {
          // console.log(x.data());
          this.Manager.push(x.data()); // 物件轉陣列
        });
      } catch (err) {
        alert(err);
      }
    },
    //         AddData(){
    //  //將資料上傳到firebase
    //         const MamagerCollection = collection(db, "BACKSTAGEMANAGER"); 
    //         this.Manager.forEach(x =>
    //         {
    //           const docRef = addDoc(MamagerCollection, x)//
    //           // console.log("資料", docRef);
    //         })
    // }
  },
  mounted(){
    // this.AddData();
    this.GetData();
  }
};

</script>
<style scoped lang="scss">
.Manager {
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
    .Manager_table {
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
            width: 25%;
          }
          &_name {
            width: 25%;
          }

          &_state {
            width: 25%;
          }
          &_super {
            width: 25%;
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
