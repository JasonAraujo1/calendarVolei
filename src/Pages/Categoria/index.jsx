import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { quadras } from "../../Data/quadras";

function Categoria() {
	const params = useParams();
	const findCategoria = quadras.filter(
		(element) => element.tipo === params.tipo,
	);
	return (
		<div>
			{findCategoria.map((element, index) => (
				<div className="border ">
					<h1>
						Nome: {element.nome}
						<p>Categoria: {element.tipo}</p>
						<p>Disponibilidade: {element.disponibilidade}</p>
						<p>Equipamento: {element.equipamentos}</p>
						<p>Preço: {element.preco}</p>
						<p>Cobertura: {element.cobertura}</p>
						<br />
					</h1>
				</div>
			))}
		</div>
	);
}

export default Categoria;
