<template>
  <div class="recruit_copywritings_aside">
    <h2 class="recruit_copywritings_aside_header">條件篩選</h2>

    <div class="recruit_copywritings_aside_filter">
      <div class="recruit_copywritings_aside_filter_title">接觸經歷</div>

      <div class="recruit_copywritings_aside_filter_groups">
        <div
          v-for="exp in exps"
          :key="exp"
          class="recruit_copywritings_aside_filter_group"
        >
          <div class="recruit_copywritings_aside_filter_checkbox">
            <input
              type="checkbox"
              v-model="selectedExp"
              :id="exp.typeName"
              :value="exp.type"
              ref="expInput"
              @change="filterExp"
            />
            <label :for="exp.typeName"></label>
          </div>
          <div class="recruit_copywritings_aside_filter_type">
            {{ exp.name }}
          </div>
          <div class="recruit_copywritings_aside_filter_count">
            {{ exp.typeCount }}
          </div>
        </div>
      </div>
    </div>

    <div class="recruit_copywritings_aside_filter">
      <div class="recruit_copywritings_aside_filter_title">日期排序</div>

      <div class="recruit_copywritings_aside_filter_groups border-none">
        <div class="recruit_copywritings_aside_filter_group">
          <div class="recruit_copywritings_aside_filter_checkbox">
            <input
              type="radio"
              id="new"
              v-model="selectedDate"
              :value="0"
              checked
              @change="filterDate"
            />
            <label for="new"></label>
          </div>
          <div class="recruit_copywritings_aside_filter_type">由新到舊</div>
        </div>

        <div class="recruit_copywritings_aside_filter_group">
          <div class="recruit_copywritings_aside_filter_checkbox">
            <input
              type="radio"
              id="old"
              v-model="selectedDate"
              :value="1"
              @change="filterDate"
            />
            <label for="old"></label>
          </div>
          <div class="recruit_copywritings_aside_filter_type">由舊到新</div>
        </div>
      </div>
    </div>

    <div class="recruit_copywritings_aside_btn" v-if="!store.state.isMobile">
      <router-link :to="{ name: 'recruitmentPost' }">招募球員</router-link>
    </div>

    <div class="recruit_copywritings_aside_btn">
      <button @click="$emit('closeModal')">確定</button>
    </div>

    <div
      class="recruit_copywritings_aside_xmark"
      v-if="store.state.isMobile"
      @click="$emit('closeModal')"
    >
      <font-awesome-icon
        :icon="['fas', 'circle-xmark']"
        class="recruit_copywritings_aside_xmark_icon"
      />
    </div>
  </div>

  <div
    class="overlay"
    v-if="store.state.isMobile"
    @click="$emit('closeModal')"
  ></div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits(["closeModal"]);

onMounted(() => {
  selectedExp.value = [...store.state.selectedCopywritingsExp];
});

const selectedExp = ref([]);
const selectedDate = ref(0);

const exps = computed(() => {
  const exps = [
    {
      type: 0,
      typeName: "inexperenced",
      typeCount: store.getters.inexperencedCount,
      name: "初心者",
    },
    {
      type: 1,
      typeName: "entry",
      typeCount: store.getters.entryCount,
      name: "新手",
    },
    {
      type: 2,
      typeName: "intermediate",
      typeCount: store.getters.intermediateCount,
      name: "老手",
    },
    {
      type: 3,
      typeName: "free",
      typeCount: store.getters.freeCount,
      name: "經歷不拘",
    },
  ];

  return exps;
});

const filterExp = () => {
  store.commit("selectCopywritingsExp", selectedExp.value);
  store.commit("resetPaginationCurPage", "copywritings");
};

const filterDate = () => {
  store.commit("selectCopywritingsDate", selectedDate.value);
  store.commit("resetPaginationCurPage", "copywritings");
};
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;
}

.recruit_copywritings {
  &_aside {
    width: 24%;
    max-height: 600px;

    padding-left: 1.5rem;
    border-left: 2px solid var(--primary-blue);
    color: var(--primary-blue);

    @media all and (max-width: 420px) {
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: 101;
      transform: translate(-50%, -50%);

      padding: 1rem;
      width: 90%;
      max-height: 100%;
      background-color: #fff;
      border-radius: var(--round);
      border: 2px solid var(--primary-blue);

      &_xmark {
        position: absolute;
        top: 1rem;
        right: 1rem;

        &_icon {
          font-size: 2rem;
          color: var(--primary-blue);
          cursor: pointer;
        }
      }
    }

    &_header {
      font-size: 2rem;
      font-weight: 700;

      padding-bottom: 1.25rem;
      border-bottom: 1px solid var(--primary-blue);
    }

    &_filter {
      padding-top: 1.25rem;

      &_title {
        font-size: 1.5rem;
        font-weight: 700;
      }

      &_groups {
        margin-top: 1.25rem;
        padding-bottom: 1.25rem;
        border-bottom: 1px solid var(--primary-blue);

        display: flex;
        flex-direction: column;
        gap: 1rem;

        &.border-none {
          border: none;
        }
      }

      &_group {
        display: flex;
        align-items: center;
        gap: 2rem;
      }

      &_checkbox {
        width: 25px;
        height: 25px;

        position: relative;

        input {
          display: none;
          &:checked + label {
            background-color: var(--primary-blue);
          }
        }

        label {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid var(--primary-blue);
        }
      }

      &_type {
        font-size: 1.25rem;
        font-weight: 500;
      }

      &_count {
        font-size: 1.25rem;
        font-weight: 500;
        margin-left: auto;
        margin-right: 1.5rem;
      }
    }

    &_btn {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;

      button,
      a {
        width: 140px;
        height: 50px;
        border-radius: 24px;

        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: 5px;
        color: #fff;

        background-color: var(--primary-blue);

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
