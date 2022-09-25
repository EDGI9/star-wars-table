<template>
  <div class="c-modal">
    <div class="c-modal__container">
      <div class="c-modal__header">
        <slot name="header"></slot>
      </div>
      <div class="c-modal__body">
        <slot name="body"></slot>
      </div>
      <div class="c-modal__footer">
        <slot name="footer">
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
}
</script>

<style lang="scss" scoped>
.c-modal {
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    height: 100%;
    width: 100%;
    z-index: 9999999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    .c-modal__container {
      background-color: white;
      padding:  20px 40px;
      max-width: 500px;
      max-height: 400px ;
      min-width: 300px;
      min-height: 200px;
      border-radius: 5px;
      box-shadow: 5px 5px 8px rgba($color: #000000, $alpha: 0.2);
    }
    .c-modal__header{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: start;
    }
    .c-modal__body{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: start;
    }
    .c-modal__footer {
      display: flex;
      justify-content: end;
    }
}

</style>