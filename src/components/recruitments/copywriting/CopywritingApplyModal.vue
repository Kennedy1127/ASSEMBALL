<template>
  <div class="apply">
    <div class="apply_content">
      <h2 class="apply_title">
        <div class="block"></div>
        我要應徵
      </h2>
      <div class="apply_select">
        <h3>選擇模板：</h3>
        <SelectorComponent
          v-model="selectedTemplateNum"
          :options="templates"
          placeholder="系統預設"
        />
      </div>
      <div class="apply_text">
        <textarea
          v-model="computedSelectedTemplate.text"
          maxlength="200"
        ></textarea>
        <div class="apply_text_count">
          {{ computedSelectedTemplate.text.length }}／200
        </div>
      </div>
      <div class="apply_btn">
        <button @click="submitApply">送出</button>
      </div>
    </div>
    <div class="apply_pic">
      <img src="~@/assets/images/recruitment/apply-modal.png" alt="" />
    </div>
    <div class="apply_xmark" @click="closeModal">
      <font-awesome-icon
        :icon="['fas', 'circle-xmark']"
        class="apply_xmark_icon"
      />
    </div>
  </div>
</template>

<script setup>
import SelectorComponent from "@/components/utilities/SelectorComponent.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { auth } from "@/firebase/config";

const route = useRoute();

const emit = defineEmits(["closeModal"]);

const templates = ref([
  {
    id: 0,
    label: "模板 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt accusamus temporibus et deleniti. Quibusdam, laboriosam eum?",
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
const computedSelectedTemplate = computed(() =>
  selectedTemplateNum.value === -1
    ? templates.value[0]
    : templates.value.find(
        (template) => template.id === selectedTemplateNum.value
      )
);

const closeModal = () => {
  emit("closeModal");
};

const submitApply = () => {
  const submitData = {
    copywriting_id: route.params.id,
    user_id: auth.currentUser.uid,
    text: computedSelectedTemplate.value.text,
  };

  console.log(submitData);
};
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
  grid-template-columns: 3fr 2fr;

  @media all and (max-width: 420px) {
    width: 90%;
    height: 90%;
    padding: 1.5rem;

    grid-template-columns: 1fr;
  }

  .block {
    width: 1rem;
    height: 4rem;
    background-color: var(--primary-blue);

    @media all and (max-width: 420px) {
      height: 3rem;
    }
  }

  &_pic {
    justify-self: center;
    align-self: end;

    @media all and (max-width: 420px) {
      display: none;
    }
  }

  &_content {
    display: flex;
    flex-direction: column;
  }

  &_title {
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--secondary-gray-2);

    display: flex;
    align-items: center;
    gap: 3rem;

    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-blue);

    @media all and (max-width: 420px) {
      padding-bottom: 1.5rem;
      gap: 1.5rem;
      font-size: 1.5rem;
    }
  }

  &_select {
    margin-top: 3rem;

    display: flex;
    gap: 2rem;

    @media all and (max-width: 420px) {
      flex-direction: column;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--secondary-gray-1);

      @media all and (max-width: 420px) {
        font-size: 1.25rem;
      }
    }

    .selector-component {
      width: 100%;
    }
  }

  &_text {
    margin-top: 2rem;
    height: 50%;
    position: relative;

    textarea {
      resize: none;
      width: 100%;
      height: 100%;
      border: none;
      padding: 1rem;
      background-color: var(--secondary-blue-4);
      border-radius: var(--round);

      font-weight: 400;
      font-size: 1.25rem;
      color: var(--secondary-gray-3);

      &:focus {
        outline: none;
      }
    }

    &_count {
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;

      font-weight: 400;
      font-size: 1.25rem;
      color: var(--secondary-gray-3);
    }
  }

  &_btn {
    margin-top: 2rem;
    margin-left: auto;

    button {
      width: 200px;
      height: 60px;
      border-radius: 40px;
      background-color: var(--primary-blue);
      transition: all 0.09s ease-in-out;

      text-align: center;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 10px;
      color: #fff;

      &:hover {
        background-color: var(--secondary-blue-1);
      }
    }
  }

  &_xmark {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    @media all and (max-width: 420px) {
      top: 1rem;
      right: 1rem;
    }

    &_icon {
      font-size: 3rem;
      color: var(--primary-blue);
      cursor: pointer;

      @media all and (max-width: 420px) {
        font-size: 2.5rem;
      }
    }
  }
}
</style>
