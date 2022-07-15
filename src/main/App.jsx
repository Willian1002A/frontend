import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./App.css";
import { BrowserRouter } from "react-router-dom";//BrowserRouter é uma alternativa sem hash ao HashRouter, o mesmo pode ter alguns problemas em produção, quando o redirecionamento não ocorre automaticamente, o que pode fazer que seja necessario utilizar apache, ESNext, diferença entre eles link: https://medium.com/@daniel.hramkov/browserrouter-vs-hashrouter-e8bf1c3824ce
import Routes from "./Routes";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
// import Home from "../components/home/Home";
import Footer from "../components/template/Footer";

export default props =>
    <BrowserRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
    </div>
    </BrowserRouter>