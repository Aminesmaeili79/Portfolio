import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogPageProvider from "./components/contexts/BlogPageContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <BlogPageProvider>
                <App />
            </BlogPageProvider>
        </BrowserRouter>
    </StrictMode>,
)