<template>
  <section class="MemberCenter_Application">
    <div class="wrapper">
      <div class="MemberCenter_Application_title">
        <div class="block"><span>應徵模板</span></div>
      </div>
      <div class="MemberCenter_Application_describe">
        <div class="MemberCenter_Application_describe_text">系統預設</div>
        <div class="MemberCenter_Application_describe_content">內容撰寫</div>
        <div class="MemberCenter_Application_describe_revise">修改</div>
      </div>
      <form @submit.prevent="submitForm">
        <!-- 渲染模板 -->
        <div
          class="MemberCenter_Application_template"
          v-for="(item, index) in template"
          :key="item.id"
        >
          <div class="MemberCenter_Application_template_tick">
            <input
              type="radio"
              name="template"
              :id="item.templateID"
              v-model="item.inputValue"
              required
              ref="radioModel"
            />
          </div>
          <div class="MemberCenter_Application_template_content">
            <textarea
              :id="item.id"
              cols="50"
              rows="10"
              maxlength="200"
              placeholder="請輸入自我介紹模板內容..."
              @input="updateCharacterCount(item)"
              v-model="item.textareaValue"
              :disabled="!item.disabled"
              ref="inputModel"
            ></textarea>
            <div
              class="MemberCenter_Application_template_content_count"
              style="color: var(--secondary-gray-3)"
            >
              {{ characterCounts[item.id] }}/200
            </div>
          </div>
          <div class="MemberCenter_Application_template_revise">
            <!-- //修改 -->
            <span>
              <font-awesome-icon
                :icon="['fa-solid', 'fa-pen']"
                @click="toggleDisable(index)"
            /></span>
          </div>
        </div>

        <div class="MemberCenter_Application_adddescribe">添加模板</div>
        <div class="MemberCenter_Application_template">
          <div
            class="MemberCenter_Application_template_add"
            @click="addTemplate"
          >
            <font-awesome-icon icon="fa-solid fa-circle-plus" />
          </div>
          <div class="MemberCenter_Application_template_content">
            <textarea
              id="Createteam_Introduction"
              cols="50"
              rows="10"
              maxlength="200"
              value
              placeholder="請輸入自我介紹模板內容..."
              v-model="Introductionadd"
              ref="addModel"
            ></textarea>
            <div
              class="MemberCenter_Application_template_content_count"
              style="color: var(--secondary-gray-3)"
            >
              {{ computedCommentLenAdd }}/200
            </div>
          </div>
          <div class="MemberCenter_Application_template_revise">
            <span> <font-awesome-icon icon="fa-solid fa-pen" /></span>
          </div>
        </div>
        <div class="MemberCenter_Application_btn">
          <input type="submit" value="儲存" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import useData from "@/composables/data/useData";
import getData from "@/composables/data/getData";
import { auth } from "@/firebase/config";

const { getDocuments, getSubCollectionDocuments } = getData();

const { setData, updateData, setDataSubCollection, updateDataSubCollection } =
  useData();

export default {
  //抓會員模板資料
  async mounted() {
    const res = await this.$store.dispatch("getMemberCenter");
    console.log(res);
    // console.log(memberApplyDate);
    this.template = [...res];
  },

  data() {
    return {
      isTextareaDisabled: true,
      Introductionadd: "",
      template: [],
    };
  },

  //數量限制
  computed: {
    remainingTemplates() {
      return 5 - this.template.length;
    },

    characterCounts() {
      return this.template.reduce((acc, item) => {
        acc[item.id] = item.textareaValue.length;
        return acc;
      }, {});
    },

    computedCommentLenAdd() {
      return this.Introductionadd.length;
    },
  },

  methods: {
    //禁用切換
    toggleDisable(index) {
      this.template[index].disabled = !this.template[index].disabled;
    },

    //添加模板資料上傳
    async addTemplate() {
      if (this.template.length >= 4) {
        alert("你只能製作四種模板喔！");
        return;
      }

      const newTemplateId =
        this.template.length > 0
          ? this.template[this.template.length - 1].templateID + 1
          : 0;

      this.template.push({
        id: newTemplateId,
        inputValue: "",
        textareaValue: this.Introductionadd,
        disabled: false,
      });
      console.log(newTemplateId);

      //把新模板上傳到資料庫
      //模板資料確認
      const data = {
        inputValue: "",
        templateID: newTemplateId,
        textareaValue: this.Introductionadd,
      };
      console.log(data);

      await setDataSubCollection(
        {
          collectionName: "MEMBERS",
          documentId: this.$store.state.user.id,
          subCollectionName: "APPLY",
        },
        data
      ); //上傳新模板
    },

    updateCharacterCount(item) {
      item.characterCount = item.textareaValue.length;
    },

    //儲存模板資料
    async submitForm() {
      if (confirm("請問要選擇此模板當作預設嗎？") == true) {
        alert("模板資料儲存成功！");

        const inputDataArray = []; // 儲存按鈕資料

        this.$refs.inputModel.forEach((input) => {
          const data = {
            textareaValue: input.value,
          };
          inputDataArray.push(data);
        });

        console.log(this.$refs.radioModel);

        const mergedDataObject = {}; // 儲存合併的資料

        this.$refs.radioModel.forEach((radioModel, index) => {
          const dataID = this.template.find(
            (template) => template.templateID == radioModel.id
          ).id;
          const isClicked = radioModel.checked; // 檢查按鈕是否點擊
          const radioData = {
            inputValue: isClicked ? radioModel.value : "",
            templateID: index,
          };

          // console.log(dataID)

          const inputData = inputDataArray[index] || { textareaValue: "" };
          // 如果資料不存在，使用默認
          const mergedData = {
            ...inputData,
            ...radioData,
            id: dataID,
          };
          mergedDataObject[index] = mergedData;
        });

        console.log(mergedDataObject); // 合併後資料

        for (let key in mergedDataObject) {
          console.log(mergedDataObject[key]);
          // 更改模板資料;
          await updateDataSubCollection(
            {
              collectionName: "MEMBERS",
              documentId: this.$store.state.user.id,
              subCollectionName: "APPLY",
              subDocumentId: mergedDataObject[key].id,
            },
            mergedDataObject[key]
          );
        }
      } else {
        alert("請再次選擇一種模板。");
      }
    },
  },
};
</script>

<style lang="scss">
.MemberCenter_Application {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  padding-top: 8rem;

  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 3rem 8rem;
    margin-top: 2rem;
    @media all and (max-width: 420px) {
      padding: 2rem 2rem;
    }
  }
  &_title {
    font-size: 1.5rem;
    display: flex;
    gap: 2rem;
    align-content: end;
    align-items: end;
    color: var(--primary-blue);
    font-weight: 600;
    margin-bottom: 3rem;
    & div {
      border-left: 1rem solid var(--primary-blue);
      & span {
        padding-left: 1.5rem;
      }
    }
  }
  &_describe {
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    color: var(--secondary-gray-3);
    padding: 1rem;
    padding-left: 6rem;
    padding-right: 6rem;
    border-bottom: 2px solid var(--secondary-gray-2);
    margin-bottom: 2rem;
    @media all and (max-width: 420px) {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      font-size: 1rem;
    }
  }
  &_template {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-left: 6rem;
    padding-right: 6rem;
    position: relative;
    @media all and (max-width: 420px) {
      padding-left: 0rem;
      padding-right: 0rem;
      align-items: flex-start;
      gap: 1rem;
    }
    &_add {
      font-size: 2rem;
      color: var(--primary-blue);
      padding-left: 1rem;
      cursor: pointer;
      transition: all 0.09s ease-in-out;
      @media all and (max-width: 420px) {
        padding-left: 0rem;
      }
    }
    &_add:hover {
      color: var(--secondary-blue-1);
    }
    &_tick > input {
      appearance: none;
      border: 2px solid var(--secondary-gray-3);
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      position: relative;
      margin-left: 1rem;
      cursor: pointer;
      @media all and (max-width: 420px) {
        margin-left: 0rem;
      }
    }
    &_tick > input:checked::after {
      content: "●";
      font-size: 1.5rem;
      color: var(--primary-blue);
      line-height: 22px;
      position: absolute;
      right: 8%;
      bottom: 14%;
    }
    &_content {
      position: relative;
      & textarea {
        width: 100%;
        font-size: 1rem;
        outline: 0;
        background-color: var(--secondary-blue-4);
        border: 0;
        border-radius: 10px;
        padding: 1rem;
        caret-color: var(--secondary-blue-1);
        padding-left: 1rem;
      }
      textarea:focus {
        outline: 2px var(--secondary-blue-1) solid;
        background-color: var(--pale-white);
      }
      //禁用樣式
      textarea[disabled] {
        background-color: #f8fafc;
        color: var(--secondary-gray-3);
        outline: 1px solid #d4d8dd;
      }
      &_count {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        font-size: 1rem;
        color: var(--secondary-gray-3);

        @media all and (max-width: 420px) {
          right: 1rem;
        }
      }
    }
    &_revise {
      font-size: 1.75rem;
      color: var(--primary-blue);
      padding-left: 1rem;
      cursor: pointer;
      transition: all 0.09s ease-in-out;
      @media all and (max-width: 420px) {
        padding-left: 0rem;
        position: absolute;
        right: 28%;
        bottom: 10%;
        font-size: 1.25rem;
      }
    }
    &_revise:hover {
      color: var(--secondary-blue-1);
    }
  }
  &_adddescribe {
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    color: var(--primary-blue);
    font-weight: 600;
    padding: 1rem;
    padding-left: 6rem;
    padding-right: 6rem;
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 2px solid var(--secondary-gray-2);
    @media all and (max-width: 420px) {
      padding-left: 1rem;
    }
  }
  &_btn {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    margin-top: 1rem;
    & input {
      padding: 1rem 6rem;
      border-radius: 2rem;
      color: var(--secondary-gray-1);
      font-weight: 400;
      font-size: 1.25rem;
      letter-spacing: 3px;
      background-color: var(--primary-blue);
      color: var(--pale-white);
      font-family: "Noto Sans TC";
      box-shadow: var(--shadow-heavy);
      transition: all 0.09s ease-in-out;
      margin-bottom: 1.5rem;
      margin-top: 1rem;
      cursor: pointer;
    }
    & input:hover {
      background-color: var(--secondary-blue-1);
    }
  }
}
</style>
