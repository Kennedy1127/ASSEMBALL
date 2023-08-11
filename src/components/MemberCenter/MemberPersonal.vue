<template>
  <section class="MemberPersonal">
    <div class="MemberPersonal_return" @click="returnPage">
      <div>
        <span><font-awesome-icon icon="fa-solid fa-angle-left" /></span>返回
      </div>
    </div>
    <div class="MemberPersonal_member">
      <div class="MemberPersonal_member_title">會員資料</div>
    </div>
    <form
      action=""
      method="post"
      name="personalInformation"
      class="MemberPersonal_form"
      @submit.prevent="submitForm"
    >
      <!-- 會員頭像 -->
      <div class="MemberPersonal_form_pic">
        <div class="MemberPersonal_form_pic_btn">
          <img
            :src="avatar || require('@/assets/images/icons/main-icon.png')"
            alt="MemberPersonal_form_pic"
          />
          <label for="member_pic"
            ><span><font-awesome-icon icon="fa-solid fa-plus" /></span>上傳頭像
            <input type="file" id="member_pic" @change="onfile"
          /></label>
        </div>
      </div>
      <!-- 姓氏 只能輸入1-5個字 -->
      <div class="MemberPersonal_form_lastname">
        <label for="lastname"><span>*</span>姓氏：</label>
        <input
          type="text"
          name="member_lastname"
          id="lastname"
          placeholder="請輸入姓氏"
          v-model="lastname"
          minlength="1"
          maxlength="5"
          required
          @input="validateLastname"
        />
        <div v-if="!isLastnameValid" class="error">{{ lastnameError }}</div>
      </div>
      <!-- 名字 只能輸入1-5個字 -->
      <div class="MemberPersonal_form_name">
        <label for="name"><span>*</span>名字：</label>
        <input
          type="text"
          name="member_name"
          id="name"
          placeholder="請輸入名字"
          v-model="name"
          minlength="1"
          maxlength="5"
          required
          @input="validateName"
        />
        <div v-if="!isNameValid" class="error">{{ nameError }}</div>
      </div>
      <!-- // 電子信箱驗證 規定只能輸入 xxx@xxx.xxx 形式 -->
      <div class="MemberPersonal_form_email">
        <label for="email"><span>*</span>信箱：</label>
        <input
          type="text"
          name="member_email"
          id="email"
          placeholder="請輸入電子信箱"
          v-model="email"
          required
          @input="validateEmail"
        />
        <div v-if="!isEmailValid" class="error">{{ emailError }}</div>
      </div>
      <!-- 地區篩選 -->
      <div class="MemberPersonal_form_region">
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
      <!-- 經歷 -->
      <div class="MemberPersonal_form_experience">
        <div class="MemberPersonal_form_experience_nood">
          <input
            type="radio"
            name="experience"
            :value="0"
            id="experience[0]"
            v-model="experience"
            required
          />
          <label for="experience[0]">初心者</label>
        </div>
        <div class="MemberPersonal_form_experience_new">
          <input
            type="radio"
            name="experience"
            :value="1"
            id="experience[1]"
            v-model="experience"
            required
          />
          <label for="experience[1]">新手</label>
        </div>
        <div class="MemberPersonal_form_experience_rookie">
          <input
            type="radio"
            name="experience"
            :value="2"
            id="experience[2]"
            v-model="experience"
            required
          />
          <label for="experience[2]">老手</label>
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
import useData from "@/composables/data/useData";
import getData from "@/composables/data/getData";

const { getDocuments, getCollectionCount, getSubCollectionDocuments } =
  getData();

const { setData, updateData, setDataSubCollection } = useData();

export default {
  props: ["placeholder", "type", "modelValue"],

  // //抓會員資料
  // async mounted() {
  //   // const res = await this.$store.dispatch("getMemberCenter");
  //   // console.log(res);
  //   console.log(this.$store.state.user);
  // },

  data() {
    return {
      // 表單資料
      pic: null,
      avatar: this.$store.state.user.picUrls[0],
      lastname: this.$store.state.user.lastname,
      name: this.$store.state.user.firstname,
      email: this.$store.state.user.email,
      region: this.$store.state.user.area,
      experience: this.$store.state.user.exp,
      //表單錯誤訊息
      lastnameError: "",
      nameError: "",
      emailError: "",
      ////////////////////
      roles,
      area,
    };
  },

  //地區下拉選擇
  computed: {
    items() {
      return this.$props.type === "role" ? [...this.roles] : [...this.area];
    },
  },

  methods: {
    //地區篩選
    onChange(e) {
      this.$emit("update:modelValue", e);
    },
    returnPage() {
      this.$emit("return_page");
    },

    //圖片設定
    onfile(event) {
      this.pic = event.target.files[0];
      this.file = event.target.files[0];
      let filereader = new FileReader();
      filereader.readAsDataURL(this.file);
      filereader.addEventListener("load", () => {
        this.avatar = filereader.result;
        console.warn(this.avatar);
      });
    },

    async getMemberCenter(context) {
      try {
        const res = await getDocuments("MEMBERS");
        context.commit("setMemberCenter", res);
      } catch (err) {
        console.error(err);
      }
    },

    // 表單驗證

    validateLastname() {
      // 只包含中文和英文字母
      const regex = /^[\u4e00-\u9fa5a-zA-Z]+$/;
      this.isLastnameValid = regex.test(this.lastname.trim());
    },

    validateName() {
      // 只包含中文和英文字母
      const regex = /^[\u4e00-\u9fa5a-zA-Z]+$/;
      this.isNameValid = regex.test(this.name.trim());
    },

    validateEmail() {
      const emailRegex =
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      this.isEmailValid = emailRegex.test(this.email);
    },

    async submitForm() {
      this.lastnameError = "";
      this.nameError = "";
      this.emailError = "";

      this.validateLastname();
      this.validateName();
      this.validateEmail();

      if (!this.isLastnameValid || !this.isNameValid || !this.isEmailValid) {
        alert("會員資料更新有誤，請重新檢查喔！");
        //顯示錯誤訊息
        if (!this.isLastnameValid) {
          this.lastnameError = "請輸入有效的姓氏(只能包含中文和英文字母)";
        }
        if (!this.isNameValid) {
          this.nameError = "請輸入有效的名字(只能包含中文和英文字母)";
        }
        if (!this.isEmailValid) {
          this.emailError = "請輸入有效的電子信箱";
        }
      } else {
        // 表單提交
        alert("會員資料提交成功！");

        // 表單資料確認
        const data = {
          firstname: this.name,
          lastname: this.lastname,
          email: this.email,
          area: this.region,
          exp: this.experience,
        };
        // console.log(data);
        // console.log(this.pic);

        await updateData(
          {
            collectionName: "MEMBERS",
            documentId: this.$store.state.user.id,
          },
          data,
          [this.pic],
          "member"
        );
      }
    },
  },
};
</script>

<style scoped lang="scss">
.error {
  padding-top: 0.5rem;
  padding-left: 0.25rem;
  color: var(--accent-red);
  font-size: 0.875rem;
  margin-left: 0;
}
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
  max-height: 90vh;
  overflow-y: scroll;
  padding-bottom: 1rem;
  @media all and (max-width: 420px) {
    max-width: 100%;

    left: 0;
    z-index: 48;
    top: 4.2rem;
    overflow: auto;
    padding-bottom: 3rem;
    // padding-top: 2rem;
  }
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
        display: flex;
        flex-direction: column;
        & img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        & label {
          display: flex;
          text-align: center;
          color: var(--secondary-blue-1);
          padding: 0.5rem;
          margin-top: 1rem;
          font-weight: 500;
          border: 2px dashed var(--secondary-blue-1);
          cursor: pointer;
          & span {
            padding-right: 0.5rem;
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
        & span {
          color: var(--accent-red);
        }
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
        & span {
          color: var(--accent-red);
        }
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
        & span {
          color: var(--accent-red);
        }
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
          bottom: 30%;
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
          bottom: 30%;
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
          bottom: 30%;
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
