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
              id="template[0]"
              v-model="item.inputValue"
              required
            />
          </div>
          <div class="MemberCenter_Application_template_content">
            <textarea
              id="Createteam_Introduction"
              cols="50"
              rows="10"
              maxlength="200"
              placeholder="請輸入自我介紹模板內容..."
              @input="updateCharacterCount(item)"
              v-model="item.textareaValue"
              :disabled="item.disabled"
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
            <!-- //刪除
            <span> <font-awesome-icon :icon="['fas', 'trash-can']" /></span> -->
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

const { setData, updateData, setDataSubCollection } = useData();

export default {
  //抓會員模板資料
  async mounted() {
    const res = await this.$store.dispatch("getMemberCenter");
    console.log(res);
    console.log(res.memberApplyDate);
  },

  // async mounted() {
  //   const memberApplyDate = await getDocument("memberApplyDate");
  //   this.id = memberApplyDate.id;
  //   this.inputValue = memberApplyDate.inputValue;
  //   this.textareaValue = memberApplyDate.textareaValue;
  // },

  data() {
    return {
      isTextareaDisabled: true,
      Introductionadd: "",
      /////////
      template: [
        {
          id: 1,
          inputValue: "",
          textareaValue:
            "你好，我叫楊小棒，我以投球精準和多變的球路為傲，並且在比賽中能夠在關鍵時刻保持冷靜。我的優勢是讓對手無法預測我下一球會是什麼，這讓我能夠更有效地控制比賽節奏，並幫助球隊贏得勝利，我希望能加入此球隊，擔任投手一職，透過我的專業技術和熱情，致力於為球隊拿下勝利的獎盃！",
          disabled: true,
        },
        {
          id: 2,
          inputValue: "",
          textareaValue:
            "你好，我叫秦大捕，我擁有優秀的觀察力和洞察力，作為一名優秀的捕手，我在合作中是一名積極的團隊成員，願意分享我的知識和經驗，我相信我的技能和熱情使我成為這個職位的優秀候選人，如果有機會進來球隊，我將非常樂意展示我的技能和經驗。",
          disabled: true,
        },
        {
          id: 3,
          inputValue: "",
          textareaValue:
            "你好，我叫葉子明，我具備優秀的打擊技巧，多年的訓練和比賽經驗讓我磨練出卓越的打擊技巧，包括優秀的揮棒姿勢、準確的擊球時機和靈活的打擊策略。在球場上，我根據場上形勢做出適時的反應，這使我在關鍵時刻能夠發揮出色的表現，我對打擊手這個職位充滿激情，並相信我的技能和潛力會為球隊帶來價值。",
          disabled: true,
        },
      ],
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
    // async loadData() {
    //   const memberApplyDate = await getSubCollectionDocuments({
    //     collectionName: "MEMBERS",
    //     documentId: "eyOD2XSBfUVTXMQRVIKFVQxbKqn2",
    //     subCollectionName: "APPLY",
    //   });
    //   console.log(loadData);

    //   this.id = memberApplyDate.id;
    //   this.inputValue = memberApplyDate.inputValue;
    //   this.textareaValue = memberApplyDate.textareaValue;
    // },
    // async loadData() {
    //   const memberApplyDate = await getSubCollectionDocuments({
    //     collectionName: "MEMBERS",
    //     documentId: "eyOD2XSBfUVTXMQRVIKFVQxbKqn2",
    //     subCollectionName: "APPLY",
    //   });
    //   return memberApplyDate(data);
    // },

    //禁用切換
    toggleDisable(index) {
      this.template[index].disabled = !this.template[index].disabled;
    },

    addTemplate() {
      if (this.template.length >= 5) {
        alert("你只能製作五種模板喔！");
        return;
      }

      const newTemplateId =
        this.template.length > 0
          ? this.template[this.template.length - 1].id + 1
          : 1;

      this.template.push({
        id: newTemplateId,
        inputValue: "",
        textareaValue: this.Introductionadd,
        disabled: true,
      });
    },

    updateCharacterCount(item) {
      item.characterCount = item.textareaValue.length;
    },

    //提交表單
    async submitForm() {
      if (confirm("請問要選擇此模板當作預設嗎？") == true) {
        alert("模板資料儲存成功！");

        // 上傳資料庫更新
        const data = {
          templateId: this.id,
          inputValue: this.inputValue,
          comtent: this.textareaValue,
        };
        console.log(data);

        // await setData("MEMBERS", data);

        // 更改會員預設模板
        await updateData(
          {
            collectionName: "MEMBERS",
            documentId: this.$store.state.user.id,
          },
          data
        );

        // 全部表單資料確認
        this.template.forEach((item) => {
          console.log("模板ID：", item.id);
          console.log("預設模板：", item.inputValue);
          console.log("模板內容：", item.textareaValue);
        });
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
