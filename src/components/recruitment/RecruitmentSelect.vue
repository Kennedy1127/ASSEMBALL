<template>
  <div class="recruitmentSelect-select">
    <Select v-model="model" :placeholder="$props.placeholder">
      <Option v-for="item in items" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>
  </div>
</template>

<script>
export default {
  props: ["placeholder", "type"],
  data() {
    return {
      role: [
        {
          value: 0,
          label: "投手",
        },
        {
          value: 1,
          label: "捕手",
        },
        {
          value: 2,
          label: "一壘手",
        },
        {
          value: 3,
          label: "二壘手",
        },
        {
          value: 4,
          label: "游擊手",
        },
        {
          value: 5,
          label: "三壘手",
        },
        {
          value: 6,
          label: "左外野手",
        },
        {
          value: 7,
          label: "中外野手",
        },
        {
          value: 8,
          label: "右外野手",
        },
      ],
      area: [
        {
          value: 0,
          label: "北部地區",
        },
        {
          value: 1,
          label: "中部地區",
        },
        {
          value: 2,
          label: "南部地區",
        },
        {
          value: 3,
          label: "東部地區",
        },
        {
          value: 4,
          label: "離島地區",
        },
      ],
      model: "",
    };
  },

  computed: {
    items() {
      return this.$props.type === "role" ? [...this.role] : [...this.area];
    },
  },
};
</script>

<style lang="scss">
.recruitmentSelect-select {
  height: 100%;

  .ivu-select-single {
    height: 100%;

    .ivu-select-selection {
      border: none;
      border-left: 3px solid var(--secondary-gray-3);
      height: 100%;
      border-radius: 0;

      div:first-of-type {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;

        span {
          height: 100%;
          padding: 0;

          display: flex;
          align-items: center;

          font-family: "Noto Sans TC", "Montserrat", sans-serif;
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--secondary-gray-3);
        }

        i {
          position: relative;
          top: initial;
          right: initial;
          transform: translateY(0);
          width: 24px;
          height: 24px;

          &::before {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -40%);
            font-size: 2rem;
            color: var(--secondary-gray-3);
          }
        }
      }
    }
  }

  .ivu-select-visible .ivu-select-arrow {
    transform: rotate(180deg) !important;
  }
}
</style>
