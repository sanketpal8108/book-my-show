import { Route } from "react-router-dom";

//axios
import axios from "axios";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHoc from "./HOC/Movie.HOC";

//PAGES
import HomePage from "./Pages/Home.page";
import Movie from "./Pages/Movie.page";
import Plays from "./Pages/page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


//axios default settings
axios.defaults.baseURL ="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api key"]= process.env.REACT_APP_API_KEY;


function App() {
  return (
   <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHoc path="/movie/:id" exact component={Movie} />
     <DefaultHOC path="/plays" exact component={Plays} />
   </>
 );
}
// / , /movie
export default App;
