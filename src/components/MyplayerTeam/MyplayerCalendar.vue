<template>
  <div class="myplayer_function_group_calendar_wrap">
    <div class="myplayer_function_title_wrap">
      <div class="myplayer_function_rect"></div>
      <h3>賽程表</h3>
    </div>
    <div class="myplayer_function_calendar">
      <VCalendar
        :attributes="attributes"
        class="myplayer_function_calendar_vue vc-header vc-title"
        expanded
      />
      <!-- <VDatePicker v-model="date" /> -->
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const todos = ref([
  {
    description: "vs 猛虎隊",
    isComplete: false,
    dates: [
      { start: new Date("2023-07-26"), end: new Date("2023-07-26") },
      { start: new Date("2023-08-01"), end: new Date("2023-08-01") },
    ], // Every Friday
    color: "red",
  },
  {
    description: "地點 :Rakutan",
    isComplete: false,
    dates: [
      { start: new Date("2023-07-26"), end: new Date("2023-07-26") },
      { start: new Date("2023-08-01"), end: new Date("2023-08-01") },
    ], // Every Friday
    color: "orange",
  },
  {
    description: "時間 :14:00",
    isComplete: false,
    dates: [
      { start: new Date("2023-07-26"), end: new Date("2023-07-26") },
      { start: new Date("2023-08-01"), end: new Date("2023-08-01") },
    ], // Every Friday
    color: "yellow",
  },
]);
const compete = ref([
  {
    description: "vs 銀箭隊",
    isComplete: false,
    dates: [
      { start: new Date("2023-08-16"), end: new Date("2023-08-16") },
      { start: new Date("2023-08-10"), end: new Date("2023-08-10") },
    ], // Every Friday
    color: "red",
  },
  {
    description: "地點 :Rakutan",
    isComplete: false,
    dates: [
      { start: new Date("2023-08-16"), end: new Date("2023-08-16") },
      { start: new Date("2023-08-10"), end: new Date("2023-08-10") },
    ], // Every Friday
    color: "orange",
  },
  {
    description: "時間 :16:00",
    isComplete: false,
    dates: [
      { start: new Date("2023-08-16"), end: new Date("2023-08-16") },
      { start: new Date("2023-08-10"), end: new Date("2023-08-10") },
    ], // Every Friday
    color: "yellow",
  },
]);

const attributes = computed(() => [
  // Attributes for todos
  ...todos.value.map((todo) => ({
    dates: todo.dates,
    dot: {
      color: todo.color,
      class: todo.isComplete ? "opacity-75" : "",
    },
    popover: {
      label: todo.description,
      visibility: "hover",
      hideIndicator: true,
    },
  })),
  ...compete.value.map((todo) => ({
    dates: todo.dates,
    dot: {
      color: todo.color,
      class: todo.isComplete ? "opacity-75" : "",
    },
    popover: {
      label: todo.description,
      visibility: "hover",
      hideIndicator: true,
    },
  })),
]);
</script>
<style lang="scss">
.myplayer_function_group_calendar_wrap {
  width: 47.5%;
}
.myplayer_function_calendar {
  height: 37.5rem; // this is calendar's height
}
.vc-header {
  margin-top: 0;
}
.vc-title {
  background-color: var(--primary-blue);
  position: relative;
  span {
    color: var(--pale-white);
    font-size: 1.5rem;
  }
}
.vc-day {
  padding: 1.03rem 0rem;
  color: var(--pale-white);
  &-content {
    font-size: 1.5rem;
  }
}
.vc-focus {
  width: 1rem;
  height: 1rem;
  padding: 1.5rem;
}
.vc-arrow,
.vc-prev,
.vc-next {
  color: var(--pale-white) !important;
  background-color: var(--primary-blue);
  font-size: 1.5rem !important;
}
.is-lg {
  background-color: var(--primary-blue);
  margin-top: 0;
  margin: 1.5rem 0rem;
}
.vc-weekday-1,
.vc-weekday-2,
.vc-weekday-3,
.vc-weekday-4,
.vc-weekday-5,
.vc-weekday-6,
.vc-weekday-7 {
  color: var(--pale-white);
  font-size: 1.5rem;
}
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .vc-focus {
    width: 1rem;
    height: 1rem;
    padding: 0.9rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .vc-focus {
    width: 1rem;
    height: 1rem;
    padding: 0.7rem;
  }
}

@media screen and (max-width: 767px) {
  .myplayer_function_group_calendar_wrap {
    width: 100%;
  }
  .vc-focus {
    width: 1rem;
    height: 1rem;
    padding: 0.7rem;
  }
  .myplayer_function_title_wrap {
    padding-bottom: 5rem;
  }
}
</style>
