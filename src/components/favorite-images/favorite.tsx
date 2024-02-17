import React from "react";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import "./favorite.css";
import { ImageObject } from "../../types";
interface FavouriteImages {
  key: number;
  image: ImageObject;
}
const FavoriteImages = (props: FavouriteImages) => {
  return (
    <div className="fimage">
    <img src={props.image.src} alt={props.image.prompt} />
    <button>usun</button>
    </div>
  );
};

export default FavoriteImages;
