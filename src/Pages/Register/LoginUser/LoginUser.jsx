import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginLinks from "../../../components/LoginLinks/LoginLinks";

function LoginUser() {
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validação básica de e-mail

	
	function handleClick(event) {
		event.preventDefault();
		const usuario = {
			email: inputEmail,
			password: inputPassword,
		};
		console.log(usuario);

		if (!inputEmail) {//se inputemail NÂO == vazio
			alert('Por favor, insira um e-mail')
		
			return; // Para a execução caso o e-mail esteja vazio
		}
	
		if (!inputPassword) {
			alert('Por favor, insira uma senha')
			return; // Para a execução caso a senha esteja vazia
		}
		
		if (!emailRegex.test(inputEmail)) {//Se o e-mail inserido não for válido..."
			alert('Por favor, insira um e-mail válido!')
			return; // Para a execução caso o e-mail não seja válido
		}
	}

	
	
	


	return (
		<div className="flex flex-col justify-center items-center text-center gap-6 mt-28">
		
			<h1 className="text-violet-900 font-bold text-2xl">
				Faça o seu login aqui
			</h1>
			<p className="text-black font-bold pb-14 ">
				Lorem ipsum dolor sit amet conse
			</p> 
			<form className="flex flex-col gap-0">
				<label> 
				
					<input
						type="email"
						name="email"
						placeholder="E-mail"
						onChange={({ target }) => setInputEmail(target.value)}
						className=" bg-gray-100 focus:outline focus:outline-2 focus:outline-violet-900 rounded-md px-4 py-3 min-w-80 "
						required 
					/>
				</label>

				<br />

				<label>
					<input
						type="password"
						name="password"
						placeholder=" Senha"
						onChange={({ target }) => setInputPassword(target.value)}
						className="bg-gray-100 focus:outline focus:outline-2 focus:outline-violet-950 rounded-md px-4 py-3 min-w-80 "
						required 
					/>
				</label>
				<br />
				<nav className="flex flex-row-reverse text-xs">
					<NavLink className="font-semibold text-purple-950 pb-8">
						Esqueceu a senha?
					</NavLink>
				</nav>
				<button
					type="submit"
					onClick={handleClick}
					className=" bg-violet-900 text-white rounded-lg px-8 py-3 text-base font-medium hover:text-white hover:bg-purple-900"
				>
					Entrar
				</button>
			</form>
			<NavLink
				to="/Register"
				className="font-semibold text-gray-500 pb-8 text-xs"
			>
				Criar nova conta
			</NavLink>
			<p className="font-semibold text-violet-700  text-xs">
				Ou continuar com
			</p>

			<LoginLinks />
		</div>
	);
}

export default LoginUser;
