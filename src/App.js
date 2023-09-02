import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
