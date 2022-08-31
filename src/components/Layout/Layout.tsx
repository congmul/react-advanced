import { Outlet } from "react-router-dom";

function Layout():JSX.Element {
    return(<>
        <header>Header</header>
        <main><Outlet /></main>
        <footer>Footer</footer>
    </>)
}

export default Layout;