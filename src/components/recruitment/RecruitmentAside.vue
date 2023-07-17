<template>
  <div class="recruit_copywritings_aside">
    <h2 class="recruit_copywritings_aside_header">招募篩選</h2>

    <div class="recruit_copywritings_aside_filter">
      <div class="recruit_copywritings_aside_filter_title">接觸經歷</div>

      <div class="recruit_copywritings_aside_filter_groups">
        <div
          v-for="index in 3"
          :key="index"
          class="recruit_copywritings_aside_filter_group"
        >
          <div class="recruit_copywritings_aside_filter_checkbox">
            <input type="checkbox" id="inexperienced" />
            <label for="inexperienced"></label>
          </div>
          <div class="recruit_copywritings_aside_filter_type">初心者</div>
          <div class="recruit_copywritings_aside_filter_count">7</div>
        </div>
      </div>
    </div>

    <div class="recruit_copywritings_aside_filter">
      <div class="recruit_copywritings_aside_filter_title">日期排序</div>

      <div class="recruit_copywritings_aside_filter_groups border-none">
        <div class="recruit_copywritings_aside_filter_group">
          <div class="recruit_copywritings_aside_filter_checkbox">
            <input type="checkbox" id="new" />
            <label for="new"></label>
          </div>
          <div class="recruit_copywritings_aside_filter_type">由新到舊</div>
        </div>

        <div class="recruit_copywritings_aside_filter_group">
          <div class="recruit_copywritings_aside_filter_checkbox">
            <input type="checkbox" id="old" />
            <label for="old"></label>
          </div>
          <div class="recruit_copywritings_aside_filter_type">由舊到新</div>
        </div>
      </div>
    </div>

    <div class="recruit_copywritings_aside_btns">
      <div class="recruit_copywritings_aside_btn">
        <button>招募球員</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.recruit_copywritings {
  &_aside {
    width: 24%;
    max-height: 600px;

    padding-left: 1.5rem;
    border-left: 2px solid var(--primary-blue);
    color: var(--primary-blue);

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

    &_btns {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;

      button {
        width: 140px;
        height: 50px;
        border-radius: 24px;

        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: 5px;
        color: #fff;

        background-color: var(--primary-blue);
      }
    }
  }
}
</style>
