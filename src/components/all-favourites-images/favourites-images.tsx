import FavouriteImages from "../favorite-images/favorite";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import "./favourites-images.css";
const AllFavouritesImage = () => {
  const { favoriteImages } = UseLocalStorage();
    return( 
      <div className="all-fimages-container">
      {favoriteImages.map((image, index) => (
        <FavouriteImages key={index} image={image}></FavouriteImages>
      ))}
    </div>
    ); 
  };
  
export default AllFavouritesImage;