import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Home from "./Home";

export default function Router () {
  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}
