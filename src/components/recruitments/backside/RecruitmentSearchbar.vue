<template>
  <div class="recruitSearchbar_wrapper">
    <div class="recruitSearchbar_bar">
      <RecruitmentSelector v-model="role" placeholder="守備位置" type="role" />
      <div class="recruitSearchbar_border-left"></div>
      <RecruitmentSelector v-model="area" placeholder="地區" type="area" />
    </div>
    <div class="recruitSearchbar_btn">
      <button @click="submitFilters">搜尋</button>
    </div>
  </div>
</template>

<script>
// import RecruitmentSelect from "@/components/recruitments/recruitment/RecruitmentSelect.vue";

import RecruitmentSelector from "@/components/recruitments/backside/RecruitmentSelector.vue";

export default {
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
  }
  &_bar {
    padding: 0.5rem;
    display: flex;
    gap: 10px;

    border: 3px solid var(--primary-blue);

    border-radius: var(--round);
  }
  &_border-left {
    width: 3px;

    background-color: var(--primary-blue);
  }
  &_btn button {
    width: 200px;
    height: 80px;
    border-radius: var(--round);
    background-color: var(--primary-blue);

    font-family: "Noto Sans TC", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 10.5px;
    color: var(--pale-white);
  }
}
</style>
