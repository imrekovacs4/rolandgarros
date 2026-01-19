import React from "react";

export default function AddResultButton({ isModalOn, setIsModalOn }) {
  function handleEredmenyButton() {
    setIsModalOn(!isModalOn);
  }

  return (
    <div className="flex">
      <button
        className="text-center w-40 md:w-60 mx-auto my-5 bg-[#BA0F30] hover:bg-[#a20c28] active:bg-[#8f0b24] text-white font-bold p-3 rounded-lg text-xs md:text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
        onClick={handleEredmenyButton}
      >
        Eredmény hozzáadása
      </button>
    </div>
  );
}
