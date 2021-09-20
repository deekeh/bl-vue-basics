<template>
  <section class="counter">
    <span class="count" :v-html="count">{{count}}</span>
    <button class="incrementor" @click="increment()">+</button>
  </section>
</template>

<script type="module" src="./Counter.js"></script>
