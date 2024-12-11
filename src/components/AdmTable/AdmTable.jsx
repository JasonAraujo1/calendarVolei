import React, { useState } from "react";
import { quadras } from "../../Data/quadras";

export default function AdmTable() {
	const [quadraSelecionada, setQuadraSelecionada] = useState("Quadra 1");

	return (
		<div className=" w-[340px]">
			{/* Filtro de Quadras */}
			<div className="mb-4">
				<label
					htmlFor="quadra"
					className="block text-violet-700 font-medium mb-2"
				/>
				<select
					id="quadra"
					className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-200"
					value={quadraSelecionada}
					onChange={(e) => setQuadraSelecionada(e.target.value)}
				>
					{Object.keys(quadras).map((quadra) => (
						<option key={quadra} value={quadra}>
							{quadra}
						</option>
					))}
				</select>
			</div>

			{/* Tabela */}
			
			<table className="min-w-full table-auto border-collapse overflow-hidden rounded-2xl shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
				<thead>
					<tr className="bg-gray-100 text-gray-600 border-b-1">
						<th className=" px-4 py-2 ">Nome</th>
						<th className=" px-4 py-2">Horário</th>
						<th className=" px-4 py-2">Pago</th>
					</tr>
				</thead>
				<tbody>
					{quadras[quadraSelecionada].map((locacao, index) => (
						<tr
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
						
						>
							<td className=" px-4 py-2 border-b-[0.5px]">
								{locacao.nome}
							</td>
							<td className="-300 px-4 py-2 border-b-[0.5px]">
								{locacao.horario}
							</td>
							<td className=" px-4 py-2 border-b-[0.5px] ">
								{locacao.pago ? "Sim" : "Não"}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
