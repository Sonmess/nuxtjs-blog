import Vuex from 'vuex';
import Axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return Axios.get('https://nuxt-blog-6f31b-default-rtdb.europe-west1.firebasedatabase.app/post.json')
          .then(response => {
            let postsArray = [];
            for (const index in response.data) {
              postsArray.push({ ...response.data[index], id: index, previewText: response.data[index].content});
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
