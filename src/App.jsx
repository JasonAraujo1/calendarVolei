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
import Quadras from "./Pages/Quadras";
import Categoria from "./Pages/Categoria";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/home" element={<Home />} />
			</Route>
			<Route path="/" element={<LayoutDetails />}>
				<Route path="/selectDateHour" element={<SelectDateHour />} />
				<Route path="/chooseCourt" element={<ChooseCourt />} />
				<Route path="/payment" element={<Payment />} />
			</Route>
			<Route path="/" element={<LayoutMaps />}>
				<Route path="/searchMap" element={<SearchMap />} />
				<Route path="/courtSelected" element={<CourtSelected />} />
			</Route>
			<Route index element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/loginUser" element={<LoginUser />} />
			<Route path="/details" element={<Details />} />
			<Route path="/*" element={<NotFound />} />

			<Route path="/adm" element={<Adm />} />
			<Route path="/map" element={<ApiMapSearchPlace />} />
			<Route path="/quadras" element={<Quadras />} />
			<Route path="/categoria/:tipo" element={<Categoria />} />
			
		</Routes>
	);
}
