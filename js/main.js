import { generateTeam, getOpponent, playMatch } from './data.js';
import { renderTeamScreen, renderMatchScreen } from './ui.js';

let team = generateTeam();
let money = 100000;
let history = [];

function startGame() {
  renderTeamScreen(team, money, () => {
    const opponent = getOpponent();
    const result = playMatch(team, opponent);
    money += result.moneyChange;
    history.push(result);
    renderMatchScreen(result, history, () => startGame());
  });
}

startGame();