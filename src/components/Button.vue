<template>
  <button class="c-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button"
};
</script>

<style lang="scss" scoped>
.c-button {
  padding: 5px 20px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #e0c111;
  font-weight: 600;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:hover {
    cursor: pointer;
  }
}
</style>
