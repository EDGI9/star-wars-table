<template>
  <div id="app">
    <header>
      <FullScreenImage
        :background-image="require('@/assets/backgroundImage.jpg')"
        size="contain"
        :height="200"
        class="u-background-color--black u-flex u-flex-column u-flex-justify-end"
      >
        <my-nav>
          <router-link to="/">Home</router-link> |
          <router-link to="SearchPage">Search Page</router-link>
        </my-nav>
      </FullScreenImage>
    </header>

    <main class="u-margin-bottom-4">
      <transition name="o-fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <my-footer class="u-flex u-flex-row u-flex-justify-center">
      <a target="_blank" :href="DEVELOPER_WEBSITE">
        <p>&copy; {{ DEVELOPER_NAME }} - {{ PROJECT_DATE }}</p>
      </a>
    </my-footer>
  </div>
</template>

<script>
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import FullScreenImage from "@components/FullScreenImage";

import { mapGetters } from "vuex";

export default {
  components: {
    "my-nav": Nav,
    "my-footer": Footer,
    FullScreenImage
  },
  computed: {
    ...mapGetters("developerData/", [
      "DEVELOPER_NAME",
      "DEVELOPER_WEBSITE",
      "PROJECT_DATE"
    ])
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

main {
  margin: 0 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
