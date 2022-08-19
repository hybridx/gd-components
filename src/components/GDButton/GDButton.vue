<template>
  <button @click="onClick" class="gd-button">
    Click Me!
  </button>
</template>
<style>
  .gd-button {
    display: inline-block;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    border: none;
    background-color: #c00;
    color: #fff;
    cursor: pointer;
  }
</style>
<script>
  export default {
    name: 'GDButton',
    methods: {
      onClick() {
        console.log('Hello World')
      }
    }
  }
</script>
