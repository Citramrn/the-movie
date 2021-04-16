<template>
  <div class="jumbotron" id="movie">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="ml-item">
              <div class="icons">
                <!-- <span class="mli-quality hd text-white">HD</span> -->
              </div>
              <p class="tag text p-1">{{ movies.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
//let apiKey = "f8296e1f43041e1ad8fbb6ed38ba32dd";

export default {
  name: "movie",
  data() {
    return {
      movies: {},
    };
  },
  // methods: {
  //   async getMovie() {
  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=f8296e1f43041e1ad8fbb6ed38ba32dd&language=en-US`,
  //         {
  //           method: "GET",
  //           headers: { "Content-type": "application/json;charset=utf-8" },
  //           authorization:
  //             "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODI5NmUxZjQzMDQxZTFhZDhmYmI2ZWQzOGJhMzJkZCIsInN1YiI6IjYwMjkyODViN2U0MDNkMDAzZjNkMmRmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P5y4Zl-taIFRfIIJO87FdAdN9ELLW3Ny457ohGJo_6c",
  //         }
  //       ).then((res) => console.log(res));
  //       const data = await response.json();
  //       this.movies = [...this.movies, data];
  //     } catch (error) {
  //       console.error();
  //     }
  //   },
  // },

  // mounted() {
  //   this.getMovie();
  // },
  created() {
    const self = this;
    const settings = {
      async: true,
      crossDomain: true,
      url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=f8296e1f43041e1ad8fbb6ed38ba32dd&language=en-US`,
      method: "GET",
      headers: {
        "content-type": "application/json;charset=utf-8",
        authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODI5NmUxZjQzMDQxZTFhZDhmYmI2ZWQzOGJhMzJkZCIsInN1YiI6IjYwMjkyODViN2U0MDNkMDAzZjNkMmRmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P5y4Zl-taIFRfIIJO87FdAdN9ELLW3Ny457ohGJo_6c",
      },
      processData: false,
    };

    $.ajax(settings).done(function (response) {
      self.movies = response.results;
      // console.log(self.movies);
    });
  },
};
</script>
