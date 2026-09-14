import { ref, reactive } from "vue";

export function useStandardYatzyLogic() {
  const playerName = ref("");
  const players = ref([]);

  const points = reactive([{}]);

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
