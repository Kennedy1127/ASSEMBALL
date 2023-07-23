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
        <div class="MemberCenter_Createteam_form_inner">
          <div class="MemberCenter_Createteam_form_inner_name">
            <label for="name">球隊名稱：</label>
            <input
              type="text"
              name="team_name"
              id="name"
              placeholder="請輸入球隊名稱"
            />
          </div>
          <!-- //地區 -->
          <div class="MemberCenter_Createteam_form_inner_region">
            <label for="email">地區：</label>
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
          <label for="Createteam_pic"
            ><img
              src="~@/assets/images/MemberCenter/MemberCenter_Personal_pic.svg"
              alt="MemberCenter_Createteam_form_pic"
            />上傳頭像
            <input type="file" id="Createteam_pic" />
          </label>
        </div>
        <div class="MemberCenter_Createteam_form_inner_Introduction">
          <div class="MemberCenter_Createteam_form_Introduction">
            <textarea
              id="Createteam_Introduction"
              cols="60"
              rows="10"
              maxlength="100"
              value
              placeholder="請輸入簡介內容...."
            ></textarea>
          </div>
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
    margin-bottom: 2rem;
    & div {
      border-left: 1rem solid var(--primary-blue);
      & span {
        padding-left: 1.5rem;
      }
    }
  }
  &_form {
    
  }
}
</style>
