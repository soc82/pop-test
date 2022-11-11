import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import UserProfile from './pages/users';


function App() {
  return (

    
        <Router>
          <Routes>
            <Route path="/">
              <Route path=":id" element={<UserProfile />} />
              <Route path="" element={<Home />} />
            </Route>
          </Routes>
        </Router>
       
    

  );
}

export default App;
