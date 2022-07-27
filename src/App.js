import './App.css';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom'
import SingleMovies from './Components/SingleMovies'
import Error from './Components/Error';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='movie/:id' element={<SingleMovies></SingleMovies>} />
        <Route path='*' element={<Error></Error>}/>
    </Routes>
    </div>
  );
}

export default App;
