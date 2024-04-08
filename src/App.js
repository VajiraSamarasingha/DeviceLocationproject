import './App.css';
import Devices from './pages/Devices';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seedevice from './pages/Seedevice';
import Locations from './pages/Locations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
        <Routes>
          <Route path='/location' element={<Locations/>}/>
          <Route path='/device' element={<Devices/>}/>
          <Route path='/seelocationdata' element={<Seedevice/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
