import { ImageObject } from "../../types";
import { MdFavoriteBorder } from "react-icons/md";
import "./Images.css";
import UseLocalStorage from "../../hooks/UseLocalStorage";

interface ImageContainerProps {
  key: number;
  image: ImageObject;
}

const Image = (props: ImageContainerProps) => {
  const { addToFavorites } = UseLocalStorage();

  const handleAddToFavorites = () => {
    addToFavorites(props.image);
  };
  return (
    <div className="image">
      <img src={props.image.src} alt={props.image.prompt} />
      <button onClick={handleAddToFavorites}><MdFavoriteBorder style={{color:"white"}}/></button>
    </div>
  );
};

export default Image;
