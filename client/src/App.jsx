// client/src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./components/Home/HomePage.jsx";
function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default App;