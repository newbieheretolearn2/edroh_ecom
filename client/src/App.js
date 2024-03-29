import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom"
import  Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/itemDetails";

import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";
import CartMenu from "./scenes/global/CartMenu";
const ScrollToTop =() => {
  const {pathname} = useLocation();


useEffect(() => {

  window.scrollTo(0,0);
},[pathname]
)
return null;}
function App() {
  return (
    <div className="app">
   <BrowserRouter>
   <Navbar />
   <ScrollToTop />
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/item/:itemId" element={<ItemDetails />}></Route>
    <Route path="/checkout" element={<Checkout />}></Route>
    <Route path="/checkout/success" element={<Confirmation />}></Route>
   </Routes>
    <CartMenu></CartMenu>
   </BrowserRouter>
    </div>
  );
}

export default App;
