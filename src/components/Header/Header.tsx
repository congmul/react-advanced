import { Link } from 'react-router-dom';

interface PropsType{
    children?: React.ReactNode;
    logo?: React.ReactNode | string;
}

function Header({children, logo}:PropsType):JSX.Element {
    return(
        <header>
            <Link to="/" className="logo">
                {logo || "Logo"}
            </Link>
            <nav>
                <ul>
                    <Link to="/">
                        <li>
                            Link 1
                        </li>
                    </Link>
                    <Link to="#2">
                        <li>
                            Link 2
                        </li>
                    </Link>
                    <Link to="#3">
                        <li>
                            Link 3
                        </li>
                    </Link>
                    <Link to="#4">
                        <li>
                            Link 4
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
)}

export default Header;