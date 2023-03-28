import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import Root from "../Root";


// createBrowserRouter 방식
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children : [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

export default router;







// BrowserRouter 방식


// export default function Router () {
//   return (
//   <BrowserRouter>
//     <Header />
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/about' element={<About />} />
//     </Routes>
//   </BrowserRouter>
//   )
// }
