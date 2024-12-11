import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Caroulsel from "../../components/Caroulsel/Caroulsel";
import { quadras } from "../../Data/quadras";
import { useState } from "react";


function Home() {
	const [data, setData] = useState(quadras)
	return (
		<div className="flex flex-col gap-10">
			<div className="flex justify-between ">
				<div>
					<div className="flex ">
						<h1 className="text-violet-900 font-semibold text-xl">
							Olá, <span className="font-bold">João</span>
						</h1>
						<span class="text-2xl">👋</span>
					</div>
					<p className="text-gray-400">Bem vindo!</p>
				</div>

				<img
					src="src/assets/profile-photo.svg"
					alt="profile img"
					className="rounded-full size-10 "
				/>
			</div>
			<div className=" justify-center items-center ">
			
					<SearchBar  />
				
			</div>

			<div className="flex justify-between items-center">
				<h3 className="font-semibold text-violet-900 text-lg">
					Quadras populares
				</h3>
				<p className="text-gray-400 font-semibold text-sm">Ver todos</p>
			</div>
			<div className="flex gap-3 ">
				<button
					type="button"
					className=" text-sm bg-gray text-gray-400 rounded-2xl px-3 py-3 font-medium hover:text-white hover:bg-violet-900 transition duration-300 ease-in-out"
					
				>
					Mais procurada
				</button>
				<button
					type="button"
					className="text-sm bg-gray text-gray-400 rounded-2xl px-3 py-3  font-medium hover:text-white hover:bg-violet-900 transition duration-300 ease-in-out"
				>
					Próximas
				</button>
				<button
					type="button"
					className="text-sm bg-gray text-gray-400 rounded-2xl px-3 py-3  font-medium hover:text-white hover:bg-violet-900 transition duration-300 ease-in-out"
				>
					Últimas
				</button>
			</div>
			<Caroulsel />
		</div>
	);
}

export default Home;
