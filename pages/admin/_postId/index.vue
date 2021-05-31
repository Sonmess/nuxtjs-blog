<template>
  <div class="admin-post-page">
    <section class="update-form">
      <PostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import PostForm from "../../../components/Admin/PostForm";
export default {
  name: "index",
  components: {PostForm},
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: "Mess",
        title: 'Super lama',
        content: "Awesome lama, amazing skills",
        thumbnailLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3x-_FpsQBcH1Fz3V_fPT640VQtIVcl3we-w&usqp=CAU'
      }
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
