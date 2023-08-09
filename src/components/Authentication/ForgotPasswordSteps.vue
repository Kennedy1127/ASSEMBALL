<template>
  <div class="authentication_steps">
    <div v-for="index in 3" :key="index" class="authentication_step">
      <div
        :class="{
          authentication_step_dot: true,
          'authentication_step_dot--active': index <= currentStep,
        }"
      ></div>
      <div
        :class="{
          authentication_step_line: true,
          'authentication_step_line--active': index <= currentStep,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.authentication {
  &_steps {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 1;

    width: 96px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &_step {
    display: flex;
    flex-direction: column;
    align-items: center;

    &_dot {
      width: 2rem;
      height: 2rem;
      border-radius: 2rem;
      background-color: var(--secondary-gray-3);

      &--active {
        background-color: var(--primary-blue);
      }

      &--middle {
        width: 1.25rem;
        height: 1.25rem;
      }
    }

    &_line {
      width: 2px;
      height: 260px;

      background-color: var(--secondary-gray-3);

      &--active {
        background-color: var(--primary-blue);
      }
    }

    &:last-child {
      .authentication_step_line {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .authentication_steps {
    top: 30%;
  }
  .authentication_step_line {
    height: 130px;
  }
}
</style>
