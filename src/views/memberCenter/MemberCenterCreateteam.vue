<template>
  <section class="MemberCenter_Createteam">
    <div class="wrapper">
      <div class="MemberCenter_Createteam_title">
        <div class="block"><span>創立球隊</span></div>
      </div>
      <!-- //表單 -->
      <form
        action=""
        method="post"
        name="CreateteamInformation"
        class="MemberCenter_Createteam_form"
        @submit.prevent="submitForm"
      >
        <div>
          <div class="MemberCenter_Createteam_form_inner">
            <div class="MemberCenter_Createteam_form_inner_name">
              <label for="name"><span>*</span>球隊名稱：</label>
              <input
                type="text"
                name="team_name"
                id="name"
                placeholder="請輸入球隊名稱"
                v-model="teamName"
                minlength="1"
                maxlength="10"
                pattern="[^%&',;=?$\x22]+"
                required
              />
              <div
                class="MemberCenter_Createteam_form_inner_name_count"
                style="color: var(--secondary-gray-3)"
              >
                {{ computedCommentLenName }}/10
              </div>
            </div>
            <!-- //地區 -->
            <div class="MemberCenter_Createteam_form_inner_region">
              <label for="email">地區：</label>
              <Select
                :model-value="modelValue"
                @on-change="onChange"
                placeholder="全部地區"
                v-model="region"
                required
              >
                <Option
                  v-for="item in items"
                  :value="item.value"
                  :key="item.value"
                  required
                  >{{ item.label }}</Option
                >
              </Select>
            </div>
          </div>
          <div class="MemberCenter_Createteam_form_pic">
            <div>上傳隊徽：</div>
            <img :src="avatar" alt="Createteam_form_pic" />
            <label for="Createteam_pic"
              ><span><font-awesome-icon icon="fa-solid fa-plus" /></span
              >上傳隊徽 <input type="file" id="Createteam_pic" @change="onfile"
            /></label>
          </div>
        </div>
        <div class="MemberCenter_Createteam_form_Introduction">
          <div><span>*</span>球隊簡介：</div>
          <textarea
            id="Createteam_Introduction"
            cols="60"
            rows="10"
            v-model="CreateteamIntroduction"
            maxlength="200"
            value
            placeholder="請輸入簡介內容..."
            required
            @input="validateIntroduction"
          ></textarea>
          <div
            class="MemberCenter_Createteam_form_Introduction_count"
            style="color: var(--secondary-gray-3)"
          >
            {{ computedCommentLen }}/200
          </div>
        </div>
        <div class="MemberCenter_Createteam_form_btn">
          <input type="submit" value="送出" />
        </div>
        <div
          v-if="!isIntroductionValid"
          class="error"
          style="color: var(--accent-red)"
        >
          {{ IntroductionError }}
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import roles from "@/composables/tables/roles";
import area from "@/composables/tables/area";

export default {
  props: ["placeholder", "type", "modelValue"],

  data() {
    return {
      // 表單資料
      avatar: require("@/assets/images/icons/default_avatar.svg"),
      teamName: "",
      CreateteamIntroduction: "",
      region: "",
      //表單錯誤訊息
      IntroductionError: "",
      ////////////////////
      roles,
      area,
    };
  },

  computed: {
    items() {
      return this.$props.type === "role" ? [...this.roles] : [...this.area];
    },
    //數字限制
    computedCommentLen() {
      return this.CreateteamIntroduction.length;
    },
    computedCommentLenName() {
      return this.teamName.length;
    },
  },

  methods: {
    onChange(e) {
      this.$emit("update:modelValue", e);
    },
    returnPage() {
      this.$emit("return_page");
    },

    //圖片設定
    onfile(event) {
      this.file = event.target.files[0];
      let filereader = new FileReader();
      filereader.readAsDataURL(this.file);
      filereader.addEventListener("load", () => {
        this.avatar = filereader.result;
        console.warn(this.avatar);
      });
    },

    // 驗證

    //提交表單
    submitForm() {
      if (this.CreateteamIntroduction.length < 10) {
        this.IntroductionError = "親愛的球友，球隊簡介至少需要10個字喔！";
        return;
      }
      this.IntroductionError = "";

      alert("球隊資料提交成功！");
      // 表單資料確認
      console.log("球隊名稱：", this.teamName);
      console.log("地區：", this.region);
      console.log("球隊隊徽：", this.avatar);
      console.log("球隊簡介：", this.CreateteamIntroduction);

      //提交後重置表單資料
      this.teamName = "";
      this.region = "";
      this.avatar = require("@/assets/images/icons/default_avatar.svg");
      this.CreateteamIntroduction = "";
    },
  },
};
</script>

<style lang="scss">
.error {
  margin: auto;
  padding-top: 0.5rem;
  padding-left: 0.25rem;
  color: var(--accent-red);
  font-size: 1rem;
}

.MemberCenter_Createteam {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  padding-top: 8rem;
  &_backlink {
    width: 100%;
    padding: 0 8rem;
    margin: auto;
    & a {
      display: inline-block;
      color: var(--primary-blue);
      font-size: 1.25rem;
      font-weight: 500;
      padding-bottom: 0.5rem;
      cursor: pointer;
      & span {
        color: var(--primary-blue);
        font-size: 1.25rem;
        padding-right: 0.5rem;
      }
    }
  }
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

  &_form {
    display: flex;
    flex-direction: column;
    // & div {
    //   display: flex;
    //   // justify-content: space-between;
    // }
    &_inner {
      display: flex;
      flex-direction: column;
      &_name {
        display: flex;
        flex-direction: column;
        padding-bottom: 2rem;
        position: relative;
        & label {
          font-size: 1.25rem;
          color: var(--secondary-gray-1);
          font-weight: 400;
          padding-bottom: 1rem;
          padding-right: 30rem;
          @media all and (max-width: 420px) {
            padding-right: 0rem;
          }
        }
        & label > span {
          color: var(--accent-red);
        }
        & input {
          border: none;
          height: 3rem;
          border-radius: var(--round);
          background-color: var(--secondary-blue-4);
          padding: 0.5rem 0;
          padding-left: 1rem;
          font-size: 1.25rem;
        }
        & input:focus {
          outline: 2px solid var(--secondary-blue-1);
          background-color: var(--pale-white);
        }
        &_count {
          position: absolute;
          bottom: 2.5rem;
          right: 1.5rem;
          font-size: 1.25rem;
          color: var(--secondary-gray-3);

          @media all and (max-width: 420px) {
            right: 1rem;
          }
        }
      }
      &_region {
        display: flex;
        flex-direction: column;
        padding-bottom: 2rem;
        // 地區篩選框更改
        .ivu-select-single {
          height: 100%;

          .ivu-select-selection {
            height: 100%;
            border: 2px solid var(--secondary-blue-2);
            border-radius: 10px;
            color: var(--secondary-blue-2);

            .ivu-select-placeholder {
              color: var(--secondary-blue-2);
            }

            div:first-of-type {
              height: 100%;
              padding: 0.5rem 1.5rem;
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
        & label {
          font-size: 1.25rem;
          color: var(--secondary-gray-1);
          font-weight: 400;
          padding-bottom: 1rem;
          padding-right: 30rem;
          @media all and (max-width: 420px) {
            padding-right: 0rem;
          }
          & span {
            color: var(--accent-red);
          }
        }
      }
    }
    &_pic {
      display: flex;
      flex-direction: column;
      padding-bottom: 2rem;
      & div {
        font-size: 1.25rem;
        color: var(--secondary-gray-1);
        font-weight: 400;
        padding-bottom: 1rem;
        & span {
          color: var(--accent-red);
        }
      }
      & img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        @media all and (max-width: 420px) {
          width: 100px;
          height: 100px;
        }
      }
      & label {
        margin-left: 0.5rem;
        display: flex;
        width: 8rem;
        text-align: center;
        color: var(--secondary-blue-1);
        padding: 0.5rem 1rem 0.5rem 1rem;
        margin-top: 1rem;
        font-weight: 500;
        border: 2px dashed var(--secondary-blue-1);
        cursor: pointer;
        @media all and (max-width: 420px) {
          margin-left: 0rem;
        }
        & input {
          display: none;
        }
      }
      & label:hover {
        background-color: var(--secondary-blue-4);
      }
    }
    &_Introduction {
      position: relative;
      & div {
        font-size: 1.25rem;
        color: var(--secondary-gray-1);
        font-weight: 400;
        padding-bottom: 1rem;
        & span {
          color: var(--accent-red);
        }
      }
      & textarea {
        width: 100%;
        font-size: 1.25rem;
        line-height: 1.75;
        outline: 0;
        background-color: var(--secondary-blue-4);
        border: 0;
        border-radius: 10px;
        padding: 1rem;
        caret-color: var(--secondary-blue-1);
        padding-left: 1rem;
        margin-bottom: 1rem;
      }
      textarea:focus {
        outline: 2px var(--secondary-blue-1) solid;
        background-color: var(--pale-white);
      }
      &_count {
        position: absolute;
        bottom: 1rem;
        right: 1.5rem;
        font-size: 1rem;
        color: var(--secondary-gray-3);

        @media all and (max-width: 420px) {
          right: 1rem;
        }
      }
    }
    &_btn {
      display: flex;
      justify-content: center;
      padding: 1rem 0;
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
}
</style>
