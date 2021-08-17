import Vuex from 'vuex';
import Axios from 'axios';
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => {
          return post.id === editedPost.id;
        })
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return Axios.get(process.env.baseUrl + 'post.json')
          .then(response => {
            let postsArray = [];
            for (const index in response.data) {
              postsArray.push({...response.data[index], id: index, previewText: response.data[index].content});
            }
            vuexContext.commit('setPosts', postsArray);
          })
          .catch(e => {
            context.error(e);
          })
        //This was used in handling data lecture, we dont need it anymore
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     vuexContext.commit('setPosts', [
        //       {
        //         id: 1,
        //         title: 'Koala je super',
        //         previewText: 'Koaly ziju v australii',
        //         thumbnail: 'https://relaxmagazin.sk/wp-content/uploads/2017/11/Koala.jpg'
        //       },
        //       {
        //         id: 2,
        //         title: 'Koala je super2',
        //         previewText: 'Koaly ziju v australii',
        //         thumbnail: 'https://relaxmagazin.sk/wp-content/uploads/2017/11/Koala.jpg'
        //       },
        //       {
        //         id: 3,
        //         title: 'Koala je super3',
        //         previewText: 'Koaly ziju v australii',
        //         thumbnail: 'https://relaxmagazin.sk/wp-content/uploads/2017/11/Koala.jpg'
        //       }
        //     ]);
        //     resolve();
        //   }, 1500);
        // });
      },
      addPost(vueContext, post) {
        const createdPost = {...post, updatedAt: new Date()};
        return Axios.post(
          process.env.baseUrl + 'post.json',
          createdPost
        )
          .then(response => {
            vueContext.commit('addPost', {...createdPost, id: response.data.name});
            this.$router.push('/admin');
          })
          .catch(error => {
            console.log(error);
          })
      },
      editPost(vueContext, editedPost) {
        return Axios
          .put(
            process.env.baseUrl + editedPost.id + ".json",
            editedPost)
          .then((res) => {
            vueContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
}

export default createStore;
