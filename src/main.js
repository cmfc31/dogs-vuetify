import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

axios.defaults.baseURL = "https://api.thedogapi.com/v1/";

// Agregando token de acceso para las peticiones
axios.interceptors.request.use(
  (config) => {
    const apiKey = process.env.VUE_APP_APIKEY;

    config.headers["x-api-key"] = apiKey;

    return config;
  },
  () => {
    //What do you want to do when a call fails?
    console.log("Request a API fallido.");
  }
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
