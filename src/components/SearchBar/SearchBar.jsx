import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";

const SearchBar = () => {
  const [searchText, setSearchText] = useState(""); // Texto principal no input
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Controle de exibição do MultiSelect
  const [selectedFilters, setSelectedFilters] = useState([]); // Filtros selecionados
  // Opções do MultiSelect
  const options = [
    { label: "Região", value: "Região" },
    { label: "Areia", value: "Areia" },
    { label: "Indoor", value: "Indoor" },
  ];

  // Atualiza o texto principal quando seleciona filtros
  const handleFilterChange = (e) => {
    setSelectedFilters(e.value); // Atualiza os filtros
    setSearchText(e.value.join(", ")); // Atualiza o texto do input
  };

  // Exibe o alert com o texto do input ao clicar na lupa
  const handleSearch = () => {
    alert(`Procurar: ${searchText}`);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-10  ">
      {/* Input Principal */}
      <div className="flex items-center bg-white rounded-2xl px-4 py-4 shadow focus-within:ring-2 focus-within:ring-violet-900">
        {/* Ícone de busca */}
        <i
          className="bi bi-search text-gray-500 cursor-pointer mr-2 px-2"
          onClick={handleSearch}
        />

        {/* Input de texto */}
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Buscar Quadras na Região..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-800"
          autoFocus
        />

        {/* Ícone de filtro */}
        <i
          className="bi bi-sliders2 text-gray-500 cursor-pointer"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        />
      </div>

      {/* Caixa do MultiSelect */}
      {isFilterOpen && (
        <div className="absolute z-10 mt-2 bg-white rounded-2xl shadow-lg w-full">
          <MultiSelect
            value={selectedFilters}
            options={options}
            onChange={handleFilterChange}
            placeholder="Selecione os filtros"
            className="w-full"
            display="chip" // Mostra os selecionados como chips no MultiSelect
           
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
