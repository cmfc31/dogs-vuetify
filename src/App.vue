<template>
  <v-app>
    <!-- GLOBAL SNACKBAR -->
    <v-snackbar
      v-model="snackbar.active"
      :color="snackbar.color"
      :right="true"
      :bottom="true"
      :timeout="snackbar.timer"
    >
      {{ snackbar.message }}
      <template #action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar.active = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-app-bar app color="primary" dark>
      <div class="d-flex no-select" @click="goToHome" style="cursor: pointer">
        <div class="d-flex align-center">
          <v-icon size="40">fas fa-dog</v-icon>
        </div>
        <div>
          <span class="text-h4 font-weight-bold ml-4">Dogs vuetify</span>
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="favorites" text>
        <span class="mr-2">Favorites</span>
        <v-icon>fas fa-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    goToHome() {
      this.$router.push({ path: "/" });
    },
  },
  computed: {
    ...mapState(["snackbar"]),
  },
};
</script>

<style>
.no-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>
