<script setup>

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div>
    <h2>Welcome to Emo Yatzy!</h2>
    <p>This is a simple Yatzy game built with Vue.js.</p>
    <p>Choose a game mode from the navigation above to get started.</p>
  </div>
</template>
