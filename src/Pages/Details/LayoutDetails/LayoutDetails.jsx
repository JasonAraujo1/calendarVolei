import React from "react";
import { Outlet } from "react-router-dom";
import Arrow from "../../../components/Arrow/Arrow";
import BtnAvancar from "../../../components/BtnAvancar/BtnAvancar";

function LayoutDetails() {
	return (
		<>
			<div>
				<Arrow />
			</div>
			<div className="  min-h-screen flex mt-12 fixed left-0 right-0  justify-center  ">
				<Outlet />
			</div>

			<div className="fixed bottom-2 left-0 right-0 flex justify-center">
				<BtnAvancar />
			</div>
		</>
	);
}

export default LayoutDetails;
