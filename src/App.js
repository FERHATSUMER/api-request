import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import searchImages from './api' 


function App() {
  const handleSubmit = (term) => {
    debugger;
    console.log(term);
    searchImages(term);
  };
  return (
    <div className="App">
      <Header />
      <Search search={handleSubmit} />
    </div>
  );
}

export default App;
