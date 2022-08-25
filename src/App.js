// import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/main/AllRoutes';
import Home from './Routes/main/Home';
import Login from './Routes/main/Login';
import SmallRoutes from './Routes/small/SmallRoutes';
import HotelCard  from "./Components/hotelCard"
import SearchPage  from './pages/searchPage';
function App() {
  return (
    <div className="App">

    {/* <Home/> */}
    {/* <Login/> */}
   
    {/* <AllRoutes/> */}
    {/* <hotelCard/> */}
    {/* <HotelCard/> */}
    <SearchPage/>
    </div>
  )
}

export default App;
