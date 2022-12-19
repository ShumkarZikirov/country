import {Link, Route, Routes} from "react-router-dom";
import Details from "./details";
import Home from "../pages/home";

const Nav = () => {
  return(
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/details:country'} element={<Details/>}/>
      </Routes>
  )
}
export default Nav;