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
              />
            </div>
            <!-- //地區 -->
            <div class="MemberCenter_Createteam_form_inner_region">
              <label for="email"><span>*</span>地區：</label>
              <Select
                :model-value="modelValue"
                @on-change="onChange"
                :placeholder="$props.placeholder"
              >
                <Option
                  v-for="item in items"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
            </div>
          </div>
          <div class="MemberCenter_Createteam_form_pic">
            <div><span>*</span>上傳隊徽：</div>
            <label for="Createteam_pic"
              ><img
                src="~@/assets/images/MemberCenter/MemberCenter_Personal_pic.svg"
                alt="MemberCenter_Createteam_form_pic"
              />上傳球隊隊徽
              <input type="file" id="Createteam_pic" />
            </label>
          </div>
        </div>
        <div class="MemberCenter_Createteam_form_Introduction">
          <div><span>*</span>球隊簡介：</div>
          <textarea
            id="Createteam_Introduction"
            cols="60"
            rows="10"
            maxlength="100"
            value
            placeholder="請輸入簡介內容...."
          ></textarea>
        </div>
        <div class="MemberCenter_Createteam_form_btn">
          <input type="submit" value="送出" />
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
      roles,
      area,
    };
  },

  computed: {
    items() {
      return this.$props.type === "role" ? [...this.roles] : [...this.area];
    },
  },

  methods: {
    onChange(e) {
      this.$emit("update:modelValue", e);
    },
    returnPage() {
      this.$emit("return_page");
    },
  },
};
</script>

<style lang="scss">
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
        & label {
          font-size: 1.25rem;
          color: var(--secondary-gray-1);
          font-weight: 400;
          padding-bottom: 1rem;
          padding-right: 30rem;
        }
        & label > span {
          color: var(--accent-red);
        }
        & input {
          border: none;
          border-radius: var(--round);
          background-color: var(--secondary-blue-4);
          padding: 1rem 0;
          padding-left: 1rem;
          font-size: 1.25rem;
        }
        & input:focus {
          outline: 2px solid var(--secondary-blue-1);
          background-color: var(--pale-white);
        }
      }
      &_region {
        display: flex;
        flex-direction: column;
        padding-bottom: 2rem;
        & label {
          font-size: 1.25rem;
          color: var(--secondary-gray-1);
          font-weight: 400;
          padding-bottom: 1rem;
          padding-right: 30rem;
          & span {
            color: var(--accent-red);
          }
        }
      }
    }
    &_pic {
      display: flex;
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
      & label {
        display: flex;
        flex-direction: column;
        text-align: center;
        color: var(--secondary-blue-1);
        border: 2px dashed var(--secondary-blue-1);
        padding: 0 2rem 2rem 2rem;
        padding-bottom: 1rem;
        margin-top: 0.5rem;
        margin-left: 1rem;
        cursor: pointer;
        & img {
          padding: 1rem;
          padding-left: 1.5rem;
          padding-top: 1.8rem;
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
