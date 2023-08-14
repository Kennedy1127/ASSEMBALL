<template>
  <div class="selector-component">
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
//

import { ref, computed, defineProps, defineEmits } from "vue";
import roles from "@/composables/tables/roles";
import area from "@/composables/tables/area";

// Define props
const { placeholder, type, modelValue } = defineProps([
  "placeholder",
  "type",
  "modelValue",
]);

// Define refs for roles and area
const rolesData = ref(roles);
const areaData = ref(area);

// Computed property items
const items = computed(() => {
  return type === "role" ? [...rolesData.value] : [...areaData.value];
});

const emit = defineEmits(["update:modelValue"]);
const onChange = (e) => {
  emit("update:modelValue", e);
};
</script>

<style lang="scss">
.selector-component {
  height: 4rem;
  width: 50%;

  .ivu-select-single {
    // width: fit-content;
    height: 100%;
    .ivu-select-selection:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
    .ivu-select-selection {
      height: 100%;
      border: none;
      // border: 3px solid var(--primary-blue);
      border-radius: 10px;
      color: var(--secondary-blue-2);

      .ivu-select-placeholder {
        color: var(--secondary-blue-2);
      }

      div:first-of-type {
        height: 100%;
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        // justify-content: space-between;

        span {
          height: 100%;
          padding: 0;

          display: flex;
          align-items: center;

          font-family: "Noto Sans TC", "Montserrat", sans-serif;
          font-size: 1.25rem;
          font-weight: 400;
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
            color: var(--secondary-blue-2);
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
