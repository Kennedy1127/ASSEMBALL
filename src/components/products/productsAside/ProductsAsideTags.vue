<template>
  <div class="products_aside_tags">
    <div class="products_aside_tags_title">
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-paperclip" />
      </div>
      <div>類別</div>
    </div>

    <div class="products_aside_tags_content">
      <div v-for="tag in tags" :key="tag.type" class="products_aside_tag">
        {{ tag.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productTags"],
  data() {
    return {
      tags: this.$props.productTags,
    };
  },
};
</script>

<style scoped lang="scss">
.icon {
  color: var(--primary-blue);
  font-size: 1.3rem;
}
.products_aside_tags {
  margin-top: 8rem;

  &_content {
    margin-top: 1rem;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .products_aside_tag {
      font-size: 14px;
      padding: 0.25rem 0.75rem;
      border-radius: 27px;
      background-color: var(--accent-yellow);
      cursor: pointer;
      color: var(--primary-black);
      transition: all 0.15s ease-in-out;
      &:hover {
        background-color: var(--error-yellow);
      }
    }
  }
}
</style>
