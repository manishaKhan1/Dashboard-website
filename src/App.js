
import './App.css';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import List from './pages/list/List';
import { Single } from './pages/single/Single';
import { New } from './pages/new/New';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          
          <Route path='users'>
            <Route index element={<List/>}></Route>
            <Route path=':userId' element={<Single/>}></Route>
            <Route path='new' element={<New/>}></Route>
          </Route>


          <Route path='products'>
            <Route index element={<List/>}></Route>
            <Route path=':productId' element={<Single/>}></Route>
            <Route path='new' element={<New/>}></Route>
          </Route>

          </Route>
      </Routes>
      
    </div>
  );
}

export default App;
