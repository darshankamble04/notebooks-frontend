import './App.css';
import '../src/css/utils.css';
import Home from './components/screens/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MyNotebooks from './components/screens/myNotebooks/MyNotebooks';

function App() {
  return (
    <>
     <Router>
        <Routes>

          <Route path="/" element={ <Home />}></Route>
          <Route path="/mynotebooks" element={ <MyNotebooks />}></Route>
          
        </Routes>
     </Router>
    
    </>
  );
}

export default App;
