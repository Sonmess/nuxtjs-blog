<template>
  <div class="admin-post-page">
    <section class="update-form">
      <PostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import PostForm from "../../../components/Admin/PostForm";
import axios from 'axios';

export default {
  name: "index",
  components: {PostForm},
  layout: 'admin',
  asyncData(context) {
    return axios
      .get('https://nuxt-blog-6f31b-default-rtdb.europe-west1.firebasedatabase.app/post/' + context.params.postId + '.json')
      .then((res) => {
        return {loadedPost: {...res.data, id: context.params.postId}};
      })
      .catch((e) => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost)
        .then(() => {
          this.$router.push('/admin');
        })
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
