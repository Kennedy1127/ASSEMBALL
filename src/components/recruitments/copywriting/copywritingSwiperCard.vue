<template>
  <div class="copywriting_card">
    <div class="copywriting_card_header">
      <div class="copywriting_card_role">招募右外野手</div>
    </div>

    <div class="copywriting_card_content">
      <div class="copywriting_card_exp">初心者</div>
      <div class="copywriting_card_info">
        <div class="copywriting_card_icon">
          <img
            src="~@/assets/images/recruitment/team-icons/team-icon-1.png"
            alt="team icon"
          />
        </div>
        <div class="copywriting_card_team">黃蜂隊</div>
        <div class="copywriting_card_area">台東縣</div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.copywriting_card {
  width: 100%;
  min-height: 400px;
  border: 2px solid var(--primary-blue);

  &_role {
    padding: 0.5rem 1rem;
    background-color: var(--primary-blue);

    font-size: 2rem;
    font-weight: 500;
    color: #fff;
  }

  &_content {
    padding: 1.5rem 1rem 0;
  }

  &_exp {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--secondary-blue-2);

    font-size: 1.5rem;
    font-weight: 400;
  }

  &_info {
    padding-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &_icon {
    width: 100px;
    height: 100px;
    margin-bottom: 1.25rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &_team,
  &_area {
    width: 50%;
    border-radius: var(--round);

    color: #fff;
    font-size: 1.25rem;
    font-weight: 400;
    text-align: center;
  }

  &_team {
    background-color: var(--error-yellow);
    margin-bottom: 1rem;
  }

  &_area {
    background-color: var(--success-green);
  }
}
</style>
