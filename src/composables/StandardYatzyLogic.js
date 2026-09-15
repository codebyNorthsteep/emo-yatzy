import { ref, reactive, watch } from "vue";

export function useStandardYatzyLogic() {
  const STORAGE_KEY = "standardYatzy";
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
    "tretal",
    "fyrtal",
    "litenStege",
    "storStege",
    "kak",
    "chans",
    "yatzy",
  ];

  // Watch for changes in players and points, and save to localStorage. The meaning of tthis is that whenever the players or points change, the new state will be saved to localStorage under the key "standardYatzy". This allows the game state to persist across page reloads or browser sessions.
  //this is the essential part of the code that ensures that the game state is saved and can be restored later. It uses the watch function from Vue to monitor changes in the players and points reactive variables. When either of these variables changes, the callback function is executed, which saves the current state to localStorage as a JSON string. The { deep: true } option is used to ensure that nested changes within the players and points objects are also detected and trigger the save operation.
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
