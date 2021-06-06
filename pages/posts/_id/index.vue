<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on: {{ loadedPost.updatedAt }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to
        <a href="mailto:matej.bohac@ringieraxelspringer.sk">matej.bohac@ringieraxelspringer.sk</a>
      </p>
    </section>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "index",
  asyncData(context) {
    return Axios.get('https://nuxt-blog-6f31b-default-rtdb.europe-west1.firebasedatabase.app/post/' + context.params.id + '.json')
      .then(response => {
        return {
          loadedPost: response.data
        }
      })
      .catch(e => context.error(e));
  }
  //We dont need it anymore
  // asyncData(context, callback) {
  //   setTimeout(() => {
  //     callback(null, {
  //       loadedPost: {
  //         id: 1,
  //         title: 'Lama krotka (ID: ' + (context.route.params.id) + ')',
  //         previewText: 'Toto je testovaci post',
  //         thumbnail: 'https://g.denik.cz/122/ee/lama_10803373-jpg_denik-630.jpg',
  //         author: "Sonmess",
  //         updatedAt: new Date(),
  //         content: 'Definitely not some end text, this is just a tribute.',
  //       }
  //     });
  //   }, 1000)
  // }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
