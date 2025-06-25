export function generateTeam() {
  const names = ['Silva', 'Oliveira', 'Santos', 'Pereira', 'Lima', 'Ferreira', 'Costa', 'Ramos', 'Gomes', 'Almeida'];
  return names.map((name, i) => ({
    name: 'Jogador ' + name,
    pos: ['GOL', 'ZAG', 'MEI', 'ATA'][i % 4],
    skill: Math.floor(Math.random() * 50 + 50),
  }));
}

export function getOpponent() {
  return {
    name: 'Time Adversário',
    skill: Math.floor(Math.random() * 80 + 20),
  };
}

export function playMatch(team, opponent) {
  const teamSkill = team.reduce((sum, p) => sum + p.skill, 0) / team.length;
  const result = Math.random() * (teamSkill + opponent.skill);
  const win = result < teamSkill;
  return {
    opponent: opponent.name,
    score: win ? "2 x 1" : "0 x 1",
    result: win ? "Vitória" : "Derrota",
    moneyChange: win ? 10000 : -5000
  };
}