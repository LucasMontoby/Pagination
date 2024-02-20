import NavBar from './component/NavBar/NavBar';
import {AppRouter} from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'

function App() {
 

  return (
    <Router>
      <NavBar/>
      <AppRouter/>
    </Router>
  )
}

export default App
