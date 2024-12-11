import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginLinks from "../../../components/LoginLinks/LoginLinks";

function Register() {
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [inputPasswordConfirm, setInputPasswordConfirm] = useState("");
	const [inputRadio, setInputRadio] = useState("");

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validação básica de e-mail


	function handleClick(event) {
		event.preventDefault();
		const usuario = {
			email: inputEmail,
			password: inputPassword,
			confirmPassword: inputPasswordConfirm,
			userType: inputRadio,
		};


		if(!inputRadio){
			alert("selecione uma das opções de usuário!")
			return;
		}

		if (!inputEmail) {
			alert("por favor, insira um email!");
			return;
		}
		if (!emailRegex.test(inputEmail)) {
			alert("por favor, insira um email válido!");
			return;
		}
		if (!inputPassword) {
			alert("por favor, insira uma senha!");
			return;
		}
		if (!inputPasswordConfirm) {
			alert("por favor, confirme a senha!");
			return;
		}
		if (inputPassword !== inputPasswordConfirm) {
			alert("As senhas não coincidem!");
			return;
		}

		
	}

	return (
		<div className="flex flex-col justify-center items-center text-center gap-6  mt-28">
			<h1 className="text-violet-900 font-bold text-2xl">Criar Conta</h1>
			<p className="text-black text-sm font-bold pb-14 max-w-96">
				Lorem ipsum dolor sit, amet conseit quas, exercitationem eius,
			</p>
			<form>
				<div className="flex gap-8 pb-10">
					<div className="flex gap-1">
						<input
							type="radio"
							value="admin"
							id="admin"
							checked={inputRadio === "admin"}
							onChange={({ target }) => setInputRadio(target.value)}
						/>
						<label htmlFor="admin">Sou Administrador</label>
					</div>

					<div className="flex gap-1">
						<input
							type="radio"
							value="user"
							id="user"
							checked={inputRadio === "user"}
							onChange={({ target }) => setInputRadio(target.value)}
						/>
						<label htmlFor="user">Sou Usuário</label>
					</div>
				</div>

				<div className="flex flex-col gap pb-4 ">
					<label>
						<input
							type="email"
							name="email"
							placeholder="E-mail"
							onChange={({ target }) => setInputEmail(target.value)}
							className="bg-gray-100 focus:outline focus:outline-2 focus:outline-violet-900 rounded-md px-4 py-3 min-w-80 "
						/>
					</label>

					<br />

					<label>
						<input
							type="password"
							name="password"
							placeholder="Senha"
							onChange={({ target }) => setInputPassword(target.value)}
							className="bg-gray-100 focus:outline focus:outline-2 focus:outline-violet-900 rounded-md px-4 py-3 min-w-80 "
						/>
					</label>
					<br />
					<label>
						<input
							type="password"
							name="password"
							placeholder="Confirmar Senha"
							onChange={({ target }) => setInputPasswordConfirm(target.value)}
							className="bg-gray-100 focus:outline focus:outline-2 focus:outline-violet-900 rounded-md px-4 py-3 min-w-80 "
						/>
					</label>
				</div>

				<br />
				<button
					type="submit"
					onClick={handleClick}
					className=" bg-violet-900 text-white rounded-lg px-8 py-3 text-base font-medium hover:text-white hover:bg-purple-900 min-w-80"
				>
					Entrar
				</button>
				<nav className="flex flex-col items-center">
					<NavLink
						to="/LoginUser"
						className="font-semibold text-gray-500 pb-8 text-xs pt-8"
					>
						Ja tenho uma conta
					</NavLink>
					<p className="font-semibold text-violet-700  text-xs pb-6">
						Ou continuar com
					</p>
					<LoginLinks />
				</nav>
			</form>
		</div>
	);
}

export default Register;
