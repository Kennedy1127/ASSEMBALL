<template>
  <main class="copywriting wrapper">
    <div class="copywriting_header">
      <div class="copywriting_header_info">
        <div class="copywriting_header_title">
          <div class="block"></div>
          召募捕手
        </div>

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
      <div class="copywriting_header_intro"></div>
      <div class="copywriting_header_team"></div>
    </div>
    <div class="copywriting_content">content</div>
    <div class="copywriting_footer">footer</div>
  </main>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style scoped lang="scss">
.copywriting {
  color: var(--primary-blue);
  .block {
    width: 1rem;
    height: 4rem;
    background-color: var(--primary-blue);
  }

  &_header {
    margin-top: 8rem;
    display: flex;
    height: 600px;

    &_title {
      display: flex;
      align-items: center;
      gap: 2rem;

      font-size: 2.5rem;
      font-weight: 700;
    }

    &_info {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      font-size: 1.5rem;

      &_exp,
      &_area {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        font-weight: 500;

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
    }

    &_team {
    }
  }
}
</style>
