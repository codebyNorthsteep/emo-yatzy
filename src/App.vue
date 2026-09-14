<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Emo Yatzy</h1>
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/maxi-yatzy">Maxi Yatzy</RouterLink>
        <RouterLink to="/standard-yatzy">Standard Yatzy</RouterLink>
      </nav>
    </div>
  </header>
  <main class="main-content">
    <RouterView />
  </main>
  <footer>
    <p>
      Made with ❤️ by
      <a href="https://github.com/codebynorthsteep" target="_blank" rel="noopener noreferrer">
        Northsteep
      </a>
    </p>
  </footer>
</template>

<style scoped>

.main-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  max-width: 900px;   /* upp från 300px — ger plats åt tabellen */
  margin: 40px auto;
  border-radius: 8px;
}

header {
  background-color: var(--emo-yta);
  border-bottom: 3px solid var(--emo-accent);
  line-height: 1.5;
  padding: 1.5rem 0;
  text-align: center;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 1rem;
}

h1 {
  font-family: "Aboreto", cursive;
  color: var(--emo-accent);
  text-shadow: 0 0 12px rgba(255, 46, 108, 0.5);
  margin: 0;
}

nav {
  width: 100%;
  font-family: 'Lekton', monospace;
  font-size: 14px;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-left: 1px solid var(--emo-border);
  color: var(--emo-text);
  text-decoration: none;
  transition: color 0.2s ease;
}

nav a:first-of-type {
  border: 0;
}

nav a:hover {
  color: var(--emo-accent);
}

nav a.router-link-exact-active {
  color: var(--emo-accent);
  font-weight: bold;
}

main {
  min-height: 70vh;
}

footer {
  background-color: var(--emo-yta);
  border-top: 3px solid var(--emo-accent);
  padding: 1.5rem;
  text-align: center;
}

footer p {
  font-family: 'Lekton', monospace;
  color: var(--emo-text);
  margin: 0;
}

footer a {
  color: var(--emo-accent);
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

@media (min-width: 768px) {
    .main-content {
    max-width: 700px;
    padding: 40px;
  }
  header {
    display: grid;
    justify-items: center;
    padding: 1.5rem calc(var(--section-gap, 2rem) / 2);
  }

  .wrapper {
justify-content: space-between;
    grid-template-columns: auto auto;
    gap: 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  nav {
    margin-left: 20px;
    width: auto;
    font-size: 16px;
  }
}
</style>
