import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout():JSX.Element {
    return(
        <div className="layout-basic">
            <Header />
            <main><Outlet /></main>
            <Footer>© 2022 - JEHYUN JUNG</Footer>
        </div>
)}

export default Layout;