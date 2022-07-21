<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex" @click="goToHome">
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
};
</script>
