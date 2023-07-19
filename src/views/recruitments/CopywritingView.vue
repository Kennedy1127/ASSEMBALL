<template>
  <main class="copywriting wrapper">
    <div class="copywriting_header">
      <div class="copywriting_header_info">
        <h2 class="copywriting_title">
          <div class="block"></div>
          召募捕手
        </h2>

        <div class="copywriting_header_info_date">-2023.07.05</div>

        <div class="copywriting_header_info_exp">
          <div class="copywriting_header_info_exp_block"></div>
          初心者
        </div>

        <div class="copywriting_header_info_area">
          <div class="copywriting_header_info_area_block"></div>
          桃園市
        </div>
      </div>

      <div class="copywriting_header_intro">
        <h2 class="copywriting_title">
          <div class="block"></div>
          職缺介紹
        </h2>

        <p class="copywriting_header_intro_text">
          捕手是球隊的防線指揮官，全能守備、瞭解投手意圖，捕捉每一個球種，守衛本壘。
        </p>
      </div>

      <div class="copywriting_header_team">
        <div class="copywriting_header_team_icon">
          <img
            src="~@/assets/images/recruitment/team-icons/team-icon-1-lg.png"
            alt="team icon"
          />
        </div>
        <div class="copywriting_header_team_name">猛虎隊</div>
        <div class="copywriting_header_team_btn">
          <button>更多球隊</button>
        </div>
      </div>
    </div>

    <div class="copywriting_content">
      <div class="copywriting_content_intro">
        <h2 class="copywriting_title">
          <div class="block"></div>
          猛虎隊
        </h2>

        <h3 class="copywriting_content_intro_title">
          猛虎隊以其勇敢、堅定和不屈不撓的精神而聞名 --
          我們致力於每一場比賽都全力以赴，追求勝利。
        </h3>

        <p class="copywriting_content_intro_text">
          我們的球隊以團結和合作為基石。我們相互支持，彼此信任，並相信每個隊員都有為球隊做出貢獻的能力，我們的目標是共同成長，一起攜手打造一支強大的球隊。
          <br />
          <br />
          猛虎隊的球場氛圍總是充滿熱情和能量。我們的忠實球迷總是在場邊為我們加油，他們的支持是我們不斷進步和戰勝困難的動力源泉。每次站在球場上，我們都為了他們而努力，為了帶給他們驕傲和喜悅而戰。
        </p>
      </div>

      <div class="copywriting_content_pic">
        <img
          src="~@/assets/images/recruitment/copywriting/copywriting.png"
          alt=""
        />
      </div>

      <div class="copywriting_content_btn">
        <button>
          應徵
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </button>
      </div>

      <div class="copywriting_content_warning">
        <button>
          <font-awesome-icon
            :icon="['fas', 'triangle-exclamation']"
            class="warning-icon"
          />
          檢舉球隊
        </button>
      </div>
    </div>

    <div class="copywriting_footer">
      <h2 class="copywriting_title">
        <div class="block"></div>
        相似職缺
      </h2>

      <div class="copywriting_footer_carousel">
        <copywritingSwiper />
      </div>
    </div>
  </main>
</template>

<script>
import copywritingSwiper from "@/components/recruitments/copywriting/copywritingSwiper.vue";

export default {
  components: { copywritingSwiper },
  mounted() {},
};
</script>

<style scoped lang="scss">
.copywriting.wrapper {
  padding-top: 3rem;
}
.copywriting {
  color: var(--primary-blue);
  .block {
    width: 1rem;
    height: 4rem;
    background-color: var(--primary-blue);
  }

  &_title {
    display: flex;
    align-items: center;
    gap: 3rem;

    font-size: 2.5rem;
    font-weight: 700;
  }

  &_header {
    margin-top: 8rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--primary-blue);
    display: flex;
    font-size: 1.5rem;
    font-weight: 500;

    &_info {
      width: 30%;

      display: flex;
      flex-direction: column;
      gap: 3rem;

      &_date {
        font-weight: 400;
      }

      &_exp,
      &_area {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        &_block {
          width: 40px;
          height: 40px;
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
    }

    &_intro {
      width: 50%;
      padding: 0 6rem;
      border-left: 1px solid var(--primary-blue);
      border-right: 1px solid var(--primary-blue);

      &_text {
        margin-top: 3rem;
      }
    }

    &_team {
      flex: 1;

      display: flex;
      flex-direction: column;
      align-items: center;

      &_icon {
        width: 150px;
        height: 150px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &_name {
        margin-top: 2rem;
        font-weight: 400;
      }

      &_btn {
        margin-top: auto;

        button {
          width: 200px;
          height: 60px;
          border-radius: 100px;

          font-family: "Noto Sans TC", sans-serif;
          font-weight: 500;
          color: #fff;
          background-color: var(--primary-blue);
        }
      }
    }
  }

  &_content {
    margin-top: 6rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--primary-blue);

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;

    position: relative;

    &_intro {
      &_title {
        margin-top: 4rem;
        margin-bottom: 2.5rem;
        width: 80%;

        font-size: 1.5rem;
        font-weight: 500;

        line-height: 1.7;
      }

      &_text {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.7;
      }
    }

    &_btn {
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        width: 200px;
        height: 60px;
        border-radius: 100px;
        background-color: var(--primary-blue);

        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
      }
    }

    &_warning {
      position: absolute;
      bottom: 1rem;
      right: 0;

      button {
        background-color: transparent;

        display: flex;
        align-items: center;
        gap: 1rem;

        font-size: 1.5rem;
        color: var(--warning-red);

        .warning-icon {
          font-size: 2rem;
        }
      }
    }
  }

  &_footer {
    margin: 6rem 0;

    &_carousel {
      margin-top: 6rem;
    }
  }
}
</style>
