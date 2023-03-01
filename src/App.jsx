import { useState, useEffect } from "react";

import Nav from "./components/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

function App() {
  const [dataPhotos, setDataPhotos] = useState([]);

  const getPhotos = async () => {
    const res = await fetch("../fotos.json");
    const data = await res.json();

    setDataPhotos(data.photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  console.log(dataPhotos);

  return (
    <>
      <Nav />

      <Main dataPhotos={dataPhotos} />

      <Footer />
    </>
  );
}

export default App;
