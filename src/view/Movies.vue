<template>
  <section>
    <div class="nav navbar navbar-expand-lg" :nav-links="navLinks">
      <div class="container">
        <div class="logo">
          <img src="@/assets/img/movie.png" alt="movies" width="60" />
        </div>
        <div class="links">
          <a v-for="(link, index) in navLinks" :key="index">
            <router-link :to="link.path">
              {{ link.text }}
            </router-link></a
          >

          <div class="container"></div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div
            class="input-group input-group-lg mt-5 rounded border-4 border border-dark"
          >
            <span class="input-group-text fs-5" id="inputGroup-sizing-default"
              >SEARCH</span
            >
            <input
              type="text"
              class="form-control p-2 fs-6"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search for a Movie, Tvshows, and News"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <VueSlickCarousel
        class="row sliders"
        v-if="movies.length"
        v-bind="slickOptions"
      >
        <div class="col-sm-3" v-for="(movie, index) in movies" :key="index">
          <router-link
            class="routerLink"
            :to="'/movie/:imdb_id' + movie.imdb_id"
          >
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
                <p class="tag text">{{ movie.original_title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </VueSlickCarousel>
    </div>

    <section class="fires mt-5" id="contact-footer">
      <main class="container pt-md-5 my-md pt-4 p-5">
        <div class="row">
          <div class="col-6 col-md">
            <h5 class="labs">Vegetarian Food</h5>
            <p class="hire">Restaurant</p>
            <img alt="logoku" src="@/assets/img/movie.png" width="70" />
          </div>
          <div class="col-6 col-md">
            <h5 class="white">Categories</h5>
            <ul class="list-unstyled">
              <a href="#" class="sans">
                <li>Fruits</li>
              </a>
              <a href="#" class="sans">
                <li>Vegetables</li>
              </a>
              <a href="#" class="sans">
                <li>Dairy Products</li>
              </a>
              <a href="#" class="sans">
                <li>Package Foods</li>
              </a>
              <a href="#" class="sans">
                <li>Bevarage</li>
              </a>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 class="white">User Links</h5>
            <ul class="list-unstyled sans">
              <a href="#" class="sans">
                <li>Payment Tax</li>
              </a>
              <a href="#" class="sans">
                <li>Terms Of</li>
              </a>
              <a href="#" class="sans">
                <li>Services</li>
              </a>
              <a href="#" class="sans">
                <li>My Account</li>
              </a>
              <a href="#" class="sans">
                <li>Return Policy</li>
              </a>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 class="white">Address</h5>
            <ul class="list-unstyled">
              <ul class="list-unstyled sansy">
                <li>Blitar City Indonesia</li>
                <li>Jr Nian #876</li>
                <li>0342-754-421</li>
                <li>Caffe97@gmail.com</li>
                <li>Bevarage</li>
              </ul>
            </ul>
          </div>
        </div>
      </main>
      <footer class="container p-1 text-center">
        <div class="container p-3">
          <span class="text-muted sanst"
            >Copyright 2021 Restaurant. All Rights Reserved</span
          >
        </div>
      </footer>
    </section>
  </section>
</template>


<script>
//let apiKey = "f8296e1f43041e1ad8fbb6ed38ba32dd";

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
    };
  },
};
</script>


<style lang="css">
</style>