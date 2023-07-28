<template>
  <div class="recruitment_table">
    <table class="fixed_headers">
      <thead>
        <tr>
          <th>標題</th>
          <th>守備位置</th>
          <th>地區</th>
          <th>更新日期</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in recruitPosts" :key="item">
          <td>{{ item.postTitle }}</td>
          <td>{{ item.player }}</td>
          <td>{{ item.area }}</td>
          <td>{{ item.postdate }}</td>
          <td class="Icon">
            <div class="icon-pen">
              <font-awesome-icon icon="fa-solid fa-pen" />
            </div>
            <!-- <div class="icon-trashcan">
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </div> -->
          </td>

          <!-- FIXME: icon 用v-for來寫  -->
          <!-- <td v-for="item in Icon" class="Icon" :key="item.index">
            <div class="icon-pen">
              <div class="icon-pen">
                <font-awesome-icon icon="fa-solid {{ item.pen }}" />
              </div>
              <div class="icon-trashcan">
                <font-awesome-icon icon="fa-solid {{ item.trashcan }}" />
              </div>
            </div>
          </td> -->

          <!--  -->
        </tr>
      </tbody>
    </table>
  </div>
  <div class="recruitment_table_mobile">
    <table class="fixed_headers">
      <tbody>
        <tr v-for="item in recruitPosts" :key="item">
          <td>
            <div class="td_item">
              <div class="td_title">標題</div>
              <div>{{ item.postTitle }}</div>
            </div>
            <div class="td_item">
              <div class="td_title">守備位置</div>
              <div>{{ item.player }}</div>
            </div>
            <div class="td_item">
              <div class="td_title">地區</div>
              <div>{{ item.area }}</div>
            </div>
          </td>
          <td>
            <div class="td_item update">
              <div class="td_title">更新日期</div>
              <div>{{ item.postdate }}</div>
            </div>
            <div class="icon-pen">
              <font-awesome-icon icon="fa-solid fa-pen" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<!-- this.$route.name -->
<script>
import { icon } from "@fortawesome/fontawesome-svg-core";
export default {
  data() {
    return {
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
    font-size: 1.25rem;
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
      font-size: 1.25rem;
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
            color: var(--secondary-gray-1);
            margin-bottom: 0.5rem;
          }
          .td_item.update {
            flex-grow: 2;
            // margin-bottom: 8.6rem;
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
