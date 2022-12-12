import { Header } from './components/Header';
import { Main } from './pages/Main';
import { Cart } from './pages/Cart';
import FullProduct from './components/FullProduct';

import { Routes, Route } from "react-router-dom";

import './scss/index.scss';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path="/react-pizza" element={<Main/>} />
        <Route path="/react-pizza/:id" element={<FullProduct />} />
        <Route path="/react-pizza/cart" element={<Cart />} />
      </Routes>
    </div>
  ) 
}

export default App;
