import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout():JSX.Element {
    return(
        <div className="layout-basic">
            <Header logo={"Logo"} />
            <main><Outlet /></main>
            <Footer>© Footer</Footer>
        </div>
)}

export default Layout;