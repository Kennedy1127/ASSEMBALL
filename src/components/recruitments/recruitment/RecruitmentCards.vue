<template>
  <div class="recruit_copywritings_cards">
    <div
      v-for="(item, index) in computedRenderCopywritings"
      :key="index"
      class="recruit_copywritings_card"
    >
      <router-link
        :to="{
          name: 'Copywriting',
          params: {
            id: item.copywriting_id,
          },
          query: {
            h: windowTop,
          },
        }"
      >
        <h2 class="recruit_copywritings_card_header">
          召募{{ convertRole(item.copywriting_role) }}
        </h2>

        <div class="recruit_copywritings_card_content">
          <div class="recruit_copywritings_card_title">
            {{ item.copywriting_title }}
          </div>
          <div class="recruit_copywritings_card_exp">
            <div class="recruit_copywritings_card_exp_block"></div>
            {{ convertExp(item.copywriting_exp) }}
          </div>
          <div class="recruit_copywritings_card_area">
            <div class="recruit_copywritings_card_area_block"></div>
            {{ item.copywriting_area }}
          </div>
        </div>

        <div class="recruit_copywritings_card_border"></div>

        <div class="recruit_copywritings_card_footer">
          <div class="recruit_copywritings_card_team">
            <div class="recruit_copywritings_card_team_icon">
              <img
                src="~@/assets/images/recruitment/team-icons/team-icon-1.png"
                alt="team icon"
              />
            </div>
            <div class="recruit_copywritings_card_team_name">
              {{ item.copywriting_team_name }}
            </div>
          </div>

          <div class="recruit_copywritings_card_intro">
            <div class="recruit_copywritings_card_intro_title">球隊簡介：</div>
            <p class="recruit_copywritings_card_intro_text">
              {{ item.copywriting_team_intro }}
            </p>
          </div>
        </div>

        <div class="recruit_copywritings_card_date">
          刊登日期：{{ convertDate(item.copywriting_date) }}
        </div>
      </router-link>
    </div>

    <PaginationComponent :totalPages="computedTotalPages" type="copywritings" />
  </div>
</template>

<script setup>
import PaginationComponent from "@/components/utilities/PaginationComponent.vue";
import roles from "@/composables/tables/roles";
import exps from "@/composables/tables/exps";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 更新螢幕捲動高度
const onScroll = (e) => {
  windowTop.value =
    window.top.scrollY; /* or: e.target.documentElement.scrollTop */
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

// 螢幕捲動高度
const windowTop = ref(window.top.scrollY);

const computedRenderCopywritings = computed(() => {
  const start = store.state.isMobile
    ? (store.state.copywritingsCurPage - 1) * 4
    : (store.state.copywritingsCurPage - 1) * 6;

  const end = store.state.isMobile
    ? store.state.copywritingsCurPage * 4
    : store.state.copywritingsCurPage * 6;

  return store.getters.dateSortedFilteredCopywritings.slice(start, end);
});

// 招募文案的總頁數
const computedTotalPages = computed(() => {
  if (store.state.copywritingsCount === 0) return 1;

  const len = store.getters.filteredCopywritings.length;
  return store.state.isMobile
    ? len % 4 === 0
      ? len > 4
        ? len / 4
        : 1
      : Math.ceil(len / 4)
    : len % 6 === 0
    ? len > 6
      ? len / 6
      : 1
    : Math.ceil(len / 6);
});

const convertRole = (role) => {
  return roles[Number(role) + 1].label;
};

const convertExp = (exp) => {
  return exps[exp];
};

const convertDate = (copywritingDate) => {
  const date = new Date(copywritingDate);
  return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}/${String(date.getDate()).padStart(2, "0")}`;
};
</script>

<style scoped lang="scss">
.recruit_copywritings {
  &_cards {
    flex: 1;
    min-height: 950px;

    display: grid;
    align-items: start;
    grid-template-columns: repeat(3, 1fr);
    // column-gap: 1rem;
    row-gap: 3rem;

    @media all and (max-width: 420px) {
      grid-template-columns: 1fr;
    }
  }

  &_card {
    min-height: 400px;
    padding: 0 0.5rem;
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: var(--secondary-blue-4);
    }

    a {
      border: 3px solid var(--primary-blue);
    }

    &_header {
      padding: 0.5rem 1rem;
      background-color: var(--primary-blue);

      font-size: 2rem;
      font-weight: 700;
      color: #fff;
    }

    &_content {
      padding: 1.25rem 1rem 0 1rem;
      color: var(--primary-blue);

      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &_title {
      font-size: 1.5rem;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }

    &_exp,
    &_area {
      font-size: 1.25rem;
      font-weight: 500;

      display: flex;
      align-items: center;
      gap: 1.5rem;

      &_block {
        width: 25px;
        height: 25px;
      }
    }

    &_exp {
      &_block {
        background-color: var(--accent-pink);
      }
    }

    &_area {
      &_block {
        background-color: var(--accent-yellow);
      }
    }

    &_border {
      margin: 1.25rem 1rem;
      height: 1px;
      background-color: var(--primary-blue);
    }

    &_footer {
      padding: 0 1rem;
      display: flex;
      gap: 1.25rem;
    }

    &_team {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      &_icon {
        width: 90px;
        height: 90px;
      }

      &_name {
        font-size: 1rem;
        font-weight: 500;
        color: var(--primary-blue);
      }
    }

    &_intro {
      flex: 1;
      color: var(--primary-blue);

      &_title {
        font-size: 1rem;
        font-weight: 700;
      }

      &_text {
        margin-top: 0.5rem;
        font-size: 0.75rem;
        font-weight: 500;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }
    }

    &_date {
      padding: 0 1rem 0.5rem;
      display: flex;
      justify-content: flex-end;

      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      color: var(--primary-blue);
    }
  }
}
</style>
