import React from "react";

function BtnAvancar() {
	return (
		<div className="flex justify-center items-center">
			<button
				type="button"
				className=" bg-violet-900 text-white rounded-2xl px-8 py-4 text-base font-medium hover:text-white hover:bg-purple-900 fixed w-[340px] bottom-3 flex justify-center items-center gap-2"
			>
				Avançar
				<i className="bi bi-arrow-right-short text-2xl flex items-center" />
			</button>
		</div>
	);
}

export default BtnAvancar;
