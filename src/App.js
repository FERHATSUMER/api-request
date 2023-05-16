import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import searchImages from "./api";
import { useState } from "react";
import ImagesList from "./components/ImagesList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <Header />
      <Search search={handleSubmit} />
      <ImagesList imagesPlaceholder={images}/>
    </div>
  );
}

export default App;
