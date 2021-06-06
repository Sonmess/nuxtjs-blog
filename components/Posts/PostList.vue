<template>
  <section class="post-list">
    <PostPreview
      v-for="(post, index) in posts"
      :key="index"
      :is-admin="isAdmin"
      :id="String(post.id)"
      :thumbnail="post.thumbnail"
      :preview-text="post.previewText"
      :title="post.title" />
  </section>
</template>

<script>
import PostPreview from "./PostPreview";

export default {
  name: "PostList",
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
