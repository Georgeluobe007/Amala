import './App.css';
import NavBar from './Components/NavBar';
import Food from './Components/Food';
import Fishmeat from './Components/Fishmeat';
import Dinks from './Components/Dinks';
import {Route,Routes} from 'react-router-dom'
import Cart from './Components/Cart'
import Printer from './Components/Printer'
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
     <Route path='/food' element={<Food/>}/>
     <Route path='/meatfish' element={<Fishmeat/>}/>
     <Route path='/drink' element={<Dinks/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/printer' element={<Printer/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
