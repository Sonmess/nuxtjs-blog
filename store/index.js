import Vuex from 'vuex';

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
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              vuexContext.commit('setPosts', [
                {
                  id: 1,
                  title: 'Koala je super',
                  previewText: 'Koaly ziju v australii',
                  thumbnail: 'https://relaxmagazin.sk/wp-content/uploads/2017/11/Koala.jpg'
                },
                {
                  id: 2,
                  title: 'Koala je super2',
                  previewText: 'Koaly ziju v australii',
                  thumbnail: 'https://relaxmagazin.sk/wp-content/uploads/2017/11/Koala.jpg'
                },
                {
                  id: 3,
                  title: 'Koala je super3',
                  previewText: 'Koaly ziju v australii',
                  thumbnail: 'https://relaxmagazin.sk/wp-content/uploads/2017/11/Koala.jpg'
                }
              ]);
              resolve();
            }, 1500);
          });
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
