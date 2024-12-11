import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import NotFound from "../../Pages/NotFound/NotFound";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

const libraries = ["places"];
const mapContainerStyle = {
	width: "100%",
	height: "100%",
};

function App() {
	const [coords, setCoords] = useState({});
	const [distance, setDistance] = useState(0);

	// Obter localização ao carregar o componente
	useEffect(() => {
   
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude, accuracy } = position.coords;
				setCoords({ lat: latitude, lng: longitude });
				setDistance(accuracy);
			});
		}

	}, []);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyA2bN_mTzRUxrQAvxJ1IaB1Vm5GB2zJbKw",
		libraries,
	});

	if (loadError) {
		return (
			<div>
				<NotFound />
			</div>
		);
	}
  if (!isLoaded) {
    return (
      <div  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <LoadingCircle/>
      </div>
    )
  }
  

  

	return (
		<div className="relative flex ">
			<div className="w-[414px] h-[900px] flex justify-center items-center ">
				{isLoaded && (
					<GoogleMap
						mapContainerStyle={mapContainerStyle}
						center={coords}
						zoom={15}
						options={{
							mapId: "2b2f7d2c9cafdc3b", // mapId aqui
							disableDefaultUI: true, //desativa botões padrão mapa(zoom etc)
						}}
					>
						<Marker position={coords} />
					</GoogleMap>
				)}
			</div>
		</div>
	);
}

export default App;
