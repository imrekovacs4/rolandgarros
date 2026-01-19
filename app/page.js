"use client";

import Results from "./Results";
import Table from "./Table";
import { results } from "./external";
import { teams } from "./external";
import AddResultButton from "./AddResultButton";
import AddResultModal from "./AddResultModal";
import { useState } from "react";

export default function Home() {
  const [isModalOn, setIsModalOn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-4xl mx-auto space-y-8 px-4">
        <Results results={results} />
        <Table teams={teams} />
        {isModalOn ? "" : <AddResultButton isModalOn={isModalOn} setIsModalOn={setIsModalOn} />}
        {isModalOn ? <AddResultModal isModalOn={isModalOn} setIsModalOn={setIsModalOn} /> : ""}
      </div>
    </div>
  );
}
