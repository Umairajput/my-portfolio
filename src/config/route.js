import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Components/about";
import Contact from "../Components/Contact";
import Potfolio from "../Components/potfolio";
import Project from "../Components/project";

function AppRouter () {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element = {<Potfolio/>}></Route>
            <Route path='/about' element = {<About/>}></Route>
            <Route path="/project" element = {<Project/>}></Route>
            <Route path="/Contact" element = {<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;