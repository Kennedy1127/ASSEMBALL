<template>
  <div class="recruitment_table">
    <table v-if="tablekey === 1" class="fixed_headers">
      <thead>
        <tr>
          <th>標題</th>
          <th>守備位置</th>
          <th>地區</th>
          <th v-if="title === '管理職缺'">更新日期</th>
          <th v-if="title === '管理職缺'">編輯</th>
          <th v-else :colspan="'2'">更新日期</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in $props.tableData" :key="item.id">
          <td>{{ item.copywriting_title }}</td>
          <td>{{ item.copywriting_role }}</td>
          <td>{{ item.copywriting_area }}</td>
          <td>{{ item.copywriting_date }}</td>
          <td v-if="title === '管理職缺'" class="Icon">
            <div class="icon-pen">
              <font-awesome-icon icon="fa-solid fa-pen" />
            </div>
          </td>
          <td v-else class="Icon">
            <button>
              更多<font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <table v-else-if="tablekey === 2" class="fixed_headers">
      <thead>
        <tr>
          <th>守備位置</th>
          <th>地區</th>
          <th>應徵日期</th>
          <th>姓名</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in records" :key="item">
          <td>{{ records.A }}</td>
          <td>{{ records.B }}</td>
          <td>{{ records.C }}</td>
          <td>{{ records.D }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="recruitment_table_mobile">
    <slot name="table1">
      <table class="fixed_headers">
        <tbody>
          <tr v-for="item in $props.tableData" :key="item.id">
            <td>
              <div class="td_item">
                <div class="td_title">標題</div>
                <div>{{ item.copywriting_title }}</div>
              </div>
              <div class="td_item">
                <div class="td_title">守備位置</div>
                <div>{{ item.copywriting_role }}</div>
              </div>
              <div class="td_item">
                <div class="td_title">地區</div>
                <div>{{ item.copywriting_area }}</div>
              </div>
            </td>
            <td>
              <div class="td_item update">
                <div class="td_title">更新日期</div>
                <div>{{ item.copywriting_date }}</div>
              </div>
              <div class="icon-pen">
                <font-awesome-icon icon="fa-solid fa-pen" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </slot>
  </div>
</template>
<!-- this.$route.name -->
<script>
import { icon } from "@fortawesome/fontawesome-svg-core";
export default {
  data() {
    return {
      records: [
        { A: "捕手", B: "桃園市", C: "2023.08.05", D: "Hank Liu" },
        { A: "捕手", B: "桃園市", C: "2023.07.05", D: "Hank Liu" },
        { A: "捕手", B: "桃園市", C: "2023.06.05", D: "Hank Liu" },
        { A: "捕手", B: "桃園市", C: "2023.05.05", D: "Hank Liu" },
        { A: "捕手", B: "桃園市", C: "2023.04.05", D: "Hank Liu" },
      ],

      recruitPosts: [
        {
          postTitle: "I want you ！",
          player: "捕手",
          area: "桃園市",
          postdate: "2023.07.05",
          iconPen: "fa-solid fa-pen",
          iconTrashCan: "fa-solid fa-trash-can",
        },
        {
          postTitle: "I want you ！",
          player: "投手",
          area: "台北市",
          postdate: "2023.08.05",
          iconPen: "fa-solid fa-pen",
          iconTrashCan: "fa-solid fa-trash-can",
        },
        {
          postTitle: "postTitle3",
          player: "投手",
          area: "台北市",
          postdate: "2023.08.05",
          iconPen: "fa-solid fa-pen",
          iconTrashCan: "fa-solid fa-trash-can",
        },
        {
          postTitle: "postTitle4",
          player: "投手",
          area: "台北市",
          postdate: "2023.08.05",
          iconPen: "fa-solid fa-pen",
          iconTrashCan: "fa-solid fa-trash-can",
        },
        {
          postTitle: "postTitle5",
          player: "投手",
          area: "台北市",
          postdate: "2023.08.05",
          iconPen: "fa-solid fa-pen",
          iconTrashCan: "fa-solid fa-trash-can",
        },
      ],
      Icon: { pen: "fa-pen", trashcan: "fa-trash-can" },
      // <td>I want you ！</td>
      //     <td>捕手</td>
      //     <td>桃園市</td>
      //     <td>2023.07.05</td>
      //     <td class="Icon">
      //       <div class="icon-pen">
      //         <font-awesome-icon icon="fa-solid fa-pen" />
      //       </div>
      //       <div class="icon-trashcan">
      //         <font-awesome-icon icon="fa-solid fa-trash-can" />
      //       </div>
      //     </td>
    };
  },
  props: {
    tableData: {
      type: Array,
      default: [
        {
          postTitle: "I want you ！",
          player: "捕手",
          area: "桃園市",
          postdate: "2023.07.05",
          iconPen: "fa-solid fa-pen",
          iconTrashCan: "fa-solid fa-trash-can",
        },
        {
          postTitle: "I want you ！",
          player: "捕手",
          area: "桃園市",
          postdate: "2023.07.05",
          iconPen: "fa-solid fa-pen",
          iconTrashCan: "fa-solid fa-trash-can",
        },
        {
          postTitle: "I want you ！",
          player: "捕手",
          area: "桃園市",
          postdate: "2023.07.05",
          iconPen: "fa-solid fa-pen",
          iconTrashCan: "fa-solid fa-trash-can",
        },
        {
          postTitle: "I want you ！",
          player: "捕手",
          area: "桃園市",
          postdate: "2023.07.05",
          iconPen: "fa-solid fa-pen",
          iconTrashCan: "fa-solid fa-trash-can",
        },
        {
          postTitle: "I want you ！",
          player: "捕手",
          area: "桃園市",
          postdate: "2023.07.05",
          iconPen: "fa-solid fa-pen",
          iconTrashCan: "fa-solid fa-trash-can",
        },
      ],
    },
    tablekey: {
      type: Number,
    },
    title: {
      type: String,
    },
    // methods: {
    //   checkURL() {
    //     this.$route.name == "";
    //   },
    // },
    // props: {
    //   color: String,
    // },
    // compute: {
    //   renderColor(){
    //     return {
    //       '`${props.color}`':true,
    //     }
    //   }
    // },
  },
};
</script>

<style lang="scss">
.recruitment_table_mobile {
  display: none;
}
.green {
  background-color: green;
}
.recruitment_table {
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    thead {
      color: var(--primary-blue);
      background-color: var(--secondary-blue-3);

      th {
        padding: 0.5rem 0;
      }
    }
    td {
      padding: 3rem 0;
      text-align: center;
    }
    td:nth-child(3) {
      font-size: 0.875rem;
    }
    tbody tr:nth-child(2n + 1) {
      background-color: var(--secondary-blue-4);
    }
    tbody tr:nth-child(2n + 2) {
      background-color: var(--secondary-blue-3);
    }
    .Icon {
      display: flex;
      justify-content: center;
      gap: 2rem;
      color: var(--primary-blue);
      button {
        font-size: 1rem;
        letter-spacing: 5px;
        background-color: var(--primary-blue);
        color: var(--pale-white);
        width: 6rem;
        height: 2rem;
        border-radius: 3rem;
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .recruitment_table {
    display: none;
  }
  .recruitment_table_mobile {
    display: block;
    table {
      width: 100%;
      border-collapse: collapse;
      thead {
        color: var(--primary-blue);
        background-color: var(--secondary-blue-3);

        th {
          padding: 0.5rem 0;
        }
      }
      tr {
        display: flex;
        td {
          width: 50%;
          vertical-align: top;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: space-between;
          .td_item {
            // margin-bottom: 1rem;
          }
          .td_title {
            color: var(--primary-blue);
            margin-bottom: 0.5rem;
          }
          .td_item.update {
            flex-grow: 2;
            // margin-bottom: 8.6rem;
            td {
              font-size: 0.875rem;
            }
          }
          .icon-pen {
            font-size: 2rem;
            color: var(--primary-blue);
            // text-align: right;
          }
        }
        // td:nth(2) {
        //   display: flex;
        //   flex-direction: row;
        //   justify-content: space-between;
        // }
      }

      tbody tr:nth-child(2n + 1) {
        background-color: var(--secondary-blue-4);
      }
      tbody tr:nth-child(2n + 2) {
        background-color: var(--secondary-blue-3);
      }

      // .Icon {
      //   display: flex;
      //   justify-content: center;
      //   gap: 2rem;
      //   color: var(--primary-blue);
      // }
    }
  }
}
</style>
