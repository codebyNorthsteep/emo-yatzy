# Emo Yatzy 🖤

Ett digitalt anteckningsblock för Yatzy — inga tärningar, inget krångel, bara plats att fylla i poängen medan ni spelar med era egna tärningar. Byggt med Vue 3 + Vite, med ett Emo-tema (schackrutig bakgrund, rosa accentfärg, Aboreto/Lekton-typsnitt).

   <img width="534" height="498" alt="finalGifDemo" src="/src/assets/emo-yatzy.gif">

## Funktioner

- **Standard Yatzy** — klassiska spelet med fem tärningar, 15 kategorier
- **Maxi Yatzy** — större variant med sex tärningar, fler kombinationer (Tre par, Full stege, Torn m.m.)
- **Flera spelare** — lägg till hur många spelare som helst, varje spelare får sin egen kolumn
- **Automatisk poängberäkning** — övre summa, bonus, nedre summa och totalsumma räknas ut live
- **Sparas automatiskt** — spelet sparas i webbläsarens `localStorage`, så pågående parti finns kvar även om sidan laddas om
- **Nytt spel** — nollställ tabellen och börja om utan att ladda om sidan

## Teknikstack

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vite](https://vitejs.dev/) — utvecklingsserver och byggverktyg
- [Vue Router](https://router.vuejs.org/) — navigering mellan sidor
- Ren CSS (inga externa UI-bibliotek)

## Projektstruktur

```
src/
├── assets/
│   ├── main.css              # Globala stilar: bakgrund, typografi, grid-container
│   └── yatzyTables.css       # Delad styling för Yatzy-tabellerna
├── components/
│   ├── Standard.vue          # Spelformulär för Standard Yatzy
│   └── Maxi.vue               # Spelformulär för Maxi Yatzy
├── composables/
│   ├── standardYatzyLogic.js # State och logik för Standard Yatzy
│   └── maxiYatzyLogic.js     # State och logik för Maxi Yatzy
├── views/
│   ├── HomeView.vue          # Förstasidan
│   ├── StandardYatzy.vue     # Spelregler + Standard-formuläret
│   └── MaxiYatzy.vue         # Spelregler + Maxi-formuläret
├── router/
│   └── index.js              # Routing mellan vyerna
├── App.vue                   # Header, navigering, footer
└── main.js                   # Appens startpunkt
```

## Kom igång

Klona projektet och installera beroenden:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

Bygg för produktion:

```bash
npm run build
```

## Poängregler i korthet

### Standard Yatzy (5 tärningar)
Bonus vid minst **63 poäng** i övre sektionen ger **50 bonuspoäng**.

### Maxi Yatzy (6 tärningar)
Bonus vid minst **75 poäng** i övre sektionen ger **50 bonuspoäng**.

Fullständiga spelregler och poängöversikt finns inne i appen, under respektive spelläge.

## Licens

Fritt att använda och bygga vidare på.

---

Gjord med ❤️ av [Northsteep](https://github.com/codebynorthsteep)