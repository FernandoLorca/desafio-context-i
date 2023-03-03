import { createContext, useContext, useState, useEffect } from "react";

export const JsonDataContext = createContext();

const JsonDataContextProvider = ({ children }) => {
  const [dataPhotos, setDataPhotos] = useState([]);
  const [likedPhotos, setLikedPhotos] = useState([]);

  const getPhotos = async () => {
    const res = await fetch("../fotos.json");
    const data = await res.json();

    setDataPhotos(data.photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const handleLikedPhotos = (index) => {
    const newLikedPhotos = [...likedPhotos];
    const photo = dataPhotos[index];
    const photoIndex = newLikedPhotos.findIndex(
      (likedPhoto) => likedPhoto.id === photo.id
    );

    if (photoIndex > -1) {
      newLikedPhotos.splice(photoIndex, 1);
    } else {
      newLikedPhotos.push(photo);
    }

    setLikedPhotos(newLikedPhotos);
  };

  return (
    <JsonDataContext.Provider
      value={{
        dataPhotos,
        likedPhotos,
        handleLikedPhotos,
      }}
    >
      {children}
    </JsonDataContext.Provider>
  );
};

export const useJsonDataContext = () => useContext(JsonDataContext);

export default JsonDataContextProvider;
