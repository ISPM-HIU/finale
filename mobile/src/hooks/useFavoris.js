import { useDispatch, useSelector } from "react-redux";
import { resetFavoris, setToggleFavoris } from "../store/features/favorisSlice";

const useFavoris = () => {
  const dispatch = useDispatch();
  const favoris = useSelector((state) => state.favoris.favoris);

  const toggleFavoris = ({ item }) => {
    // Move the API request outside the conditional block
    const search = favoris.find((el) => el.IDArtisan === item.IDArtisan);
    // Use an object spread to handle both cases of updating `updatedFavoris`
    const updatedFavoris =
      search && search.IDArtisan
        ? favoris.filter((el) => el.IDArtisan !== search.IDArtisan)
        : [...favoris, item];

    dispatch(setToggleFavoris(updatedFavoris));
  };

  const isFavoris = ({ item }) => {
    const search = favoris.find((el) => el.IDArtisan === item.IDArtisan);
    if (search && search.id) return true;
    return false;
  };

  const resetUserFavoris = () => {
    dispatch(resetFavoris());
  };

  
  return {
    resetUserFavoris,
    toggleFavoris,
    isFavoris,
    favoris,
  };
};

export default useFavoris;
