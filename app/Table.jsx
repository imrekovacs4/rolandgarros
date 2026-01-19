function Table({ teams }) {
  return (
    <div>
      <div className=" w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="text-xs md:text-base grid grid-cols-[30px_1.5fr_1fr_1fr_1fr_1fr] gap-1 font-semibold text-gray-900 border-b pb-3 mb-4 text-left">
          <div>#</div>
          <div>Név</div>
          <div>Meccsek</div>
          <div>Győzelmek</div>
          <div>Vereségek</div>
          <div>Szettarány</div>
        </div>
        {teams.map((team, index) => (
          <div
            key={team.name}
            className="text-xs md:text-base grid grid-cols-[30px_1.5fr_1fr_1fr_1fr_1fr] gap-1 py-3 border-b hover:bg-gray-50 text-left"
          >
            <div className="font-bold text-gray-600">{index + 1}</div>
            <div className="font-medium truncate">{team.name}</div>
            <div>{team.games}</div>
            <div className="text-green-600 font-semibold">{team.wins}</div>
            <div className="text-red-600">{team.losses}</div>
            <div className="font-bold">{team.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
