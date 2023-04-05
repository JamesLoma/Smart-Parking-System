import Navbar from './Navbar';
import Home from './Home';
import ParkingStatus from './ParkingStatus';
import Maps from './Maps';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Home/>
      <ParkingStatus/>
      <Maps/>
      </div>  
    </div>
  );
}

export default App;
