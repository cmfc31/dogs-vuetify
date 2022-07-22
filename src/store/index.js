import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: { active: false, color: "", message: "", timer: 4000 },
  },
  mutations: {
    UPDATE_SNACKBAR(state, snackbar) {
      state.snackbar = snackbar;
    },
  },
  actions: {
    showSnack({ commit }, { message, color, timer = 4000 }) {
      commit("UPDATE_SNACKBAR", {
        active: true,
        color: color,
        message: message,
        timer: timer,
      });
    },
  },
});
