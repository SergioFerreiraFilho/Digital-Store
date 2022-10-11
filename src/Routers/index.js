import {BrowserRouter,Route, Routes} from "react-router-dom";

export default function Routers(){
    return(
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route></Route>
            </Routes>
        <Footer/>
        </BrowserRouter>
    );
}