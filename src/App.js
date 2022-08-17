import './App.css';
import { Example } from './Pages/Home';
//import { fetchData, baseURL, GetList, FetchStuff } from './Services/fetchApi';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { OneCard } from './Pages/OneCard';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home /> } exact/>
          <Route path='/onecard' element={<OneCard />} exact />
        </Routes>
      </Router>
    </div>
  )
}



export default App;
