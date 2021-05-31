<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <PostForm/>
    </section>
  </div>
</template>

<script>
import PostForm from "../../../components/Admin/PostForm";

export default {
  name: 'index',
  components: {
    PostForm
  },
  layout: 'admin'
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
