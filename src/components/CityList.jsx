import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Cityitem from "./Cityitem";
import Message from "./Message";
import { useCities } from "../context/CitiesProvider";

export default function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your First city by Clicking on a cityon the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <Cityitem city={city} key={city.id} />
      ))}
    </ul>
  );
}
