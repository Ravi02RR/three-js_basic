
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </Router>
  );
}

export default App;
