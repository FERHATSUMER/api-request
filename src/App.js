import axios from 'axios';
import './App.css';
import Header from './components/header';
import Search from './components/search';

function App() {
  
const searchImages= async (term)=>{
const response=await  axios.get('https://api.unsplash.com/search/photos',{
  headers:{
    Authorization:'Client-ID 2V90XiC31En_Bs_dsNV-xa7EizJ1R9iJNizThVFW-CI'
  },
  params:{
    query:term
  }
})
return response.data.results
}

const handleSubmit= (term)=>{
  debugger;
  console.log(term)
  searchImages(term)
}
  return (
    <div className="App">
    <Header />
    <Search  search={handleSubmit} />
  </div>
  );
}

export default App;
