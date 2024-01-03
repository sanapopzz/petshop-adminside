import logo from './logo.svg';
import './App.css';
import Category from './components/Category/Category';
import Subcategory from './components/Subcategory/Subcategory';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Category/> */}
      {/* <Subcategory/> */}
      {/* <Login/> */}
      <BrowserRouter>
      <Routes>
        <Route path={'/'}element={<Login/>}></Route>
        <Route path={'/c'}element={<Category/>}></Route>
        <Route path={'/s'}element={<Subcategory/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
