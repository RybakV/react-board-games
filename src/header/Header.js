import './Header.css';
import { Link, NavLink } from "react-router-dom"
import Form from './form/Form';
import Logo from './Logo';

import { useStoresHook } from '../store/use-stores-hook';

function Header() {

    const {popupForm} = useStoresHook();
    function callPopup(){
      popupForm.setFormVisible();
    }

    const navLinks = [
        {
            "url":"/",
            "title":"Ігри"
        },
        {
            "url":"/newbie",
            "title":"Новачкам"
        },
        {
            "url":"/feedback",
            "title":"Відгуки"
        },
        {
            "url":"/sale",
            "title":"Акції"
        },
        {
          "url":"/contacts",
          "title":"Контакти"
        },

    ]

    return (
        <header className="header">
            <Link to="/" className="header--logo">
                {/*<img src={logo} className="header--logo-img" alt="Логотип" />*/}
                <Logo/>
            </Link>
            <nav className="header--nav">

                {navLinks.map((item, index) => (
                    <NavLink key={index} to={item.url} className={({ isActive }) => (isActive ? 'header--nav-btn active' : 'header--nav-btn')}>{item.title}</NavLink>
                ))}

            </nav>
            <div className="header--phone" onClick={callPopup}>
              +38 (050) 555-99-55
            </div>
            <Form/>
        </header>
    );
}
export default Header;