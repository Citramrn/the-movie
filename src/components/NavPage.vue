<template>
  <div class="nav navbar navbar-expand-lg">
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
</template>

<script>
export default {
  name: "nav-page",
  props: ["navLinks"],
};
</script>

<style lang="css"></style>
