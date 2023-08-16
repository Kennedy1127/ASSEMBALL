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
          :disabled="templates.length === 0"
        />
      </div>
      <div class="apply_text">
        <textarea
          v-model="selectedTemplateText"
          maxlength="200"
          placeholder="向你應徵的球隊介紹一點自己吧！"
        ></textarea>
        <div class="apply_text_count">
          {{ selectedTemplateText.length }}／200
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
import { auth, timestamp } from "@/firebase/config";
import useData from "@/composables/data/useData";
import getData from "@/composables/data/getData";
import { onMounted, ref, watchEffect, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import store from "@/store";

const team_id = inject("data").value.team_id;
const auth_id = inject("data").value.team_user;

const route = useRoute();
const router = useRouter();
const emit = defineEmits(["closeModal"]);
const { setData, setDataSubCollection } = useData();
const { getSubCollectionDocuments } = getData();

onMounted(async () => {
  const res = await getSubCollectionDocuments({
    collectionName: "MEMBERS",
    documentId: store.state.user.id,
    subCollectionName: "APPLY",
  });

  res.forEach((template) => {
    template.id = template.templateID;
    template.label = `模板 ${template.templateID + 1}`;
    template.text = template.textareaValue;

    if (template.inputValue) {
      selectedTemplateNum.value = template.templateID;
      selectedTemplateText.value = template.textareaValue;
    }
  });

  templates.value = [...res];
});

const templates = ref([]);
const selectedTemplateNum = ref(-1);
const selectedTemplateText = ref("");

watchEffect(() => {
  selectedTemplateText.value = templates.value[selectedTemplateNum.value]
    ? templates.value[selectedTemplateNum.value].textareaValue
    : "";
});

const closeModal = () => {
  emit("closeModal");
};

const submitApply = async () => {
  store.state.isPending = true;

  const submitData = {
    copywriting_id: route.params.id,
    user_id: auth.currentUser.uid,
    text: selectedTemplateText.value,
    date: timestamp,
    status: 0,
    team_id: team_id,
  };

  const id = await setData("APPLYS", submitData);

  await setDataSubCollection(
    {
      collectionName: "MEMBERS",
      documentId: auth_id,
      subCollectionName: "NOTIFY",
    },
    {
      date: timestamp,
      title: `${
        store.state.user.lastname + store.state.user.firstname
      }要求加入球隊`,
      text: `${
        store.state.user.lastname + store.state.user.firstname
      }想加入球隊，讓我們期待他吧`,
      read: false,
      status: true,
      type: 0,
      apply_id: id,
    }
  );

  router.push({ name: "Recruitments" });
  store.state.isPending = false;
};
</script>

<style lang="scss">
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
      .ivu-select-single .ivu-select-selection {
        border: 3px solid var(--secondary-blue-1);

        div:first-of-type {
          justify-content: space-between;

          span {
            color: var(--secondary-gray-3);
          }

          i {
            &::before {
              color: var(--secondary-blue-1);
            }
          }
        }
      }
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
