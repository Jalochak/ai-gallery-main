import { useState } from "react";
import { ImageObject } from "../types";

const UseLocalStorage = () => {
  const localStorageData = localStorage.getItem("images");
  const localStorageFavoritesData = localStorage.getItem("favoriteImages");
  const initial: ImageObject[] = localStorageData
    ? JSON.parse(localStorageData)
    : [];
  const initialFavorites: ImageObject[] = localStorageFavoritesData
    ? JSON.parse(localStorageFavoritesData)
    : [];
  const [images, setImages] = useState(initial);
  const [favoriteImages, setFavoriteImages] = useState(initialFavorites);
  const appendImages = (image: ImageObject): void => {
    const updatedImages = [...images, image];
    updateImages(updatedImages);
  };

  const addToFavorites = (image: ImageObject): void => {
    const updatedFavorites = [...favoriteImages, image];
    updateFavorites(updatedFavorites);
  };
  const remove = (imageId: number) => {};

  const updateImages = (updatedImages: ImageObject[]): void => {
    setImages(updatedImages);
    localStorage.setItem("images", JSON.stringify(updatedImages));
  };
  const updateFavorites = (updatedFavorites: ImageObject[]): void => {
    setFavoriteImages(updatedFavorites);
    localStorage.setItem("favoriteImages", JSON.stringify(updatedFavorites));
  };

  return { images, favoriteImages, appendImages, addToFavorites, remove };
};

export default UseLocalStorage;
