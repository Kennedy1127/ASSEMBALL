<template>
  <div class="selector-component">
    <Select
      :model-value="modelValue"
      :placeholder="placeholder"
      @on-change="onChange"
    >
      <Option v-for="item in options" :value="item.id" :key="item.id">{{
        item.label
      }}</Option>
    </Select>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
  modelValue: {
    type: Number,
    required: true,
  },
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
    height: 100%;

    .ivu-select-selection {
      height: 100%;
      border: 3px solid var(--secondary-blue-2);
      border-radius: 10px;
      color: var(--secondary-blue-2);

      .ivu-select-placeholder {
        color: var(--secondary-blue-2);
      }

      div:first-of-type {
        height: 100%;
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

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
