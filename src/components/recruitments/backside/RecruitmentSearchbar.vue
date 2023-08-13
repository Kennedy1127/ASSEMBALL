<template>
  <div class="recruitSearchbar_wrapper">
    <div class="recruitSearchbar_bar">
      <RecruitmentSelector v-model="role" placeholder="守備位置" type="role" />
      <div class="recruitSearchbar_bar_border-left"></div>
      <RecruitmentSelector v-model="area" placeholder="地區" type="area" />
    </div>
    <div class="recruitSearchbar_btn">
      <button @click="submitFilters">搜尋</button>
    </div>
  </div>
</template>

<script>
import RecruitmentSelector from "@/components/recruitments/backside/RecruitmentSelector.vue";

export default {
  components: { RecruitmentSelector },
  props: {
    color: false,
  },

  components: {
    // RecruitmentSelect,
    RecruitmentSelector,
  },
  data() {
    return {
      searchText: "",
      role: -1,
      area: "",
    };
  },

  methods: {
    submitFilters() {
      const searchObj = {
        searchText: this.searchText,
        role: this.role,
        area: this.area,
      };
      console.log(role);
      this.$store.commit("selectCopywritingsSearch", searchObj);
    },
  },
};
</script>

<style scoped lang="scss">
.recruitSearchbar {
  &_wrapper {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 2rem 0 3rem 0;
  }
  &_bar {
    width: 380px; //不跑版設定
    display: flex;
    gap: 10px;

    border: 3px solid var(--primary-blue);

    border-radius: var(--round);
    position: relative;
    &_border-left {
      position: absolute;
      width: 3px;
      top: 10%;
      height: 80%;
      left: 50%;
      z-index: 50;
      background-color: var(--primary-blue);
    }
  }
  // div:nth-child(1) {
  //   position: relative;
  //   &::after {
  //     position: absolute;
  //     content: "";
  //     right: 0;
  //     width: 3px;
  //     background-color: var(--primary-blue);
  //
  //   }

  &_btn button {
    width: 200px;
    height: 70px;
    border-radius: var(--round);
    background-color: var(--primary-blue);

    font-family: "Noto Sans TC", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 10.5px;
    color: var(--pale-white);
    margin-left: 1rem;
    transition: all 0.09s ease-in-out;
  }
  &_btn button:hover {
    background-color: var(--secondary-blue-1);
  }
}
@media screen and (max-width: 420px) {
  // TODO: select中間的藍線消失
  .recruitSearchbar {
    &_wrapper {
      margin: 2rem 0;
    }
    &_bar {
      // width: 100%;
      margin: auto;
    }

    &_btn {
      display: none;
    }
  }
}
</style>
