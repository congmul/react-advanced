import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navMenu } from './navMenu.data';
import logoKangjung from '../../assets/img/logo_kangjung.png';
import Account from '../Account/Account';

function Header():JSX.Element {
    const [ selectedNav, setSelectedNav ] = useState(() => navMenu[0].name || '');
    function onClickNavMenu(event: any) {
        setSelectedNav(event.currentTarget.dataset.menu)
    }
    return(
        <header>
            <Link to="/" className="logo-wrapper" data-menu={navMenu[0].name} onClick={onClickNavMenu}>
                <div className="logo">
                    <img src={logoKangjung} alt="logo" />
                </div>
            </Link>
            <nav>
                <ul>
                    {navMenu.map((menu, index) => 
                        <Link key={`${menu.name}-${index}`} to={`/${menu.link}`} className={selectedNav === menu.name ? "active": ''} data-menu={menu.name} onClick={onClickNavMenu}>
                            <li>
                                {menu.icon != null ? menu.icon() : menu.name}
                            </li>
                        </Link>
                    )}
                </ul>
            </nav>
            <div className="third-col">
                <Account />
            </div>
        </header>
)}

export default Header;