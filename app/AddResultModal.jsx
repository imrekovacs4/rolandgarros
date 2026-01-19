"use client";
import React, { useState } from "react";

import { teams } from "./external";
import { results } from "./external";

export default function AddResultModal({ isModalOn, setIsModalOn }) {
  const [formData, setFormData] = useState({
    team1Player1: "",
    team1Player2: "",
    team2Player1: "",
    team2Player2: "",
    team1Score: "",
    team2Score: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function handleMegseButton() {
    setIsModalOn(false);
  }

  function handleResultSubmit() {
    let newResult = {
      id: Date.now(),
      team1: {
        player1: formData.team1Player1,
        player2: formData.team1Player2,
        score: Number(formData.team1Score),
      },
      team2: {
        player1: formData.team2Player1,
        player2: formData.team2Player2,
        score: Number(formData.team2Score),
      },
      won: Number(formData.team1Score) > Number(formData.team2Score) ? "team1" : "team2",
    };

    results.push(newResult);

    newResult = {};
    setIsModalOn(false);
  }

  return (
    <div className="max-w-2xl mx-auto p-8 my-4 bg-white rounded-3xl shadow-2xl border border-slate-200">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-slate-600 text-base">Válassz csapatokat és add meg az eredményt</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 ">
        {/* Team 1 Section */}
        <div className="group">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className=" font-bold text-slate-800 text-base">Csapat 1</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide">
                  Játékos 1
                </label>
                <select
                  onChange={handleInputChange}
                  value={formData.team1Player1}
                  name="team1Player1"
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all duration-200 hover:border-emerald-400"
                >
                  <option value="">Válassz játékost</option>
                  {teams.map((team) => (
                    <option key={team.name} value={team.name}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide">
                  Játékos 2
                </label>
                <select
                  onChange={handleInputChange}
                  value={formData.team1Player2}
                  name="team1Player2"
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all duration-200 hover:border-emerald-400"
                >
                  <option value="">Válassz játékost</option>
                  {teams.map((team) => (
                    <option key={team.name} value={team.name}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Team 2 Section */}
        <div className="group">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-rose-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-base font-bold text-slate-800">Csapat 2</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide">
                  Játékos 1
                </label>
                <select
                  onChange={handleInputChange}
                  value={formData.team2Player1}
                  name="team2Player1"
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-rose-500/20 focus:border-rose-500 shadow-sm transition-all duration-200 hover:border-rose-400"
                >
                  <option value="">Válassz játékost</option>
                  {teams.map((team) => (
                    <option key={team.name} value={team.name}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide">
                  Játékos 2
                </label>
                <select
                  onChange={handleInputChange}
                  value={formData.team2player2}
                  name="team2Player2"
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-rose-500/20 focus:border-rose-500 shadow-sm transition-all duration-200 hover:border-rose-400"
                >
                  <option value="">Válassz játékost</option>
                  {teams.map((team) => (
                    <option key={team.name} value={team.name}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Score Section */}
      <div className="mt-12 bg-white rounded-3xl p-6">
        <div className="flex items-center gap-6 justify-center">
          {/* Team 1 Score */}
          <div className="text-center">
            <input
              name="team1Score"
              value={formData.team1Score}
              onChange={handleInputChange}
              type="number"
              min="0"
              max="99"
              className="w-28 h-28 text-4xl font-black bg-white border-4 border-emerald-400 rounded-2xl shadow-xl focus:ring-4 focus:ring-emerald-500/50 focus:border-emerald-600 text-emerald-700 mx-auto block p-6 text-center outline-none"
            />
          </div>

          <div className="text-4xl font-black text-cyan-900 mb-6"> - </div>

          {/* Team 2 Score */}
          <div className="text-center">
            <input
              name="team2Score"
              value={formData.team2Score}
              onChange={handleInputChange}
              type="number"
              min="0"
              max="99"
              className="w-28 h-28 text-4xl font-black bg-white border-4 border-rose-400 rounded-2xl shadow-xl focus:ring-4 focus:ring-rose-500/50 focus:border-rose-600 mx-auto block p-6 text-center outline-none text-rose-700"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center mt-12 pt-8 border-t border-slate-200">
        <button
          className="px-12 py-4 bg-[#BA0F30] text-white text-base font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 transition-all duration-200 transform"
          onClick={handleResultSubmit}
        >
          Hozzáadás
        </button>
        <button
          className="px-12 py-4 bg-slate-200 text-slate-800 text-base font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 transform border"
          onClick={handleMegseButton}
        >
          Mégse
        </button>
      </div>
    </div>
  );
}
