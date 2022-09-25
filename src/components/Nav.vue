<template>
    <nav class="c-nav">
        <slot></slot>
    </nav>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style lang="scss" scoped>
.c-nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #fafafa;
      text-decoration: none;
      &:hover {
          color: #e0c111;
      }
    }

    .router-link-exact-active {
        color: #e0c111;
    }
  }
</style>