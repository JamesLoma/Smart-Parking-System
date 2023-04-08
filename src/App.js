import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import ParkingLot from './ParkingLot';
import Maps from './Maps';
import Setting from './Setting'
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/parkinglot" component={ParkingLot} />
          <Route exact path="/maps" component={Maps} />
          <Route exact path="/setting" component={Setting} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
