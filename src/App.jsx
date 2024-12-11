import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import LayoutMaps from "./Pages/Map/Layout/LayoutMaps";
import LoginUser from "./Pages/Register/LoginUser/LoginUser";
import "./index.css";
import Login from "./Pages/Login/Login";
import Details from "./Pages/Details/Details/Details";
import SelectDateHour from "./Pages/Details/SelectDateHour/SelectDateHour";
import ChooseCourt from "./Pages/Details/ChooseCourt/ChooseCourt";
import LayoutDetails from "./Pages/Details/LayoutDetails/LayoutDetails";
import Payment from "./Pages/Details/Payment/Payment";
import SearchMap from "./Pages/Map/SearchMap";
import CourtSelected from "./Pages/Map/CourtSelected";
import Adm from "./Pages/Adm/Adm";
import Register from "./Pages/Register/RegisterUser/Register";
import ApiMapSearchPlace from "./components/APImap/ApiMapSearchPlace";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/Home" element={<Home />} />
			</Route>
			<Route path="/" element={<LayoutDetails />}>
				<Route path="/SelectDateHour" element={<SelectDateHour />} />
				<Route path="/ChooseCourt" element={<ChooseCourt />} />
				<Route path="/Payment" element={<Payment />} />
			</Route>
			<Route path="/" element={<LayoutMaps />}>
				<Route path="/SearchMap" element={<SearchMap />} />
				<Route path="/CourtSelected" element={<CourtSelected />} />
			</Route>
			<Route index element={<Login />} />
			<Route path="/Register" element={<Register />} />
			<Route path="/LoginUser" element={<LoginUser />} />
			<Route path="/Details" element={<Details />} />
			<Route path="/*" element={<NotFound />} />

			<Route path="/Adm" element={<Adm />} />
			<Route path="/APIMapSearchPlace" element={<ApiMapSearchPlace />} />
		</Routes>
	);
}
