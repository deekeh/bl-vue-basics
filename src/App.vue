<template>
  <div class="main">
    <!-- <todos /> -->
    <counter />
  </div>
</template>

<script>
  // import Todos from "./components/Todos/Todos.vue";
  import Counter from "@/components/Counter/Counter.vue"; // @ is the same as /src

  export default {
    name: "App",
    components: {
      // Todos,
      Counter,
    },
  };
</script>

<style>
  /* css reset */
  *,
  body,
  html {
    box-sizing: border-box;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  body,
  html {
    min-height: 100vh;
  }
  body {
    position: relative;
    top: 0;
    left: 0;
  }

  .main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
