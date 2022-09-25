<template>
  <section
    class="c-full-screen-image"
    :class="[backgroundImageSizeClass, fullScreenClass, absoluteClass]"
    :style="{backgroundImage: backgroundImageStyle,height: heightStyle}">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: "FullScreenImage",
    props: {
      "background-image": {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: "contain"
      },
      "is-full-screen": {
        type: Boolean,
        default: false
      },
      height: {
        type: Number,
        default: 600
      },
      absolute: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      backgroundImageStyle() {
        return `url(${this.backgroundImage})`;
      },
      backgroundImageSizeClass() {
        return `c-full-screen-image_size-${this.size}`;
      },
      absoluteClass() {
        return this.absolute ? "c-full-screen-image_is--absolute" : "";
      },
      fullScreenClass() {
        return this.isFullScreen ? "c-full-screen-image_is--fullscreen" : "";
      },
      heightStyle(){
        return `${this.height}px`;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .c-full-screen-image {
    width: 100%;

    background-repeat: no-repeat;
    background-position: center center;
    &.c-full-screen-image_size-cover {
      background-size: cover;
    }
    &.c-full-screen-image_size-contain {
      background-size: contain;
    }
    &.c-full-screen-image_is--fullscreen {
      height: 100%;
    }
    &.c-full-screen-image_is--absolute {
      position: absolute;
      top: 0;
    }
  }
</style>

