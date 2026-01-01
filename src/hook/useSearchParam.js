import { useSearchParams } from "react-router-dom";

function useUrlLocation() {
  const [SearchParams] = useSearchParams();

  const lat = SearchParams.get("lat");
  const lng = SearchParams.get("lng");

  return [lat, lng];
}

export { useUrlLocation };
