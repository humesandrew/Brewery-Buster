import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/searchbar/SearchBar";
import MainBox from "./components/mainbox/MainBox";


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <div>
        <MainBox />
      </div>
    </div>
  );
}

export default App;
