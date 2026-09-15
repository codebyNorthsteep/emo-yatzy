<script setup>
import "../assets/yatzyTables.css";
import { useMaxiYatzyLogic } from "../composables/maxiYatzyLogic.js";
const {
  playerName,
  players,
  points,
  topSum,
  bonus,
  totalSum,
  addPlayer,
  terminateGame,
} = useMaxiYatzyLogic();
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="addPlayer">
      <input
        class="player-input"
        type="text"
        minlength="1"
        maxlength="10"
        v-model="playerName"
        placeholder="Skriv in spelarnamn.."
      />
      <button type="submit">Add Player</button>
    </form>
  </div>
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
        <th scope="row">Tre Par</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].trePar" />
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
        <th scope="row">Femtal</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].femtal" />
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
        <th scope="row">Full stege</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].fullStege" />
        </td>
      </tr>
      <tr>
        <th scope="row">Kåk</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].kak" />
        </td>
      </tr>
      <tr>
        <th scope="row">Hus</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].hus" />
        </td>
      </tr>
      <tr>
        <th scope="row">Torn</th>
        <td v-for="player in players" :key="player.id">
          <input type="number" v-model="points[player.id].torn" />
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
  <div id="terminate-button">
    <button type="button" @click="terminateGame">Nytt Spel</button>
  </div>
</template>
