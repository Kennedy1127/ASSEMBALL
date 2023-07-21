<template>
  <section class="MemberPersonal">
    <div class="MemberPersonal_return" @click="returnPage">
      <div>
        <span><font-awesome-icon icon="fa-solid fa-angle-left" /></span>返回
      </div>
    </div>
    <div class="MemberPersonal_member">
      <div class="MemberPersonal_member_title">個人資料</div>
    </div>
    <form
      action=""
      method="post"
      name="personalInformation"
      class="MemberPersonal_form"
    >
      <!-- 會員頭像 -->
      <div class="MemberPersonal_form_pic">
        <div class="MemberPersonal_form_pic_btn">
          <label for="member_pic"
            ><img
              src="~@/assets/images/MemberCenter/MemberCenter_Personal_pic.svg"
              alt="MemberCenter_Personal_pic"
            />上傳頭像
            <input type="file" id="member_pic" />
          </label>
        </div>
      </div>
      <div class="MemberPersonal_form_lastname">
        <label for="lastname">姓氏：</label>
        <input
          type="text"
          name="member_lastname"
          id="lastname"
          placeholder="請輸入姓氏"
        />
      </div>
      <div class="MemberPersonal_form_name">
        <label for="name">名字：</label>
        <input
          type="text"
          name="member_name"
          id="name"
          placeholder="請輸入名字"
        />
      </div>
      <div class="MemberPersonal_form_email">
        <label for="email">信箱：</label>
        <input
          type="text"
          name="member_email"
          id="email"
          placeholder="請輸入電子信箱"
        />
      </div>
      <!-- //地區篩選 -->
      <div class="MemberPersonal_form_region">
        <label for="email">地區：</label>
        <Select
          :model-value="modelValue"
          @on-change="onChange"
          :placeholder="$props.placeholder"
        >
          <Option v-for="item in items" :value="item.value" :key="item.value">{{
            item.label
          }}</Option>
        </Select>
      </div>

      <div class="MemberPersonal_form_experience">
        <div class="MemberPersonal_form_experience_nood">
          <input type="radio" name="experience" value="初新者" id="nood" />
          <label for="nood">初新者</label>
        </div>
        <div class="MemberPersonal_form_experience_new">
          <input type="radio" name="experience" value="新手" id="new" />
          <label for="new">新手</label>
        </div>
        <div class="MemberPersonal_form_experience_rookie">
          <input type="radio" name="experience" value="老手" id="rookie" />
          <label for="rookie">老手</label>
        </div>
      </div>
      <div class="MemberPersonal_form_btn">
        <input type="submit" value="儲存" />
      </div>
    </form>
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

<style scoped lang="scss">
//地區篩選框更
.ivu-select-selection {
  border: 2px solid #111111;
  border-left: 3px solid var(--secondary-gray-3);
  height: 100%;
  border-radius: 0;

  div:first-of-type {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    span {
      height: 100%;
      padding: 0;

      display: flex;
      align-items: center;

      font-family: "Noto Sans TC", "Montserrat", sans-serif;
      font-size: 1.5rem;
      font-weight: 400;
      // color: var(--secondary-gray-3);
    }

    i {
      position: relative;
      top: initial;
      right: initial;
      transform: translateY(0);
      width: 24px;
      height: 24px;
      color: var(--secondary-blue-1);

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        font-size: 2rem;
        color: var(--secondary-blue-1);
      }
    }
  }

  .ivu-select-visible .ivu-select-arrow {
    transform: rotate(180deg) !important;
  }
}

.MemberPersonal {
  position: fixed;
  z-index: 100;
  top: 6.5rem;
  left: 73.9%;
  border-radius: var(--round);
  box-shadow: var(--shadow-heavy);
  width: 100%;
  max-width: 25%;
  background-color: var(--pale-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  max-height: 85vh;
  overflow-y: scroll;
  &_return {
    width: 100%;
    & div {
      display: inline-block;
      padding-left: 1rem;
      color: var(--primary-blue);
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      & span {
        color: var(--primary-blue);
        font-size: 1.25rem;
        padding-right: 0.5rem;
      }
    }
  }
  &_member {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    position: relative;
    &_title {
      text-align: center;
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--primary-blue);
    }
  }
  &_member::after {
    content: "";
    position: absolute;
    top: 100%;
    width: 2.5rem;
    height: 5px;
    background-color: var(--primary-blue);
  }
  //表單
  &_form {
    display: flex;
    flex-direction: column;
    width: 80%;
    &_pic {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 1rem;
      &_btn {
        padding: 2rem 0;
        & label {
          display: flex;
          flex-direction: column;
          text-align: center;
          color: var(--secondary-blue-1);
          border: 2px dashed var(--secondary-blue-1);
          padding: 0 0.5rem;
          padding-bottom: 1rem;
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
    }
    &_lastname {
      display: flex;
      flex-direction: column;
      padding-bottom: 0.5rem;
      & label {
        font-size: 1rem;
        color: var(--secondary-gray-1);
        font-weight: 400;
        padding-bottom: 0.5rem;
      }
      & input {
        border: none;
        border-radius: var(--round);
        background-color: var(--secondary-blue-4);
        padding: 0.5rem 0;
        padding-left: 0.5rem;
      }
      & input:focus {
        outline: 2px solid var(--secondary-blue-1);
        background-color: var(--pale-white);
      }
    }
    &_name {
      display: flex;
      flex-direction: column;
      padding-bottom: 0.5rem;
      & label {
        font-size: 1rem;
        color: var(--secondary-gray-1);
        font-weight: 400;
        padding-bottom: 0.5rem;
      }
      & input {
        border: none;
        border-radius: var(--round);
        background-color: var(--secondary-blue-4);
        padding: 0.5rem 0;
        padding-left: 0.5rem;
      }
      & input:focus {
        outline: 2px solid var(--secondary-blue-1);
        background-color: var(--pale-white);
      }
    }
    &_email {
      display: flex;
      flex-direction: column;
      padding-bottom: 0.5rem;
      & label {
        font-size: 1rem;
        color: var(--secondary-gray-1);
        font-weight: 400;
        padding-bottom: 0.5rem;
      }
      & input {
        border: none;
        border-radius: var(--round);
        background-color: var(--secondary-blue-4);
        padding: 0.5rem 0;
        padding-left: 0.5rem;
      }
      & input:focus {
        outline: 2px solid var(--secondary-blue-1);
        background-color: var(--pale-white);
      }
    }
    &_region {
      display: flex;
      flex-direction: column;
      padding-bottom: 0.5rem;
      & label {
        font-size: 1rem;
        color: var(--secondary-gray-1);
        font-weight: 500;
        padding-bottom: 0.5rem;
      }
    }
    &_experience {
      display: flex;
      flex-wrap: wrap;
      &_nood {
        display: flex;
        padding: 0.5rem 0.5rem 0.5rem 0;
        & input {
          appearance: none;
          border: 1px solid #999;
          border-radius: 50%;
          width: 1.2rem;
          height: 1.2rem;
          position: relative;
        }
        & input:checked::after {
          content: "●";
          font-size: 10px;
          color: var(--secondary-blue-2);
          line-height: 19px;
          position: relative;
          right: -15%;
          bottom: 14%;
        }
        & label {
          padding-left: 0.5rem;
          color: var(--secondary-gray-1);
        }
      }
      &_new {
        display: flex;
        padding: 0.5rem 0.5rem 0.5rem 0;
        & input {
          appearance: none;
          border: 1px solid #999;
          border-radius: 50%;
          width: 1.2rem;
          height: 1.2rem;
        }
        & input:checked::after {
          content: "●";
          font-size: 10px;
          color: var(--secondary-blue-2);
          line-height: 19px;
          position: relative;
          right: -15%;
          bottom: 14%;
        }
        & label {
          padding-left: 0.5rem;
          color: var(--secondary-gray-1);
        }
      }
      &_rookie {
        display: flex;
        padding: 0.5rem 0.5rem 0.5rem 0;
        & input {
          appearance: none;
          border: 1px solid #999;
          border-radius: 50%;
          width: 1.2rem;
          height: 1.2rem;
        }
        & input:checked::after {
          content: "●";
          font-size: 10px;
          color: var(--secondary-blue-2);
          line-height: 19px;
          position: relative;
          right: -15%;
          bottom: 14%;
        }
        & label {
          padding-left: 0.5rem;
          color: var(--secondary-gray-1);
        }
      }
    }
    &_btn {
      display: flex;
      justify-content: center;
      padding: 1rem 0;
      & input {
        padding: 0.5rem 3rem;
        border-radius: 2rem;
        color: var(--secondary-gray-1);
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: 1.5px;
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
