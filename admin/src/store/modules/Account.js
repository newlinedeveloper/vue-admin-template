// import PouchDB from 'pouchdb'
// import router from '@/router'
// import { removeCookie } from "@/helpers/collections";
// import UserServices from "@/apiServices/UserServices";

// var db = new PouchDB('admindb')

// const state = {
//   user: {},
//   token: ''
// };

// const mutations = {
//   // setuser(state, user) {
//   SET_TOKEN: (state, token) => {
//     state.token = token;
//   },
//   SET_USER: (state, user) => {
//     state.user = user
//     db.get('currUser').then(doc => {
//       db.put({
//         _id: 'currUser',
//         _rev: doc._rev,
//         user: user
//       })
//     }).catch(e => {
//       if (e.status === 404) {
//         db.put({
//           _id: 'currUser',
//           user: user
//         })
//       } else {
//         throw e
//       }
//     })
//   },
//   REMOVE_USER: (state, user) => {
//     db.get('currUser').then(function (doc) {
//       return db.remove(doc);
//     })
//   },
//   ON_LOGOUT_USER: (state, user) => {
//     state.user = {};
//     state.token = '';
//   }
// };

// const actions = {
//   onLoginUser: async ({ dispatch, commit, state }, payload) => {
//     commit("SET_USER", payload)
//   },
//   onLogoutUser: async ({ dispatch, commit, state }, payload) => {
//     await commit("ON_LOGOUT_USER", payload);
//     await commit('REMOVE_USER');
//     await removeCookie();
//     await router.push({ path: '/login' });
//     dispatch("onHandleLogout")
//   },
//   onHandleLogout: async ({ dispatch, commit, state }, payload) => {
//     UserServices.LogOutUser()
//       .then(response => {
//       })
//       .catch(error => { })
//       .finally(async () => {
//       })
//   }
// };
// const getters = {
//   getUserInfo: state => state.user,
// };

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions,
//   getters
// };