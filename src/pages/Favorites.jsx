import { useJsonDataContext } from "../context/JsonDataContext";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Favorites = () => {
  const { likedPhotos } = useJsonDataContext();

  return (
    <>
      <Nav />

      <main>
        <div className="flex justify-center">
          <h1 className="font-bold text-3xl my-5 text-green-500">Favoritos</h1>
        </div>
        <div className="mx-20">
          <div className="grid grid-cols-5 grid-rows-3 gap-5">
            {likedPhotos.map((photo, index) => (
              <div
                key={index}
                className="w-full h-52 place-self-center overflow-hidden relative"
              >
                <img
                  src={photo.src.medium}
                  alt={photo.alt}
                  className="w-full h-full"
                />
                <div className="absolute w-full h-1/3 bottom-0 left-0 bg-slate-700 bg-opacity-50 text-white">
                  <h2 className="p-2 text-sm">{photo.alt}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Favorites;
