export const results = [
  {
    id: 1,
    team1: { player1: "Kovács", player2: "Fórizs", score: 6 },
    team2: { player1: "Papp", player2: "Miloszrdni", score: 3 },
    won: "team1",
  },
  {
    id: 2,
    team1: { player1: "Kovács", player2: "Fórizs", score: 3 },
    team2: { player1: "Papp", player2: "Miloszrdni", score: 6 },
    won: "team2",
  },
];

export const teams = [
  { name: "Papp", games: 2, wins: 1, losses: 1, points: 3 },
  { name: "Fórizs", games: 2, wins: 1, losses: 1, points: 3 },
  { name: "Kovács", games: 2, wins: 1, losses: 1, points: 3 },
  { name: "Miloszrdni", games: 2, wins: 1, losses: 1, points: 3 },
].sort((a, b) => b.wins - a.wins);
