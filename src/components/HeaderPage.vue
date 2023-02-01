<template>
  <div class="jumbotron" id="header-page">
    <div class="container">
      <VueSlickCarousel
        class="row sliders"
        v-bind="slickOptions"
        v-if="movies.length"
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
                      ><i class="fa fa-star"></i>{{ movie.vote_average }}</span
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
let apiKey = `f8296e1f43041e1ad8fbb6ed38ba32dd`;
import axios from "axios";
export default {
  name: "header-page",
  data() {
    return {
      movies: [],
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
  methods: {
    async getTrendingMovie() {
      let film = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
      );
      this.movies = film.data.results;
    },
  },
  created() {
    this.getTrendingMovie();
  },
};
</script>
