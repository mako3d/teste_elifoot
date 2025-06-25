export function renderTeamScreen(team, money, onPlay) {
  const app = document.getElementById('app');
  app.innerHTML = \`
    <div class="text-center">
      <p class="text-xl mb-4">Saldo: R$ \${money.toLocaleString()}</p>
      <h2 class="text-2xl font-semibold mb-2">Seu Time</h2>
      <ul class="bg-white p-4 rounded shadow space-y-2">
        \${team.map(p => \`<li>\${p.name} - \${p.pos} - Habilidade: \${p.skill}</li>\`).join('')}
      </ul>
      <button class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" id="jogarBtn">Jogar Partida</button>
    </div>
  \`;
  document.getElementById('jogarBtn').onclick = onPlay;
}

export function renderMatchScreen(result, history, onContinue) {
  const app = document.getElementById('app');
  app.innerHTML = \`
    <div class="text-center">
      <h2 class="text-2xl font-bold mb-2">Resultado da Partida</h2>
      <p class="text-lg">Contra: \${result.opponent}</p>
      <p class="text-lg">Placar: \${result.score}</p>
      <p class="text-lg mb-4">Resultado: <strong>\${result.result}</strong></p>
      <button class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" id="continuarBtn">Continuar</button>
      <h3 class="text-xl font-semibold mt-6 mb-2">Histórico</h3>
      <ul class="text-left">
        \${history.map((r, i) => \`<li>Jogo \${i + 1}: \${r.result} (\${r.score})</li>\`).join('')}
      </ul>
    </div>
  \`;
  document.getElementById('continuarBtn').onclick = onContinue;
}