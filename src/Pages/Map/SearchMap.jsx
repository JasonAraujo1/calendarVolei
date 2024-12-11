import React from "react";
import CaroulselMap from "../../components/CaroulselMap/CaroulselMap";
import APIMap from "../../components/APImap/APIMap";

function SearchMap() {
	return (
		<div className="flex justify-center">
			<div className="">
				<div className="">
					<APIMap />
				</div>
			</div>
			

			<div className="fixed bottom-0">
				<CaroulselMap />
			</div>
		</div>
	);
}

export default SearchMap;
