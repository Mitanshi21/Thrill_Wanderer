
import Home from "./Pages/Home";
import About from "./Pages/About";
import Destination from "./Pages/Destination";
import TravelPackages from "./Pages/Travel_Packages";
import YourBooking from "./Pages/YourBooking";
import BookAppointment from "./Pages/Book_Appointment";
import Blog from "./Pages/Blog1";
import Detail from "./Pages/detail";
import Travel from "./Pages/Travel";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import "../src/style/App.css";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Home' exact element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Destination' element={<Destination/>} />
          <Route path='/Travel_Packages' element={<TravelPackages/>} />
          <Route path='/YourBooking' element={<YourBooking/>} />
          <Route path='/Book_Appointment' element={<BookAppointment/>} />
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='/Travel' element={<Travel/>}/>
        </Routes>
    </div>
  );
}
export default App;
