<template>
  <section class="post-list">
    <PostPreview
      :is-admin="isAdmin"
      id="1"
      thumbnail="https://flog.pravda.sk/data/flog/estus-1/662228/tLE_662228_orig.jpg"
      preview-text="Mahagarsky text"
      title="Nadpis prveho postu"/>
    <PostPreview
      :is-admin="isAdmin"
      id="2"
      thumbnail="https://static.sashe.sk/avatars/b/266217-1464725595.jpg"
      preview-text="Lama lampa"
      title="Nadpis druheho postu"/>
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
