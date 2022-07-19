<template>
  <div>
    <h2>{{ dogs }}</h2>
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
    };
  },
  methods: {
    fetchDogs() {
      var me = this;
      axios
        .get("images/search?limit=6&page=1&order=Rand")
        .then(function (response) {
          me.dogs = response.data;
        });
    },
  },
  created() {
    this.fetchDogs();
  },
};
</script>
