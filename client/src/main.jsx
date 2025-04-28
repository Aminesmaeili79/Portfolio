import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogPageProvider from "./components/contexts/BlogPageContext.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <BlogPageProvider>
                <App />
            </BlogPageProvider>
        </HashRouter>
    </StrictMode>,
)