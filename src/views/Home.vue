<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="dog in dogs" :key="dog.id">
          <v-card class="fill-height">
            <div class="d-flex flex-column">
              <v-img
                :src="dog.url"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
              </v-img>
              <v-card-title
                v-text="
                  dog.breeds.length > 0 ? dog.breeds[0].name : 'Unknown breed'
                "
              ></v-card-title>
              <v-card-text
                v-if="dog.breeds.length > 0"
                class="text-subtitle-1 black--text"
              >
                <span class="font-weight-bold">Life span:</span>
                {{ dog.breeds[0].life_span }} <br />
                <span class="font-weight-bold">Temperament:</span>

                <v-chip
                  v-for="temp in dog.breeds[0].temperament.split(',')"
                  :key="temp"
                  class="ma-2"
                  color="pink lighten-2 white--text"
                >
                  {{ temp }}
                </v-chip>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon @click="saveFavorite(dog.id)">
                  <v-icon color="red darken-2">fas fa-heart</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      nombre: "Martin",
      dogs: [],
      snackbar: false,
    };
  },
  methods: {
    saveFavorite(id) {
      axios
        .post("favourites", {
          image_id: id,
          sub_id: "Martin",
        })
        .then(() => {
          this.$store.dispatch("showSnack", {
            message: "Image marked as favorite",
            color: "success",
          });
        })
        .catch(() => {
          this.$store.dispatch("showSnack", {
            message: "You already have this image in your favorites",
            color: "red darken-2",
          });
        });
    },
    fetchDogs() {
      axios
        .get("images/search?limit=6&page=1&order=Rand&breed_ids=55")
        .then((response) => {
          this.dogs = response.data;
        });
    },
  },
  created() {
    this.fetchDogs();
  },
};
</script>
