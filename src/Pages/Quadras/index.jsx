import React from "react";
import { quadras } from "../../Data/quadras";
import { div } from "framer-motion/client";

export default function Quadras() {
	return (
		<div>
			{quadras.map((element, index) => (
				<div>
					{element.nome}	
				</div>
				
			))}
		</div>
	);
}
