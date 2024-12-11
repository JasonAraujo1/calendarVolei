import React from "react";




function LoginLinks() {
	return (
		<div >
			<div class="flex space-x-2 ">
				{/*  Botão Google  */}
				<button class="bg-gray-100 p-2 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-black"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M21.35 11.1H12v2.83h5.61c-.27 1.42-1.52 4.18-5.61 4.18a6.49 6.49 0 1 1 0-12.97c1.78 0 3.34.75 4.38 1.58l2.1-2.1a10.36 10.36 0 0 0-6.47-2.2 10.5 10.5 0 1 0 0 21c6.02 0 9.98-4.24 9.98-10.28a8.9 8.9 0 0 0-.14-1.52z" />
					</svg>
				</button>

				{/* Botão Facebook  */}
				<button class="bg-gray-100 p-2 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-black"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M22 12a10 10 0 1 0-11.5 9.9V14.5H8v-3h2.5v-1.8c0-2.4 1.5-3.7 3.6-3.7 1 0 1.9.08 2.2.11v2.5h-1.5c-1.2 0-1.5.76-1.5 1.5v1.4H16l-.5 3H13v7.4A10 10 0 0 0 22 12z" />
					</svg>
				</button>

				{/*  Botão Apple -*/}
				<button class="bg-gray-100 p-2 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-black"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M16.5 2c-.87.4-1.54.98-2 1.64-.5.7-.9 1.63-.7 2.57.9-.1 1.83-.5 2.47-1.2.55-.6.93-1.4 1.1-2.3-.6-.07-1.3.06-1.87.3zm2.9 12.5c-.36 1-1 2.1-1.8 3-.7.9-1.5 1.9-2.6 1.9-1 0-1.3-.7-2.5-.7-1.2 0-1.5.7-2.5.7-1.1 0-2-1.2-2.7-2-.8-1-1.6-2.3-1.6-3.8 0-1.8.8-3.4 2-4.3.7-.6 1.7-1 2.7-1 .9 0 1.7.6 2.5.6.8 0 1.5-.6 2.7-.6 1 0 2 .4 2.7 1 .2.2.4.5.6.8-.07.07-.6.6-.6 1.2z" />
					</svg>
				</button>
			</div>
		</div>
	);
}

export default LoginLinks;
