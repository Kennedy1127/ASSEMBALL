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
      <form
        action=""
        method="post"
        name="MemberCenterApplicationform"
        class="MemberCenter_Application_form"
        @submit.prevent="submitForm"
      >
        <div class="MemberCenter_Application_template">
          <div class="MemberCenter_Application_template_tick">
            <input
              type="radio"
              name="template"
              value="模板1"
              id="template[0]"
              v-model="template"
              required
            />
          </div>
          <div class="MemberCenter_Application_template_content">
            <textarea
              id="Createteam_Introduction"
              cols="50"
              rows="10"
              maxlength="100"
              value
              placeholder="系統預設模板內容1...."
              v-model="Introduction_one"
            ></textarea>
          </div>
          <div class="MemberCenter_Application_template_revise">
            <span> <font-awesome-icon icon="fa-solid fa-pen" /></span>
          </div>
        </div>
        <div class="MemberCenter_Application_template">
          <div class="MemberCenter_Application_template_tick">
            <input
              type="radio"
              name="template"
              value="模板2"
              id="template[1]"
              v-model="template"
              required
            />
          </div>
          <div class="MemberCenter_Application_template_content">
            <textarea
              id="Createteam_Introduction"
              cols="50"
              rows="10"
              maxlength="100"
              value
              placeholder="系統預設模板內容2...."
              v-model="Introduction_two"
            ></textarea>
          </div>
          <div class="MemberCenter_Application_template_revise">
            <span> <font-awesome-icon icon="fa-solid fa-pen" /></span>
          </div>
        </div>
        <div class="MemberCenter_Application_template">
          <div class="MemberCenter_Application_template_tick">
            <input
              type="radio"
              name="template"
              value="模板3"
              id="template[2]"
              v-model="template"
              required
            />
          </div>
          <div class="MemberCenter_Application_template_content">
            <textarea
              id="Createteam_Introduction"
              cols="50"
              rows="10"
              maxlength="100"
              value
              placeholder="系統預設模板內容3...."
              v-model="Introduction_three"
            ></textarea>
          </div>
          <div class="MemberCenter_Application_template_revise">
            <span> <font-awesome-icon icon="fa-solid fa-pen" /></span>
          </div>
        </div>

        <div class="MemberCenter_Application_adddescribe">添加模板</div>
        <div class="MemberCenter_Application_template">
          <div class="MemberCenter_Application_template_add">
            <font-awesome-icon icon="fa-solid fa-circle-plus" />
          </div>
          <div class="MemberCenter_Application_template_content">
            <textarea
              id="Createteam_Introduction"
              cols="50"
              rows="10"
              maxlength="100"
              value
              placeholder="系統預設模板內容1...."
            ></textarea>
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
export default {
  data() {
    return {
      // 表單資料
      Introduction_one: "",
      Introduction_two: "",
      Introduction_three: "",
      template: [],
      /////////
      // template: [
      //   {
      //     systemContent: "系統預設內容1...",
      //   },
      //   {
      //     systemContent: "系統預設內容2...",
      //   },
      //   {
      //     systemContent: "系統預設內容3...",
      //   },
      // ],
    };
  },

  methods: {
    //提交表單
    submitForm() {
      alert("模板資料儲存成功！");
      // 表單資料確認
      console.log("模板1：", this.Introduction_one);
      console.log("模板2：", this.Introduction_two);
      console.log("模板3：", this.Introduction_three);
      console.log("系統預設：", this.template);

      //提交後重置表單資料
      // this.template = [];
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
    }
    &_revise {
      font-size: 1.75rem;
      color: var(--primary-blue);
      padding-left: 1rem;
      cursor: pointer;
      @media all and (max-width: 420px) {
        padding-left: 0rem;
      }
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
