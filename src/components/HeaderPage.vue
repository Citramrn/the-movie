<template>
  <div class="jumbotron" id="header-page">
    <div class="container">
      <VueSlickCarousel
        class="row sliders"
        v-if="movies.length"
        v-bind="slickOptions"
      >
        <div class="col-sm-3" v-for="(movie, index) in movies" :key="index">
          <router-link :to="'/movie/' + movie.id" class="routerLink">
            <div class="card">
              <img
                :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                class="card-img-top"
                alt="movies_pothos"
              />
              <div class="ml-item">
                <div class="icons">
                  <!-- <span class="mli-quality hd text-white">HD</span> -->
                  <div class="rating-durasi">
                    <span class="mli-rating"
                      ><i class="fa fa-star"></i
                      >{{ movie.moviesvote_average }}</span
                    >
                    &emsp;
                    <span class="mli-durasi"
                      ><i class="fas fa-closed-captioning"></i
                      >{{ movie.original_language }}</span
                    >
                  </div>
                </div>
                <p class="tag text p-1">{{ movie.original_title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
//let apiKey = "f8296e1f43041e1ad8fbb6ed38ba32dd";

export default {
  name: "header-page",
  data() {
    return {
      id: this.$route.params.id,
      movies: {},
      slickOptions: {
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        initialSlide: 2,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
      },
    };
  },
  // methods: {
  //   async getMovie() {
  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
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
      url:
        "https://api.themoviedb.org/3/trending/all/day?api_key=f8296e1f43041e1ad8fbb6ed38ba32dd",
      method: "GET",
      headers: {
        "content-type": "application/json;charset=utf-8",
        authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODI5NmUxZjQzMDQxZTFhZDhmYmI2ZWQzOGJhMzJkZCIsInN1YiI6IjYwMjkyODViN2U0MDNkMDAzZjNkMmRmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P5y4Zl-taIFRfIIJO87FdAdN9ELLW3Ny457ohGJo_6c",
      },
      processData: false,
      data: "{}",
    };

    $.ajax(settings).done(function (response) {
      self.movies = response.results;
      console.log(self.movies);
    });
  },
};
</script>
