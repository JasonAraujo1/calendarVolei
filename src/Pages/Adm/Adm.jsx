import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import AdmTable from "../../components/AdmTable/AdmTable";

function Adm() {
	return (
		<div>
			<div className="flex flex-col gap-10 mt-12 w-[340px]">
				<div className="flex justify-between ">
					<div>
						<div className="flex ">
							<h1 className="text-violet-900 font-semibold text-xl ">
								Olá, <span className="font-bold">Carlos</span>
							</h1>
							<span class="text-2xl">👋</span>
						</div>
						<p className="text-gray-400">Bem vindo!</p>
					</div>

					<img
						src="src/assets/profilePhotoAdm.jpg"
						alt="profile img"
						className="rounded-full size-10  object-cover "
					/>
				</div>
				<SearchBar />
               
				<div className="flex  flex-col">
					<h3 className="font-semibold text-violet-900 text-lg flex-wrap">
						Gerenciamento das Quadras
					</h3>
					<p className="text-gray-400 font-semibold text-sm ">Ver todas</p>
				</div>
				<div className="flex gap-3 justify-between">
					<button
						type="button"
						className="w-1/3 text-sm bg-gray text-gray-400 rounded-2xl px-3 py-3 font-medium hover:text-white hover:bg-violet-900 transition duration-300 ease-in-out"
					>
						Hoje
					</button>
					<button
						type="button"
						className=" w-1/3 text-sm bg-gray text-gray-400 rounded-2xl px-3 py-3  font-medium hover:text-white hover:bg-violet-900 transition duration-300 ease-in-out"
					>
						Amanhã
					</button>
					<button
						type="button"
						className=" w-1/3 text-sm bg-gray text-gray-400 rounded-2xl px-3 py-3  font-medium hover:text-white hover:bg-violet-900 transition duration-300 ease-in-out"
					>
						Semana
					</button>
				</div>

                <AdmTable/>


			</div>
		</div>
	);
}

export default Adm;
