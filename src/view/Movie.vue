<template>
  <div id="pages-movie">
    <div class="container">
      <p class="text-white">{{ movieHeader.overview }}</p>
    </div>
  </div>
</template>

<script>
let apiKey = `f8296e1f43041e1ad8fbb6ed38ba32dd`;
import axios from "axios";
export default {
  name: "pages-movie",
  data() {
    return {
      movieHeader: {},
    };
  },
  methods: {
    getHeader() {    
      return axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      );
    },
    async getMovies() {
      let [movieHeader] = await Promise.all([this.movieHeader]);
      this.movieHeader = movieHeader.data;
    },
  },
  created() {
    this.getMovies();
  },
};
</script>