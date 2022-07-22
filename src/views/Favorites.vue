<template>
  <div>
    <!-- DELETE DIALOG -->
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Remove favorite </v-card-title>
        <v-card-text class="black--text text-subtitle-1"
          >Are you sure to remove this image from your favorites? This action is
          not reversible.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Cancel </v-btn>
          <v-btn color="primary" @click="removeFavorite"> Remove </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- BODY -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="fav in favs" :key="fav.id">
          <v-card>
            <v-img :src="fav.image.url" height="300">
              <div class="d-flex justify-end">
                <v-btn
                  fab
                  dark
                  class="mt-2 mr-2"
                  color="rgba(0, 0, 0, 0.5)"
                  @click="showDeleteDialog(fav.id)"
                >
                  <v-icon color="white">fas fa-trash-alt</v-icon>
                </v-btn>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Favorites",
  data() {
    return {
      selectedId: null,
      dialog: false,
      favs: [],
    };
  },
  created() {
    this.fetchFavorites();
  },
  methods: {
    showDeleteDialog(id) {
      this.selectedId = id;
      this.dialog = true;
    },
    removeFavorite() {
      axios
        .delete(`favourites/${this.selectedId}`)
        .then(() => {
          this.$store.dispatch("showSnack", {
            message: "Image removed from favorites",
            color: "success",
          });
          this.dialog = false;
        })
        .catch(() => {
          this.$store.dispatch("showSnack", {
            message: "Something went wrong...",
            color: "red darken-2",
          });
        })
        .finally(() => {
          this.fetchFavorites();
        });
    },
    fetchFavorites() {
      axios.get("favourites").then((response) => {
        this.favs = response.data;
      });
    },
  },
};
</script>
