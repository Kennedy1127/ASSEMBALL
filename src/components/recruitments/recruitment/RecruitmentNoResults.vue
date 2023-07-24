<template>
  <div class="recruit_no-results">
    <div class="recruit_no-results_img">
      <img src="@/assets/images/recruitment/no-results.svg" alt="" />
    </div>
    <p>招募球員的結果不見了QQ... 可能是篩選沒結果，請重新整理喔！</p>
    <p>如果是其他問題請盡快與平台管理員聯繫喔！</p>
  </div>
</template>

<style scoped lang="scss">
.recruit_no-results {
  flex: 1;

  &_img {
    display: flex;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  p {
    color: var(--secondary-gray-3);
    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
