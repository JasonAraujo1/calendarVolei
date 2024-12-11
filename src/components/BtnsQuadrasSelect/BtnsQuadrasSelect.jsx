import React from "react";

const BtnsQuadrasSelect = () => {
	return (
		<div className="w-[340px] px-4 py-5 bg-white flex flex-col gap-3 rounded-2xl shadow-[0px_0px_15px_rgba(0,0,0,0.09)] max-h-[600px] overflow-y-scroll">
			<legend className="text-xl font-semibold mb-3 select-none">
				Escolha uma quadra:{" "}
			</legend>
			<label
				
				name="status"
				className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 py-4 gap-3 rounded-lg has-[:checked]:text-violet-900 has-[:checked]:bg-violet-50 has-[:checked]:ring-violet-300 has-[:checked]:ring-1 select-none"
			>
				
					<i class="bi bi-check2-circle  text-green-600" />
				
				Quadra 4
				<input
					defaultChecked
					type="radio"
					name="status"
					className="peer/html w-4 h-4 absolute accent-current right-3"
					id="html"
				/>
			</label>
			<label
				
				className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3  py-4  gap-3 rounded-lg has-[:checked]:text-violet-900 has-[:checked]:bg-violet-50 has-[:checked]:ring-violet-300 has-[:checked]:ring-1 select-none"
			>
				<div className="w-5">
					<i class="bi bi-x-circle-fill text-red-600" />
				</div>
				Quadra 2
				<input
					type="radio"
					name="status"
					className="w-4 h-4 absolute accent-current right-3"
					id="css"
				/>
			</label>
			<label
				
				className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3  py-4  gap-3 rounded-lg  has-[:checked]:text-violet-900 has-[:checked]:bg-violet-50 has-[:checked]:ring-violet-300 has-[:checked]:ring-1 select-none"
			>
				<div className="w-5">
					<i class="bi bi-x-circle-fill text-red-600" />
				</div>
				Quadra 2
				<input
					type="radio"
					name="status"
					className="w-4 h-4 absolute accent-current right-3"
					id="css"
				/>
			</label>
      <label
				
				name="status"
				className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3   py-4 gap-3 rounded-lg has-[:checked]:text-violet-900 has-[:checked]:bg-violet-50 has-[:checked]:ring-violet-300 has-[:checked]:ring-1 select-none"
			>
				<div className="w-5 fill-violet-500">
					<i class="bi bi-check2-circle text-green-600" />
				</div>
				Quadra 1
				<input
					defaultChecked
					type="radio"
					name="status"
					className="peer/html w-4 h-4 absolute accent-current right-3"
					id="html"
				/>
			</label>
      <label
				
				name="status"
				className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3  py-4  gap-3 rounded-lg has-[:checked]:text-violet-900 has-[:checked]:bg-violet-50 has-[:checked]:ring-violet-300 has-[:checked]:ring-1 select-none"
			>
				<div className="w-5 fill-violet-500">
					<i class="bi bi-check2-circle text-green-600" />
				</div>
				Quadra 1
				<input
					defaultChecked
					type="radio"
					name="status"
					className="peer/html w-4 h-4 absolute accent-current right-3"
					id="html"
				/>
			</label>
      <label
				
				name="status"
				className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3  py-4  gap-3 rounded-lg has-[:checked]:text-violet-900 has-[:checked]:bg-violet-50 has-[:checked]:ring-violet-300 has-[:checked]:ring-1 select-none"
			>
				<div className="w-5 fill-violet-500">
					<i class="bi bi-check2-circle text-green-600" />
				</div>
				Quadra 1
				<input
					defaultChecked
					type="radio"
					name="status"
					className="peer/html w-4 h-4 absolute accent-current right-3"
					id="html"
				/>
			</label>
     
		</div>
	);
};

export default BtnsQuadrasSelect;
