import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/saga-blue/theme.css"; // Certifique-se de ter o tema e o CSS necessários
import "primereact/resources/primereact.min.css";

export default function TimeDemo() {
	const [datetime24h, setDateTime24h] = useState(null);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 rounded-2xl ">
			<div className="bg-white shadow-lg  p-6 w-full max-w-md rounded-2xl py-20 flex flex-col gap-4">
				<label
					htmlFor="calendar-24h"
					className="text-xl font-semibold text-gray-700 block mb-2 rounded-2xl "
				>
					Escolha uma Data e Horário
				</label>
				<Calendar
					id="calendar-24h"
					value={datetime24h}
					onChange={(e) => setDateTime24h(e.value)}
					showTime
					hourFormat="24"
					className="rounded-2xl w-full border border-gray-300  text-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					placeholder="Clique Aqui"
				/>
			</div>
			
		</div>
	);
}
