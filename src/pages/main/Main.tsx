import FilmsGallery from "../../components/films-gallery/FilmsGallery";
import NavbarFilters from "../../components/navbar-filters/NavbarFilters";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";

export default function MainFilms() {
  const userState = useSelector(userSelector);

  if (!userState.isAuth) return;
  return (
    <>
      <NavbarFilters />
      <FilmsGallery />
    </>
  );
}
