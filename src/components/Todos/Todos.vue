<template>
  <div class="todos">
    This is a todo by {{ name }}.
    <span v-if="flag">nice</span>
    <span v-else>nicen't</span>

    <div class="container" :class="classType"></div>
    </div>
</template>

<script type="module" src="./Todos.js"></script>
