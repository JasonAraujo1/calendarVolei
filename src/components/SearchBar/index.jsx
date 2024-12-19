import React from "react";

function SearchBar() {
	return (
		<div>
			<div className="flex flex-col">
				<input type="search" className="border border-red-600" />
				<label for="opcoes" />
				<select id="opcoes" name="opcoes" className="max-w-24">
					<option value="">Categoria</option>
					<option value="opcao1">Quadra Areia</option>
					<option value="opcao2">Quadra (Indoor)</option>
				</select>
			</div>
		</div>
	);
}

export default SearchBar;
