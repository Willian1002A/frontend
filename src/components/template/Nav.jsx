import "./Nav.css"

import NavItem from "./NavItem";

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/*Parte Refatorada para criar conponentes*/}
            <NavItem link="" icon="home" title="Início"/>
            <NavItem link="users" icon="users" title="Usuários"/>
            {/* Parte realizada na aula.*/}
            {/* <Link to="/">
                <i className="fa fa-home"></i>Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i>Usuáriros
            </Link> */}
        </nav>
    </aside>