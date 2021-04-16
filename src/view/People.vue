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

    <section>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-3"
            v-for="(items, index) in celebritys"
            :key="index"
          >
            <div
              class="shadow d-flex justify-content-center align-items-center p-3 mt-5 bg-darks rounded-lg flex-column"
            >
              <div class="person-img">
                <img
                  :src="`https://image.tmdb.org/t/p/w235_and_h235_bestv2/${items.profile_path}`"
                  alt="image_1"
                  class="img-fluid rounded-circle"
                />
              </div>
              <div class="person-name my-2">
                <h6 class="name">{{ items.name }}</h6>
              </div>
              <div class="info">
                <h6 class="acting">{{ items.known_for_department }}</h6>
              </div>
              <div class="social-icons my-2">
                <a href="#" class="text-darks p-1"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a href="#" class="text-darks p-1"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="#" class="text-darks p-1"
                  ><i class="fab fa-twitter"></i
                ></a>
              </div>
              <button type="button" class="btn btn-secondary btn-lg btn-lock">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

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
import $ from "jquery";

export default {
  name: "header-page",
  data: () => ({
    celebritys: [],
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
  }),
  created() {
    const self = this;
    const page = 1;
    const settings = {
      async: true,
      crossDomain: true,
      url:
        " https://api.themoviedb.org/3/person/popular?api_key=f8296e1f43041e1ad8fbb6ed38ba32dd&language=en-US&page=" +
        page,
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
      self.celebritys = response.results;
      console.log(self.celebritys);
    });
  },
};
</script>
