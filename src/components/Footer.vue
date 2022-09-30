<template>
  <footer class="c-footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.c-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: white;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
}
</style>
