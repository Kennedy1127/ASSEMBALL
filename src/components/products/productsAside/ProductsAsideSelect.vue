<template>
  <div class="products_aside_search_select">
    <SelectorComponent
      placeholder="日期排序"
      :options="datesOrder"
      v-model="selectedDate"
    />
  </div>
</template>

<script setup>
import SelectorComponent from "@/components/utilities/SelectorComponent.vue";
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const selectedDate = ref(store.state.selectedProductsDate);

watch(selectedDate, (val) => {
  emit("update:modelValue", val);
});

const datesOrder = ref([
  {
    id: 0,
    label: "由舊到新",
  },
  {
    id: 1,
    label: "由新到舊",
  },
]);
</script>

<style lang="scss">
.products_aside_search_select {
  .selector-component {
    width: 100%;

    .ivu-select-selection {
      border: 2px solid var(--secondary-blue-2);
      color: var(--primary-black);

      .ivu-select-placeholder {
        color: var(--secondary-gray-3);
        font-size: 1rem !important;
      }

      .ivu-select-selected-value {
        font-size: 1rem !important;
      }

      div:first-of-type {
        padding: 1.25rem 1rem;

        i::before {
          color: var(--primary-blue);
        }
      }
    }

    .ivu-select-item-selected {
      color: var(--primary-black);
    }
  }
}
</style>
