import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

/*
 * Normal document flow. This used to be `absolute left-0 top-0 w-full h-full`,
 * which pulled the whole app out of flow and resolved `h-full` against a
 * parent that had no height.
 */
function Layout() {
    return (
        <div className="flex min-h-dvh flex-col">
            <a href="#main" className="skip-link">
                Skip to content
            </a>
            <Navbar />
            <main id="main" className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
