import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
	return (
		<div className="flex items-center justify-center flex-col text-center mt-52">
			<div className="bg-neutral-100 p-5 rounded-xl max-h-72">
				<img src="src/assets/1.svg" alt="draw about error" className="w-64 " />
			</div>
			<h3 className="text-purple-900 text-xl font-semibold flex pt-6 pb-3">
				Página não encontrada!
			</h3>
			<p className="px-16 text-xs text-zinc-600">
				Parece que houve algum problema na página, tente recarrega-la!
			</p>

			<NavLink to="/" className=" flex p-7">
				<i class="bi bi-arrow-clockwise text-violet-900 text-3xl  " />
			</NavLink>
		</div>
	);
}

export default NotFound;
