<template>
  <div class="recruitment_table">
    <!-- <table v-if="tablekey === 1" class="fixed_headers">
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
    </table> -->

    <table class="fixed_headers">
      <thead>
        <tr v-if="tablekey === 1">
          <th v-if="title === '管理職缺'"><div>標題</div></th>
          <th v-else :colspan="'2'"><div>標題</div></th>
          <th><div>守備位置</div></th>
          <th><div>地區</div></th>
          <th v-if="title === '管理職缺'"><div>更新日期</div></th>
          <th v-if="title === '管理職缺'">編輯</th>

          <th v-else :colspan="'2'" class="verify">更新日期</th>
        </tr>
        <tr v-else>
          <th :colspan="'2'"><div>守備位置</div></th>
          <th><div>地區</div></th>
          <th><div>應徵日期</div></th>
          <th :colspan="'2'">姓名</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in $props.tableData" :key="item.id">
          <td
            :class="convertStatusColor()"
            v-if="title === '審核應徵' || title === '記錄管理'"
          ></td>
          <td v-if="title === '管理職缺' || title === '審核應徵'">
            {{ item.title || item.copywriting.title }}
          </td>

          <td v-else>{{ getRoleLabel(item.role || item.copywriting.role) }}</td>

          <td v-if="title === '管理職缺'">
            <!-- <span v-if=""></span>  -->
            {{ getRoleLabel(item.role) }}
          </td>

          <td v-else-if="title === '審核應徵'">
            <!-- <span v-if=""></span>  -->
            {{ getRoleLabel(item.copywriting?.role) }}
          </td>

          <td v-else>{{ item.copywriting.area }}</td>

          <td v-if="title === '管理職缺'">
            {{ item.area }}
          </td>

          <td v-else-if="title === '審核應徵'">
            {{ item.copywriting?.area }}
          </td>

          <td v-else>{{ convertDate(item.date.toDate()) }}</td>

          <td v-if="title === '管理職缺' || title === '審核應徵'">
            <div>{{ convertDate(item.date.toDate()) }}</div>
          </td>

          <td v-else>{{ item.user.lastname + item.user.firstname }}</td>

          <td v-if="title === '管理職缺'" class="Icon">
            <div class="icon-pen" @click="goEditCopywriting(item.id)">
              <font-awesome-icon icon="fa-solid fa-pen" />
            </div>
          </td>
          <td
            v-else-if="title === '審核應徵'"
            class="Icon"
            @click="goApplyDetail(item.id)"
          >
            <button>
              更多<font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
          </td>
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
              <div v-if="tablekey === 1" class="td_item">
                <div class="td_title">標題</div>
                <div>
                  {{ item.title }}
                </div>
              </div>
              <div class="td_item">
                <div class="td_title">守備位置</div>
                <div>{{ getRoleLabel(item.role) }}</div>
              </div>
              <div class="td_item">
                <div class="td_title">地區</div>
                <div>{{ item.area }}</div>
              </div>
            </td>
            <td>
              <div v-if="tablekey === 1" class="td_item update">
                <div class="td_title">更新日期</div>
                <div>{{ convertDate(item.date.toDate()) }}</div>
              </div>
              <div v-else>
                <div class="td_title">應徵日期</div>
                <div>{{ convertDate(item.date.toDate()) }}</div>
              </div>
              <div v-if="title === '記錄管理'" class="td_item">
                <div class="td_title">姓名</div>
                <div>{{ item.candidate_name }}</div>
              </div>
              <div
                v-if="title === '管理職缺'"
                class="icon-pen"
                @click="goEditCopywriting(item.id)"
              >
                <font-awesome-icon icon="fa-solid fa-pen" />
              </div>
              <div
                v-else-if="title === '審核應徵'"
                class="Icon"
                @click="goApplyDetail(item.id)"
              >
                <button>
                  更多<font-awesome-icon icon="fa-solid fa-chevron-right" />
                </button>
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
      statusColor: ["yellow", "red", "green"],

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
      // role: [],
    };
  },
  props: {
    status: {
      type: Number,
      default: 0,
    },
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
  },
  methods: {
    convertStatusColor() {
      return { [this.statusColor[this.$props.status]]: true };
    },
    convertDate(inputDate) {
      const date = new Date(inputDate);
      return `${date.getFullYear()} / ${String(date.getMonth() + 1).padStart(
        2,
        0
      )} / ${String(date.getDate()).padStart(2, 0)}`;
    },

    goApplyDetail(id) {
      this.$router.push({ name: "recruitmentVerifyDetail", query: { id } });
    },
    goEditCopywriting(id) {
      this.$router.push({ name: "recruitmentPost", query: { id } });
    },
    getRoleLabel(role) {
      const roles = [
        { value: 0, label: "投手" },
        { value: 1, label: "捕手" },
        { value: 2, label: "一壘手" },
        { value: 3, label: "二壘手" },
        { value: 4, label: "游擊手" },
        { value: 5, label: "三壘手" },
        { value: 6, label: "左外野手" },
        { value: 7, label: "中外野手" },
        { value: 8, label: "右外野手" },
      ];

      const roleObject = roles.find((roleValue) => roleValue.value === role);
      return roleObject ? roleObject.label : "";
    },
  },
  computed: {
    // getRoleLabel() {
    //   const roles = [
    //     { value: 0, label: "投手" },
    //     { value: 1, label: "捕手" },
    //     { value: 2, label: "一壘手" },
    //     { value: 3, label: "二壘手" },
    //     { value: 4, label: "游擊手" },
    //     { value: 5, label: "三壘手" },
    //     { value: 6, label: "左外野手" },
    //     { value: 7, label: "中外野手" },
    //     { value: 8, label: "右外野手" },
    //   ];
    //   return (roleValue) => {
    //     const roleObject = roles.find((role) => role.value === role);
    //     return roleObject ? roleObject.label : "";
    //   };
    // },
  },
};
</script>

<style lang="scss">
.recruitment_table_mobile {
  display: none;
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
        width: 12rem;
        padding: 0.5rem 0;
        &.verify {
          width: 22rem;
        }
        div {
          border-right: 2px solid var(--primary-blue);
        }
      }
    }
    td {
      padding: 3rem 0;
      text-align: center;
    }
    td:nth-child(1) {
      width: 10px;
      &.yellow {
        background-color: yellow;
      }
      &.red {
        background-color: red;
      }
      &.green {
        background-color: green;
      }
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
@media screen and (max-width: 768px) {
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
        button {
          font-size: 1rem;
          letter-spacing: 5px;
          background-color: var(--primary-blue);
          color: var(--pale-white);
          width: 6rem;
          height: 2rem;
          border-radius: 3rem;
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
    }
  }
}
</style>
