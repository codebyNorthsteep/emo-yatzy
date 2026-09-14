<script setup>
import StandardForm from "../components/StandardForm.vue";
import StandardInstructions from "../components/StandardInstructions.vue";
</script>

<template>
  <div class="standard-yatzy-welcome">
    <h2>Standard Yatzy</h2>
  </div>
  <div>
    <StandardForm />
  </div>
  <div class="standard-yatzy-instructions">
    <h3>Standard Yatzy Instructions:</h3>
    <h3>· · ─ ·𖥸· ─ · ·</h3>
    <StandardInstructions />
  </div>
</template>

<style scoped>
.standard-yatzy-welcome {
  text-align: center;
  margin-bottom: 20px;
}

.standard-yatzy-instructions {
  text-align: center;
  margin-top: 20px;
}
</style>
