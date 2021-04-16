<template>
  <div class="wrap-content">
    <appNav :nav-links="navLinks" />
    <appHeader />
    <appComing />
    <appShow />
    <appAbout />
    <appContact />
  </div>
</template>

<script>
//import axios from "axios";
import NavPage from "./NavPage";
import HeaderPage from "./HeaderPage";
import ComingSoon from "./ComingSoon";
import TvShow from "./TvShow";
import AboutThink from "./AboutThink";
import ContactFooter from "./ContactFooter";
//const apiKey = `f8296e1f43041e1ad8fbb6ed38ba32dd`;

export default {
  components: {
    appNav: NavPage,
    appHeader: HeaderPage,
    appComing: ComingSoon,
    appShow: TvShow,
    appAbout: AboutThink,
    appContact: ContactFooter,
  },
  data() {
    return {
      navLinks: [
        {
          text: "Home",
          path: "/",
        },
        {
          text: "Movies",
          path: "/movies",
        },
        {
          text: "People",
          path: "/people",
        },
      ],
      // id: this.$route.params.imdb_id,
    };
  },
  // methods: {
  //   async getMovie() {
  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/movie/${this.$route.params.imdb_id}?api_key=${apiKey}&language=en-US`,
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
};
</script>
