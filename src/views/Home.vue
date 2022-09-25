<template>
    <div class="u-margin-top-4">
      <FullScreenImage
        :background-image="require('@/assets/backgroundImage1.jpg')"
        size="contain"
        :height="300"
        class="u-flex u-flex-column u-flex-justify-end"/>
      <h1 >May the force be with you</h1>
    </div>
</template>

<script>
import FullScreenImage from "@components/FullScreenImage";

export default {
  name: 'Home',
  components: {
    FullScreenImage
  },
};
</script>
