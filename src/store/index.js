import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    subject:"",
    nameSubject:"",    
    nameAuthor:"",
    author:"",
    books: [],
    loading: false,
  },
  mutations: {
    LOAD_AUTHOR: (state, payload) => (state.author = payload),
    LOAD_BOOKS: (state, payload) => (state.books = payload, state.loading= false),
    LOAD_SUBJECT: (state, payload) => (state.subject = payload),

  },
  getters: {
    countBooks: (state) => state.books.length,
  },
  actions: {
    GET_BOOKS: (state) => {
      axios.get(`http://openlibrary.org/search.json?author=${state.state.author}`)
      .then(
        response => {
            const arrayBooks= response.data.docs.map( item => {
              let obj = {};
              obj.author = item.author_name[0];
              obj.title = item.title;
              obj.key = item.edition_key;
              obj.cover = item.cover_i;
              return obj;
            });
            state.commit("LOAD_BOOKS",arrayBooks)           
        }
      )
    },

    GET_SUBJECT: (state) => {
      axios.get(`http://openlibrary.org/subjects/${state.state.subject}`)
      .then(
        response => {
            const arrayBooks= response.data.works.map( item => {
              let obj = {};
              obj.author = item.authors[0].name;
              obj.title = item.title;
              obj.key = item.cover_edition_key;
              obj.cover = item.cover_id;
              return obj;
            });
            state.commit("LOAD_BOOKS",arrayBooks)
        }
      )
    }
  },
});
