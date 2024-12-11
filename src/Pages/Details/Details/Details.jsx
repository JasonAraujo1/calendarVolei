import React from "react";
import { NavLink } from "react-router-dom";

function Details() {
	return (
		<div className="flex flex-col relative mx-7  max-w-[340px]  h-screen overflow-y-scroll mt-12 ">
			<div className="w-full rounded-3xl ">
				<div className="flex-none overflow-hidden  relative ">
					<div>
						<i className="bi bi-arrow-left-short absolute top-[5%] left-[10%] text-[25px] text-gray-200 bg-black/40 p-3 rounded-full flex" />
						<i className="bi bi-bookmark-plus-fill absolute top-[5%] right-[10%] text-[25px] text-gray-200 bg-black/40 p-3 rounded-full flex" />
					</div>
					<img className="" src="src/assets/image 2volei.svg" alt="" />
					<div className="absolute bottom-0 bg-black/50 flex flex-col gap-2 m-auto my-4 w-[90%] p-5 rounded-xl left-0 right-0">
						<p className="text-white text-[20px] flex justify-between items-center ">
							Quadra Teste
							<span className="text-sm text-gray-300">Valor</span>
						</p>
						<div className="flex justify-between">
							<p className="flex items-center gap-2 text-gray-300 text-[15px] ">
								<img src="src/assets/pointer.svg" alt="" />
								Lorem ipsum
							</p>
							<span className="text-gray-300 ">R$ 230,00</span>
						</div>
					</div>
				</div>
			</div>
			<h3 className="font-bold pt-12 pb-8">
				Avaliações
				<span className="font-medium text-stone-400 text-sm">/Detalhes</span>
			</h3>

			<div className="flex gap-16 pb-8">
				<div className="flex gap-2 items-center">
					<i className="bi bi-cloud-sun-fill backdrop-blur-md bg-gray-200 p-1 rounded px-2" />
					<span className="text-gray-400"> 16ºC</span>
				</div>
				<div className="flex gap-2 items-center">
					<i className="bi bi-star-fill backdrop-blur-md bg-gray-200 p-1 px-2 rounded " />
					<span className="text-gray-400">4.5</span>
				</div>
			</div>

			<p className=" text-justify flex  text-gray-400 w-full scroll-my-96 flex-col ">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ducimus,
				asperiores voluptate distinctio eaque, Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Distinctio impedit velit maiores
				blanditiis amet sed dolorem vitae magni vero aut, officiis est
				aspernatur nesciunt harum sint fugit reiciendis sequi provident.autem
				enim rem nemo atque, repellat quidem saepe laudantium accusamus at
				mollitia? Mollitia eaque nulla veniam? FIM
				<span className="p-20" />
			</p>
			<NavLink to="/SelectDateHour">
				<button
					type="button"
					className=" bg-violet-900 text-white rounded-2xl px-8 py-4 text-base font-medium hover:text-white hover:bg-purple-900 fixed w-[340px] bottom-3 flex justify-center gap-2"
				>
					Alugar Quadra
					<i class="bi bi-send" />
				</button>
			</NavLink>
		</div>
	);
}

export default Details;
