
<template>
  <div class="welcome">
    <h2>Välkommen till Emo Yatzy!</h2>
    <h3>· · ─ ·𖥸· ─ · ·</h3>
    <p>
      Ett digitalt anteckningsblock för Yatzy — inga tärningar, inget krångel,
      bara plats att fylla i poängen medan ni spelar med era egna tärningar.
    </p>
    <p>
      Allt sparas automatiskt i webbläsaren, så du kan ladda om sidan utan
      att förlora ert pågående spel.
    </p>

    <h3>Flera spelare</h3>
    <p>
      Lägg till precis så många spelare ni är — varje spelare får sin egen
      kolumn i tabellen, och alla summor räknas ut automatiskt medan ni fyller i.
    </p>

    <h3>Standard Yatzy</h3>
    <p>
      Det klassiska spelet med fem tärningar och femton kategorier —
      från Ettor och Sexor till stegar, kåk och förstås själva Yatzyn.
    </p>

    <h3>Maxi Yatzy</h3>
    <p>
      En större variant med sex tärningar istället för fem, vilket öppnar
      för fler kombinationer — bland annat Tre par, Full stege och Torn.
    </p>

    <h3>Nytt spel</h3>
    <p>
      Klar med en omgång? Tryck på "Nytt Spel" så rensas tabellen och ni
      kan börja om från noll, utan att behöva ladda om sidan.
    </p>

    <p>Välj ett spelläge i menyn ovan för att komma igång.</p>
    <div class="readme-link">
      <a href="https://github.com/codebynorthsteep/emo-yatzy#readme" target="_blank" rel="noopener noreferrer">
  Läs mer om projektet på GitHub
</a>
    </div>
  </div>
</template>

<style scoped>
.welcome {
  background-color: var(--emo-yta);
  border: 3px solid white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}


.readme-link {
  margin-top: 30px;
  border: 3px solid white;
  border-radius: 8px;
  padding: 10px;
}
.readme-link a {
  font-weight: bold;
  color: var(--emo-text);
  text-decoration: none;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}
.readme-link a:hover {
  text-decoration: underline;
}

</style>    
