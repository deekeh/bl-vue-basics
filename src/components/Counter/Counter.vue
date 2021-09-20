<template>
  <section
    class="counter"
    :class="[exceeding == 1 ? 'upper' : exceeding == -1 ? 'lower' : '']"
  >
    <span class="count">{{ count }}</span>
    <button :disabled="count >= 10" class="incrementor" @click="increment()">
      +
    </button>
    <button :disabled="count <= 0" class="incrementor" @click="count--">
      -
    </button>
  </section>
</template>

<script type="module" src="./Counter.js"></script>
