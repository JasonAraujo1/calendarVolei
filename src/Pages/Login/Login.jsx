import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
	return (
		<nav className="flex items-center justify-center flex-col text-center mb-32">
			
			<img
				src="src/assets/voleiImg.svg"
				alt="voleiball players draw"
				className="max-w-72"
			/>
			<h1 className="max-w-72 text-violet-900 text-xl font-semibold">
				Encontre a quadra de vôlei mais próxima de você!
			</h1>
			<p className=" text-xs max-w-64 flex items-center justify-center flex-col text-center pt-8 pb-12">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis,
				poris ipsam!
			</p>

			<div className="flex gap-2">
				<NavLink
					to="/LoginUser"
					className=" bg-violet-900  text-white rounded-lg px-8 py-2 text-lg font-medium hover:text-white hover:bg-purple-900"
				>
					Login
				</NavLink>

				<NavLink
					to="/Register"
					className=" bg-white text-black rounded-lg px-5 py-2 text-lg font-medium hover:bg-gray-100 hover:text-black"
				>
					Registrar
				</NavLink>
			</div>
		</nav>
	);
}

export default Login;
