<template>
  <div class="recruitmentSelect-select">
    <Select
      :model-value="modelValue"
      @on-change="onChange"
      :placeholder="$props.placeholder"
    >
      <Option v-for="item in items" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>
  </div>
</template>

<script>
import roles from "@/composables/tables/roles";
import area from "@/composables/tables/area";

export default {
  props: ["placeholder", "type", "modelValue"],

  data() {
    return {
      roles,
      area,
    };
  },

  computed: {
    items() {
      return this.$props.type === "role" ? [...this.roles] : [...this.area];
    },
  },

  methods: {
    onChange(e) {
      this.$emit("update:modelValue", e);
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
          // color: var(--secondary-gray-3);
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
