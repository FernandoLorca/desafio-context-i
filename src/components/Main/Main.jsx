import { useJsonDataContext } from "../../context/JsonDataContext";
import Heart from "./Heart";

const Main = () => {
  const { dataPhotos, likedPhotos, handleLikedPhotos } = useJsonDataContext();

  return (
    <main>
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl my-5 text-green-500">Natural pic</h1>
      </div>
      <div className="mx-20">
        <div className="grid grid-cols-5 grid-rows-3 gap-5">
          {dataPhotos.map((photo, index) => {
            const isLiked = likedPhotos.some(
              (likedPhoto) => likedPhoto.id === photo.id
            );
            const filled = isLiked ? "liked" : "";
            return (
              <div
                key={index}
                className="w-full h-52 place-self-center overflow-hidden relative"
              >
                <img
                  src={photo.src.medium}
                  alt={photo.alt}
                  className="w-full h-full"
                />
                <Heart
                  handleLikedPhotos={() => handleLikedPhotos(index)}
                  filled={filled}
                />
                <div className="absolute w-full h-1/3 bottom-0 left-0 bg-slate-700 bg-opacity-50 text-white">
                  <h2 className="p-2 text-sm">{photo.alt}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
