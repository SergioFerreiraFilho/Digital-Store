import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "./Cabecalho";
import Nav from "./Nav";
import "./style.css"

export default function Header() {
    const [item, setItem] = useState("container-header")
    const navigate = useNavigate()
    useEffect(() => {
        // const layout = () => {
            if ('/cadastrar' === location.pathname || '/login' === location.pathname) {
                setItem("layoutSoHeader");
            }else {
                setItem('container-header')
            }
        // }
    },[navigate])



    return (
        <div className={item}>
            <div className="header-header">
                <Cabecalho />
                <Nav />
            </div>
        </div>
    );
}