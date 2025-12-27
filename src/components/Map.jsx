import { useNavigate, useSearchParams } from "react-router-dom";
import style from "./Map.module.css";

export default function Map() {
  const navigate = useNavigate();
  const [SearchParams, setSearchParams] = useSearchParams();

  const lat = SearchParams.get("lat");
  const lng = SearchParams.get("lng");

  return (
    <div
      className={style.mapContainer}
      onClick={() => {
        navigate("Form");
      }}
    >
      <h1>map</h1>
      <h1>
        Position: {lat},{lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 23, lng: 30 })}>
        change Position
      </button>
    </div>
  );
}
