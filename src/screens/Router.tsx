import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../components/Header";
import About from "./About";
import Home from "./Home";
import Root from "../Root";
import NotFound from "./NotFound";
import ErrorComponent from "../components/ErrorComponent";
import User from "./user";


// createBrowserRouter 방식
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children : [
      {
        path: '',
        element: <Home />,
        // home 컴포넌트에 충돌이 난다면 아래 에러컴포넌트를 보여줘!
        errorElement: <ErrorComponent />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'users/:userId',
        element: <User />
      }
    ],
    errorElement: <NotFound />
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
