<template>
  <div class="recruit">
    <div class="recruit_landing">
      <div class="recruit_landing_bar wrapper">
        <div class="recruit_landing_filters">
          <div class="recruit_landing_filters_search">
            <input type="text" />
          </div>
          <div class="recruit_landing_filters_role">
            <select>
              <option value="">守備位置</option>
            </select>
          </div>
          <div class="recruit_landing_filters_area">
            <select>
              <option value="">地區</option>
            </select>
          </div>
        </div>

        <div class="recruit_landing_button">
          <button>搜尋</button>
        </div>
      </div>
    </div>

    <div class="wrapper">test</div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.recruit {
  &_landing {
    min-height: 650px;
    background-image: url("@/assets/images/recruit/recruit-landing.png");
    background-size: cover;

    &_bar {
      display: flex;
      justify-content: space-between;
      background-color: #fff;
    }

    &_filters {
      display: flex;
    }
  }
}
</style>
