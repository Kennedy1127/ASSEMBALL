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

<script setup>
import roles from "@/composables/tables/roles";
import area from "@/composables/tables/area";
import { computed } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  modelValue: {
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const items = computed(() => {
  return props.type === "role" ? [...roles] : [...area];
});

const onChange = (e) => {
  emit("update:modelValue", e);
};
</script>

<style lang="scss">
.recruitmentSelect-select {
  height: 100%;

  .ivu-select-single {
    height: 100%;

    .ivu-select-dropdown {
      background-color: #fff;
    }

    .ivu-select-selection {
      border: none;
      border-left: 3px solid var(--secondary-gray-3);
      height: 100%;
      border-radius: 0;

      @media all and (max-width: 420px) {
        border-left: none;
      }

      div:first-of-type {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;

        @media all and (max-width: 420px) {
          padding: 0 0.5rem;
          gap: 0.5rem;
        }

        span {
          height: 100%;
          padding: 0;

          display: flex;
          align-items: center;

          font-family: "Noto Sans TC", "Montserrat", sans-serif;
          font-size: 1.5rem;
          font-weight: 400;

          @media all and (max-width: 420px) {
            font-size: 1rem;
          }
        }

        i {
          position: relative;
          top: initial;
          right: initial;
          transform: translateY(0);
          width: 24px;
          height: 24px;

          @media all and (max-width: 420px) {
            width: 20px;
            height: 20px;
          }

          &::before {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -40%);
            font-size: 2rem;
            color: var(--secondary-gray-3);

            @media all and (max-width: 420px) {
              font-size: 1rem;
            }
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
