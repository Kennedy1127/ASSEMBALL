<template>
  <div class="products_aside_tags">
    <div class="products_aside_tags_title">
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-paperclip" />
      </div>
      <div>類別</div>
    </div>

    <div class="products_aside_tags_content">
      <div
        v-for="(tag, index) in tags"
        :key="tag"
        class="products_aside_tag"
        @click="emitFilterProducts(index)"
      >
        #{{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
import productTags from "@/composables/productTags";

export default {
  data() {
    return {
      tags: { ...productTags, 7: "全部商品" },
    };
  },
  methods: {
    emitFilterProducts(type) {
      this.$emit("filterProducts", Number(type));
    },
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
