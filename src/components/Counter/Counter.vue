<template>
  <section class="counter">
    <span class="count">{{ count }}</span>
    <!-- <div class="toggles"> -->
    <button class="incrementor" @click="increment()">+</button>
    <button class="incrementor" @click="count--">-</button>
    <!-- </div> -->
  </section>
</template>

<script type="module" src="./Counter.js"></script>
