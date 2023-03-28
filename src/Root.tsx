import Router from "./screens/Router";
import {Outlet} from "react-router-dom";
import Header from "./screens/Header";

function Root() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>

  );
}

export default Root;



