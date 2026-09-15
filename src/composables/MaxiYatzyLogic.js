import { ref, reactive, watch } from "vue";

export function useMaxiYatzyLogic() {
  const STORAGE_KEY = "maxiYatzy";
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    players: [],
    points: {},
  };

  const playerName = ref("");
  const players = ref(savedData.players);
  const points = reactive(savedData.points);

  const kategorier = ["ettor", "tvaor", "treor", "fyror", "femmor", "sexor"];
  const kombinationer = [
    "ettPar",
    "tvaPar",
    "trePar",
    "tretal",
    "fyrtal",
    "femtal",
    "litenStege",
    "storStege",
    "fullStege",
    "kak",
    "hus",
    "torn",
    "chans",
    "maxiYatzy",
  ];

    watch(
      [players, points],
      () => {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ players: players.value, points: points }),
        );
      },
      { deep: true },
    );

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
    return topSum(playerId) >= 75 ? 50 : 0;
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
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    playerName,
    players,
    points,
    kategorier,
    kombinationer,
    addPlayer,
    topSum,
    bonus,
    lowerSum,
    totalSum,
    terminateGame,
  };
}
