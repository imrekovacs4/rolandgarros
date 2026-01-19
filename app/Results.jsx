import React from "react";

export default function Results({ results }) {
  return (
    <div className="w-full max-w-3xl mx-auto p-0">
      <h1 className="text-center mt-3 font-bold text-sm md:text-base">Legutóbbi eredmények</h1>
      <div className="flex justify-between items-center p-8 max-w-md mx-auto text-sm md:text-base">
        <div>
          {results.map((result) => (
            <p key={result.id}>
              {result.team1.player1} / {result.team1.player2}
            </p>
          ))}
        </div>
        <div>
          {results.map((result) => (
            <p key={result.id}>
              {result.team1.score} - {result.team2.score}
            </p>
          ))}
        </div>
        <div>
          {results.map((result) => (
            <p key={result.id}>
              {result.team2.player1} / {result.team2.player2}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
