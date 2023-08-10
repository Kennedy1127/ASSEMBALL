<template>
  <div class="overlay" @click.self="closeOverlay">
    <slot v-if="type === 'TeamGallery'">
      <MyplayerPhotoPopus
        @closeModal="closeOverlay"
        @goToRight="$emit('goToRight')"
        @goToLeft="$emit('goToLeft')"
        :sendPic="props.sendPic"
        :curIndex="curIndex"
      />
    </slot>
    <slot v-if="type === 'RaceType'">
      <MyplayerRaceEdit @closeModal="closeOverlay" />
    </slot>

    <slot v-if="type === 'apply'" name="apply">
      <CopywritingApplyModal @closeModal="closeOverlay" />
    </slot>
  </div>
</template>

<script setup>
import CopywritingApplyModal from "@/components/recruitments/copywriting/CopywritingApplyModal.vue";
import MyplayerPhotoPopus from "@/components/MyplayerTeam/MyplayerPhotoPopus.vue";
import MyplayerRaceEdit from "@/components/MyplayerTeam/MyplayerRaceEdit.vue";

const props = defineProps({
  type: {
    type: String,
  },
  sendPic: {},
  curIndex: {},
});

const emit = defineEmits(["closeOverlay", "goToRight", "goToLeft"]);

const closeOverlay = () => {
  // console.log("albert");
  emit("closeOverlay");
};
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100vh;
}
</style>
