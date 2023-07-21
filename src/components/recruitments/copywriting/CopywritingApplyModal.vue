<template>
  <div class="apply">
    <div class="apply_content">
      <h2 class="apply_title">
        <div class="block"></div>
        我要應徵
      </h2>
      <div class="apply_select">
        <h3>選擇模板:</h3>
        <SelectorComponent
          v-model="selectedTemplateNum"
          :options="templates"
          placeholder="系統預設"
        />
      </div>
      <div class="apply_text"></div>
    </div>
    <div class="apply_pic">
      <img src="~@/assets/images/recruitment/apply-modal.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import SelectorComponent from "@/components/utilities/SelectorComponent.vue";
import { ref } from "vue";

const templates = ref([
  {
    id: 0,
    label: "模板 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt accusamus temporibus et deleniti. Quibusdam, laboriosam eum? Dolor, libero, necessitatibus voluptates assumenda ducimus saepe aspernatur consequuntur iure eius, accusamus rem.",
  },
  {
    id: 1,
    label: "模板 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt accusamus temporibus et deleniti. Quibusdam, laboriosam eum? Dolor, enda ducimus saepe aspernatur consequuntur iure eius, accusamus rem.",
  },
  {
    id: 2,
    label: "模板 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
]);

const selectedTemplateNum = ref(-1);
</script>

<style scoped lang="scss">
.apply {
  width: 60%;
  height: 80%;
  padding: 3rem 4rem;
  border-radius: var(--round);
  background-color: #fff;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-columns: 1fr 1fr;

  .block {
    width: 1rem;
    height: 4rem;
    background-color: var(--primary-blue);
  }

  &_pic {
    justify-self: center;
    align-self: end;
  }

  &_title {
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--secondary-gray-2);

    display: flex;
    align-items: center;
    gap: 3rem;

    font-size: 2.5rem;
    font-weight: 700;
  }

  &_select {
    margin-top: 3rem;

    display: flex;
    gap: 2rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
}
</style>
