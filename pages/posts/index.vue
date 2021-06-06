<template>
  <div class="posts-page">
  <PostList :posts="serverPosts"/>
  </div>
</template>

<script>
import PostList from "../../components/Posts/PostList";

export default {
  name: "index",
  components: {
    PostList
  },
  // fetch(context) {
  //   //We have better solution in vuex store
  //   // if (context.store.state.loadedPosts.length > 0) {
  //   //   return null;
  //   // }
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         serverPosts: [
  //           {
  //             id: 1,
  //             title: 'Koala je super',
  //             previewText: 'Koaly ziju v australii',
  //             thumbnail: 'https://relaxmagazin.sk/wp-content/uploads/2017/11/Koala.jpg'
  //           },
  //           {
  //             id: 2,
  //             title: 'Koala je super2',
  //             previewText: 'Koaly ziju v australii',
  //             thumbnail: 'https://relaxmagazin.sk/wp-content/uploads/2017/11/Koala.jpg'
  //           },
  //           {
  //             id: 3,
  //             title: 'Koala je super3',
  //             previewText: 'Koaly ziju v australii',
  //             thumbnail: 'https://relaxmagazin.sk/wp-content/uploads/2017/11/Koala.jpg'
  //           }
  //         ]
  //       });
  //     }, 1500);
  //   })
  //   .then(data => {
  //     context.store.commit('setPosts', data.serverPosts);
  //   })
  //   .catch(e => {
  //     context.error(new Error());
  //   })
  // },
  computed: {
    serverPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
  // We have better solution for this :)
  // created() {
  //   this.$store.dispatch('setPosts', this.serverPosts);
  //   console.log(this.$store.getters.loadedPosts);
  // }
}
</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
