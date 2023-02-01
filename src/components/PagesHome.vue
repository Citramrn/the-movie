<template>
  <div class="wrap-content">
    <appNav :nav-links="navLinks" />
    <appHeader :movieHeader="movieHeader"/>
    <appComing :movieComing="movieComing" />
    <appShow :movieTvshow="movieTvshow" />
    <appAbout />
    <appContact />
  </div>
</template>

<script>
import NavPage from "./NavPage";
import HeaderPage from "./HeaderPage";
import ComingSoon from "./ComingSoon";
import TvShow from "./TvShow";
import AboutThink from "./AboutThink";
import ContactFooter from "./ContactFooter";
const apiKey = `f8296e1f43041e1ad8fbb6ed38ba32dd`;
import axios from "axios";

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

      movieHeader: {},
      movieComing: [],
      movieTvshow: [],
    };
  },

  methods: {
    getHeader() {
      return axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${apiKey}&language=en-US`
      );
    },

    getComingsoon() {
      return axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}/lists?api_key=${apiKey}&language=en-US`
      );
    },

    getTvshow() {
      return axios.get(
        `https://api.themoviedb.org/3/tv/${this.$route.params.id}?api_key=${apiKey}&language=en-US`
      );
    },

    async getMovies() {
      let [movieHeader, movieComing, movieTvshow] = await Promise.all([
        this.movieHeader,
        this.getComingsoon,
        this.getTvshow,
      ]);

      this.movieHeader = movieHeader.data;
      this.movieComing = movieComing.data;
      this.movieTvshow = movieTvshow.data;
    },
  },
  created() {
    this.getMovies();
  },
};
</script>


