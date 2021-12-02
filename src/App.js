import './App.css';
import '../src/css/utils.css';
import Home from './components/screens/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MyNotebooks from './components/screens/myNotebooks/MyNotebooks';
import Notes from './components/screens/notes/Notes';
import Register from './components/screens/auth/Register';
import Login from './components/screens/auth/Login';
import ResetPass from './components/screens/auth/ResetPass';
import ForgotPass from './components/screens/auth/ForgotPass';
import AllBookmarkNB from './components/screens/myNotebooks/AllBookmarkNB';

function App() {
  return (
    <>
        
          <Router>
            <Routes>

              <Route path="/" element={<Home />}></Route>
              <Route path="/mynotebooks" element={<MyNotebooks />}></Route>
              <Route path="/notes" element={<Notes />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/resetpass" element={<ResetPass />}></Route>
              <Route path="/forgotpass" element={<ForgotPass />}></Route>
              <Route path="/allbookmarkednotebooks" element={<AllBookmarkNB />}></Route>

            </Routes>
          </Router>

    </>
  );
}

export default App;
