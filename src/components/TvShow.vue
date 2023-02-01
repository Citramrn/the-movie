<template>
  <section class="sections" id="tv-show">
    <div class="container">
      <div class="row g-3">
        <div class="col-md-7 col-lg-8 mt-5">
          <h5
            class="d-flex justify-content-between align-items-center mb-3 gumit"
          >
            <span>TV SHOW</span>
          </h5>
          <VueSlickCarousel
            class="row sliders"
            v-bind="slickOptions"
            v-if="articles.length"
          >
            <div
              class="col-sm-3"
              v-for="(article, index) in articles"
              :key="index"
            >
              <div class="card">
                <img
                  :src="`https://image.tmdb.org/t/p/w500/${article.poster_path}`"
                  class="card-img-top"
                  alt="movies_pothos"
                />
                <div class="ml-item">
                  <div class="icons">
                    <!-- <span class="mli-quality hd text-white">HD</span> -->
                    <div class="rating-durasi">
                      <span class="mli-rating"
                        ><i class="fa fa-star"></i
                        >{{ article.vote_average }}</span
                      >
                      &emsp;
                      <span class="mli-durasi"
                        ><i class="fas fa-closed-captioning"></i
                        >{{ article.original_language }}</span
                      >
                    </div>
                  </div>
                  <p class="tag text">{{ article.original_name }}</p>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "tv-show",
  data() {
    return {
      articles: [],
      slickOptions: {
        dots: true,
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
      },
    };
  },
};
</script>
