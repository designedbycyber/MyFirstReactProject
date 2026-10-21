import "./Header.css";
import logo from "./assets/logo.svg";

function Header() {
    return (
        <header className="site-header container">

            <img src={logo} className="logo" />

            <nav className="navigation">
                <a href="#story" className="active">Our Story</a>
                <a href="#menu">Menu</a>
                <a href="#blends">Blends</a>
                <a href="#delivery">Delivery</a>
                <a href="#contacts">Contacts</a>
            </nav>

            <button className="locate-btn">Locate us</button>

        </header>
    );
}
export default Header;
