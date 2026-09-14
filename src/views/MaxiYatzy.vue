<script setup>
import MaxiForm from "../components/MaxiForm.vue";
import MaxiInstructions from "../components/MaxiInstructions.vue";
</script>
<template>
  <div class="maxi-yatzy-welcome">
    <h2>Maxi Yatzy</h2>
  </div>
  <div>
    <MaxiForm />
  </div>
  <div class="maxi-yatzy-instructions">
    <h3>Maxi Yatzy Instructions:</h3>
    <h3>· · ─ ·𖥸· ─ · ·</h3>
    <MaxiInstructions />
  </div>
</template>

<style scoped>
.maxi-yatzy-welcome {
  text-align: center;
  margin-bottom: 20px;
}
.maxi-yatzy-instructions {
  text-align: center;
  margin-top: 20px;
}
</style>
