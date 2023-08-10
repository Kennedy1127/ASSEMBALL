<template>
  <form @submit.prevent="handleSubmit" class="recruitment_post_form">
    <div class="recruitment_post_form_item">
      <label
        for="recruitment_post_title"
        class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>徵人標題：
      </label>
      <div class="recruitment_post_form_item_inputGroup">
        <input
          v-model="copywritingName"
          type="text"
          id="recruitment_post_title"
          class="recruitment_post_form_item_input"
          maxlength="10"
          value
        />
        <div class="text-count">({{ computedCopywritingTitleNameLen }}/10)</div>
      </div>
    </div>

    <div class="recruitment_post_form_item">
      <label
        for="recruitment_post_level"
        class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>經歷：
      </label>
      <div class="recruitment_post_form_item_select">
        <SelectorComponent
          :options="level"
          v-model="exp"
          placeholder="選擇經歷"
        />
      </div>
    </div>

    <div class="recruitment_post_form_item">
      <label
        for="recruitment_post_player"
        class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>職缺：
      </label>
      <div class="recruitment_post_form_item_select">
        <SelectorComponent
          :options="player"
          v-model="role"
          placeholder="選擇職缺"
        />
      </div>
    </div>

    <div class="recruitment_post_form_item">
      <label
        for="recruitment_post_loation"
        class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>所在地區(縣市)：
      </label>
      <div class="recruitment_post_form_item_select">
        <SelectorComponent
          :options="location"
          v-model="area"
          placeholder="選擇縣市"
        />
      </div>
    </div>

    <div class="recruitment_post_form_item">
      <label
        for="recruitment_post_info"
        class="recruitment_post_form_label_title"
        ><span class="requiredMark">*</span>職缺說明：
      </label>
      <div class="recruitment_post_form_item_inputGroup">
        <textarea
          v-model="copywritingInfo"
          id="recruitment_post_info"
          cols="30"
          rows="8"
          maxlength="100"
          value
        >
        </textarea>
        <div class="text-count">({{ computedcopywritingInfoLen }}/100)</div>
      </div>
    </div>
    <div class="recruitment_post_form_item">
      <p v-if="error" class="recruitment_post_form_item_error">
        {{ error }}
      </p>

      <div class="recruitment_post_form_btn">
        <!-- <button>取消</button> -->
        <button>刪除</button>
        <button>上傳</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import SelectorComponent from "@/components/utilities/SelectorComponent.vue";
import useData from "@/composables/data/useData";
import { timestamp } from "@/firebase/config";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const { setData } = useData();

const copywritingName = ref("");
const copywritingInfo = ref("");

const exp = ref(-1);
const role = ref(-1);
const area = ref(-1);

const level = ref([
  {
    id: "0",
    label: "初心者",
  },
  {
    id: "1",
    label: "新手",
  },
  {
    id: "2",
    label: "老手",
  },
  {
    id: "3",
    label: "經歷不拘",
  },
]);
const location = ref([
  {
    id: "不限地區",
    label: "不限地區",
  },
  {
    id: "基隆市",
    label: "基隆市",
  },
  {
    id: "台北市",
    label: "台北市",
  },
  {
    id: "新北市",
    label: "新北市",
  },
  {
    id: "桃園市",
    label: "桃園市",
  },
  {
    id: "新竹縣",
    label: "新竹縣",
  },
  {
    id: "新竹市",
    label: "新竹市",
  },
  {
    id: "苗栗縣",
    label: "苗栗縣",
  },
  {
    id: "台中市",
    label: "台中市",
  },
  {
    id: "彰化縣",
    label: "彰化縣",
  },
  {
    id: "南投縣",
    label: "南投縣",
  },
  {
    id: "雲林縣",
    label: "雲林縣",
  },
  {
    id: "嘉義縣",
    label: "嘉義縣",
  },
  {
    id: "嘉義市",
    label: "嘉義市",
  },
  {
    id: "台南市",
    label: "台南市",
  },
  {
    id: "高雄市",
    label: "高雄市",
  },

  {
    id: "屏東縣",
    label: "屏東縣",
  },
  {
    id: "宜蘭縣",
    label: "宜蘭縣",
  },
  {
    id: "花蓮縣",
    label: "花蓮縣",
  },
  {
    id: "台東縣",
    label: "台東縣",
  },
  {
    id: "澎湖縣",
    label: "澎湖縣",
  },
]);

const player = ref([
  {
    id: -2,
    label: "全部位置",
  },
  {
    id: 0,
    label: "投手",
  },
  {
    id: 1,
    label: "捕手",
  },
  {
    id: 2,
    label: "一壘手",
  },
  {
    id: 3,
    label: "二壘手",
  },
  {
    id: 4,
    label: "游擊手",
  },
  {
    id: 5,
    label: "三壘手",
  },
  {
    id: 6,
    label: "左外野手",
  },
  {
    id: 7,
    label: "中外野手",
  },
  {
    id: 8,
    label: "右外野手",
  },
]);
const error = ref(null);

// -- 取得標題的字串長度
const computedCopywritingTitleNameLen = computed(
  () => copywritingName.value.length
);
const computedcopywritingInfoLen = computed(() => copywritingInfo.value.length);

const checkSubmitData = () => {
  error.value = null;

  if (!copywritingName.value) {
    return (error.value = "請輸入徵人標題");
  }

  if (exp.value === -1) {
    return (error.value = "請選擇經歷");
  }

  if (role.value === -1) {
    return (error.value = "請選擇職缺");
  }

  if (area.value === -1) {
    return (error.value = "請選擇所在地區");
  }

  if (!copywritingInfo.value) {
    return (error.value = "請輸入職缺說明!");
  }
};

const handleSubmit = async () => {
  checkSubmitData();
  if (error.value) return;

  const submitData = {
    title: copywritingName.value,
    exp: exp.value,
    area: area.value,
    role: role.value,
    intro: copywritingInfo.value,
    date: timestamp,
    teamid: store.state.user.team_id,
  };
  await setData("COPYWRITINGS", submitData);
  alert("新增成功!");
  router.push({ name: "Recruitments" });
  //  params: { team_id: team_id }
};
</script>

<style lang="scss">
.recruitment_post_form {
  &_label {
    &_title {
      display: block;
      width: 200px;
      text-align: right;
      font-size: 1.25rem;
      color: var(--input-label-gray);
      margin-bottom: 4rem;
      .requiredMark {
        color: var(--caution-red);
      }
    }
  }
  // 表單的item
  &_item {
    position: relative;
    &_error {
      position: absolute;
      font-size: 1rem;
      color: var(--caution-red);
      right: 0;
      top: 2rem;
      transform: translate(0, -50%);
    }
    display: flex;
    label {
      width: 12rem;
      margin-right: 1rem;
    }
    &_inputGroup {
      position: relative;
      .text-count {
        position: absolute;
        // top: 1.5rem;
        right: 0.5rem;
        transform: translate(0, -50%);
        color: var(--secondary-gray-3);
      }
    }
    &:nth-child(1) .text-count {
      top: 1.5rem;
    }

    &:nth-child(5) .text-count {
      height: fit-content;
      bottom: 0.5rem;
    }

    &_input {
      width: 100%;
      border-radius: 10px;
      height: 3rem;
      font-size: 1.25rem;
      padding: 0.5rem;
      background-color: var(--secondary-blue-4);
      caret-color: var(--secondary-blue-1);
      border: 0;
      margin-bottom: 3rem;
      padding-left: 1rem;
    }
    &_input:focus {
      outline: 2px var(--secondary-blue-1) solid;
      background-color: var(--pale-white);
    }
    &_input::placeholder {
      text-align: right;
      line-height: 25rem;
    }
    select {
      width: 14rem;
      border-radius: 10px;
      border: 2px solid var(--secondary-blue-1);
      color: var(--secondary-blue-1);
      font-size: 1.5rem;
      outline: 0;
      margin-bottom: 3.2rem;
    }

    &_select {
      .selector-component {
        width: 100%;
        height: 50px;

        .ivu-select-single {
          .ivu-select-selection {
            border: 3px solid var(--secondary-blue-1);
            border-radius: 10px;
            color: var(--secondary-blue-1);

            div:first-of-type {
              span {
                height: 2rem;
                margin-right: 0.5rem;
              }
              i {
                &::before {
                  color: var(--secondary-blue-1);
                }
              }
            }
            .ivu-select-placeholder {
              color: var(--secondary-gray-3);
            }
          }
        }
      }

      // div:first-of-type {
      //   padding: 0.5rem 1rem;

      // }
    }
    textarea {
      width: 100%;
      font-size: 1.25rem;
      line-height: 1.75;
      outline: 0;
      background-color: var(--secondary-blue-4);
      border: 0;
      border-radius: 10px;
      padding: 0.5rem;
      caret-color: var(--secondary-blue-1);
      padding-left: 1rem;
    }
    textarea::placeholder {
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
    }
    textarea:focus {
      outline: 2px var(--secondary-blue-1) solid;
      background-color: var(--pale-white);
    }
  }
  &_btn {
    width: 100%;
    margin: auto;
    margin-top: 4rem;
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    font-size: 1.25rem;
    button {
      width: 150px;
      // width: 10rem;
      height: 3rem;
      border-radius: 10px;
    }
    & button:nth-child(n) {
      border-radius: 10px;
      font-weight: 500;
      border: 0;
    }
    // & button:nth-child(3) {
    //   border: 2px solid;
    //   border-color: var(--secondary-gray-3);
    //   color: var(--secondary-gray-3);
    //   background-color: #fff;
    // }
    & button:nth-child(2) {
      background-color: var(--primary-blue);
      color: var(--pale-white);
    }
    & button:nth-child(1) {
      background-color: var(--error-yellow);
      color: var(--secondary-gray-1);
    }
  }
}

@media screen and (max-width: 420px) {
  .recruitment_post_form_btn {
    margin: auto;
  }
}

@media screen and (max-width: 420px) {
  .recruitment_post_form {
    &_item {
      display: block;
      margin-bottom: 1rem;
      &_input,
      select,
      textarea {
        width: 100%;
        margin-bottom: 0;
      }
    }
    &_label {
      &_title {
        // display: block;
        // width: 200px;
        text-align: initial;
        // font-size: 1.25rem;
        // color: var(--input-label-gray);
        margin-bottom: 0.5rem;
      }
    }

    &_btn {
      display: block;
      button {
        width: 100%;
        // !important
      }
      & button:nth-child(2) {
        margin: 1.25rem 0;
      }
    }
  }
}
</style>
<!-- &_select {
        width: 30%;
        .selector-component {
          width: 100%;
          height: 50px;

          .ivu-select-selection {
            border: 2px solid var(--secondary-blue-1);

            color: (--secondary-blue-1);

            .ivu-select-placeholder {
              color: var(--secondary-blue-1);
            }

            div:first-of-type {
              padding: 0.5rem 1rem;

              i {
                &::before {
                  color: var(--secondary-blue-1);
                }
              }
            }
          }
        }
      } -->
