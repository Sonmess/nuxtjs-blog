<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <PostForm @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import PostForm from "../../../components/Admin/PostForm";
import Axios from 'axios';

export default {
  name: 'index',
  components: {
    PostForm
  },
  layout: 'admin',
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData)
      .then(() => {
        this.$router.push('/admin');
      })
    }
  }
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
