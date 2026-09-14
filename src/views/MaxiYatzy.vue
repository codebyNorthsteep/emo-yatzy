<script setup>
import MaxiForm from '../components/MaxiForm.vue'
import MaxiInstructions from '../components/MaxiInstructions.vue'
</script>
<template>
    <div class="maxi-yatzy-welcome">
        <h2>Maxi Yatzy</h2>
    </div>
    <div>
        <MaxiForm />
    </div>
    <div>
        <h3>Maxi Yatzy Instructions:</h3>
        <MaxiInstructions />
    </div>
</template>

<style scoped>

.maxi-yatzy-welcome {
  text-align: center;
  margin-bottom: 20px;
}
</style>