import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

/*
 * BrowserRouter, not HashRouter. With HashRouter the URL hash *is* the route,
 * so an in-page anchor like #projects resolved to the route "/projects",
 * matched nothing, and blanked the page. BrowserRouter leaves the hash free
 * for section anchors and deep links.
 *
 * 404.html restores the path for any non-root URL (GitHub Pages has no
 * server-side rewrite), so client routes keep working when they're added.
 */
const redirected = new URLSearchParams(window.location.search).get('redirect');
if (redirected) {
    window.history.replaceState(null, '', import.meta.env.BASE_URL.replace(/\/$/, '') + redirected);
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
