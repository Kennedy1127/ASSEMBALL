<template>
  <div class="recruit_landing_filters wrapper">
    <div class="recruit_landing_filters_bar">
      <div class="recruit_landing_filter recruit_landing_filter--search">
        <font-awesome-icon
          :icon="['fas', 'magnifying-glass']"
          class="magnifying-glass"
        />
        <input type="text" v-model="searchText" />
      </div>

      <div class="recruit_landing_filter recruit_landing_filter--role">
        <RecruitmentSelect v-model="role" placeholder="守備位置" type="role" />
      </div>

      <div class="recruit_landing_filter recruit_landing_filter--area">
        <RecruitmentSelect v-model="area" placeholder="地區" type="area" />
      </div>
    </div>

    <div class="recruit_landing_filters_btn">
      <button @click="submitFilters">搜尋</button>
    </div>
  </div>
</template>

<script setup>
import RecruitmentSelect from "@/components/recruitments/recruitment/RecruitmentSelect.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const searchText = ref(store.state.selectedCopywritingsText);
const role = ref(store.state.selectedCopywritingsRole);
const area = ref(store.state.selectedCopywritingsArea);

const submitFilters = () => {
  const searchObj = {
    searchText: searchText.value,
    role: role.value,
    area: area.value,
  };
  store.commit("selectCopywritingsSearch", searchObj);
};
</script>

<style scoped lang="scss">
.recruit_landing {
  &_filters {
    max-width: 1400px; // 1600? 1400? 1200?
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;

    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);

    &_bar {
      flex: 1;
      height: 60px;
      background-color: #fff;
      border-radius: var(--round);
      overflow: hidden;

      display: flex;
      align-items: center;
    }

    &_btn button {
      width: 200px;
      height: 60px;
      border-radius: var(--round);
      background-color: #fff;

      font-family: "Noto Sans TC", sans-serif;
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 10.5px;
      color: var(--primary-blue);
    }
  }

  &_filter {
    height: 3rem;

    &--search {
      width: 60%;
      position: relative;

      .magnifying-glass {
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translateY(-50%);

        font-size: 2rem;
        color: var(--primary-blue);

        cursor: pointer;
      }

      input {
        width: 100%;
        height: 100%;
        border: none;
        padding-left: 4rem;

        font-size: 1.5rem;

        &:focus {
          outline: none;
        }
      }
    }

    &--role {
      flex: 1;
    }

    &--area {
      flex: 1;
    }
  }
}
</style>
