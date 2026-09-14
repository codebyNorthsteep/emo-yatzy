<script setup>
import { ref, reactive } from "vue";
const playerName = ref("");
const players = ref([]);

const points = reactive([]);

const kategorier = ["ettor", "tvaor", "treor", "fyror", "femmor", "sexor"];
const kombinationer = [
  "ettPar",
  "tvaPar",
  "tretal",
  "fyrtal",
  "litenStege",
  "storStege",
  "kak",
  "chans",
  "yatzy",
];

function addPlayer() {
  const id = Date.now();
  players.value.push({ id, name: playerName.value });
  points[id] = {};
  playerName.value = "";
}

function topSum(playerId) {
  return kategorier.reduce(
    (sum, k) => sum + (Number(points[playerId]?.[k]) || 0),
    0,
  );
}

function bonus(playerId) {
  return topSum(playerId) >= 63 ? 50 : 0;
}

function lowerSum(playerId) {
  return kombinationer.reduce(
    (sum, k) => sum + (Number(points[playerId]?.[k]) || 0),
    0,
  );
}

function totalSum(playerId) {
  return topSum(playerId) + bonus(playerId) + lowerSum(playerId);
}

function terminateGame() {
  players.value = [];
  Object.keys(points).forEach((key) => delete points[key]);
}
</script>

<template>
  <form @submit.prevent="addPlayer">
    <input class="player-input" type="text" v-model="playerName" />
    <button type="button">Add Player</button>
  </form>
  <table class="yatzy-block">
    <thead>
      <tr class="summa-rad">
        <th>SPELARE:</th>
        <th v-for="player in players" :key="player.id">
          {{ player.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Ettor</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].ettor" />
        </td>
      </tr>
      <tr>
        <th scope="row">Tvåor</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].tvaor" />
        </td>
      </tr>
      <tr>
        <th scope="row">Treor</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].treor" />
        </td>
      </tr>
      <tr>
        <th scope="row">Fyror</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].fyror" />
        </td>
      </tr>
      <tr>
        <th scope="row">Femmor</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].femmor" />
        </td>
      </tr>
      <tr>
        <th scope="row">Sexor</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].sexor" />
        </td>
      </tr>

      <tr class="summa-rad">
        <th scope="row">SUMMA:</th>
        <td v-for="player in players" :key="player.id">
          {{ topSum(player.id) }}
        </td>
      </tr>

      <tr>
        <th scope="row">BONUS</th>
        <td v-for="player in players" :key="player.id">
          {{ bonus(player.id) }}
        </td>
      </tr>

      <tr>
        <th scope="row">Ett Par</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].ettPar" />
        </td>
      </tr>
      <tr>
        <th scope="row">Två Par</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].tvaPar" />
        </td>
      </tr>
      <tr>
        <th scope="row">Tretal</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].tretal" />
        </td>
      </tr>
      <tr>
        <th scope="row">Fyrtal</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].fyrtal" />
        </td>
      </tr>
      <tr>
        <th scope="row">Liten stege</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].litenStege" />
        </td>
      </tr>
      <tr>
        <th scope="row">Stor stege</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].storStege" />
        </td>
      </tr>
      <tr>
        <th scope="row">Kåk</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].kak" />
        </td>
      </tr>
      <tr>
        <th scope="row">Chans</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].chans" />
        </td>
      </tr>
      <tr>
        <th scope="row">YATZY</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].yatzy" />
        </td>
      </tr>

      <tr class="summa-rad">
        <th scope="row">SUMMA:</th>
        <td v-for="player in players" :key="player.id">
          {{ totalSum(player.id) }}
        </td>
      </tr>
    </tbody>
  </table>
  <button type="button" @click="terminateGame">Nytt Spel</button>
</template>

<style scoped>
.yatzy-block {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 2px solid #1a1a1a;
  padding: 4px 8px;
  text-align: left;
}

.summa-rad {
  background-color: #c9b8a3;
  font-weight: bold;
}

input {
  width: 100%;
  border: none;
  background: transparent;
  text-align: center;
}

.player-input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 200px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}
</style>
