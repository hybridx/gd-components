<template>
  <!-- Added tailwind css classes to test -->
  <button @click="onClick" class="px-4 py-2 rounded-md bg-indigo-500 dark:bg-yellow-500 text-white dark:text-black">
    <slot>
      Click Me!
    </slot>
  </button>
</template>
<script>
  import '../../index.styles.css'
  export default {
    name: 'GDButton',
    methods: {
      onClick() {
        console.log('Hello World')
      }
    }
  }
</script>
