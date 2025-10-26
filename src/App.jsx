import { useState } from "react";
import { Header } from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/about/about.jsx";
import Services from "./pages/services/services.jsx";
import Home from "./pages/home/home.jsx";
import Contact from "./pages/contact/contact.jsx";
import Securities from "./pages/securities/securities.jsx";

import "./App.scss";

const App = () => {
    const [currentLanguage, setCurrentLanguage] = useState("Eng");
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App__header">
                    <Header
                        currentLanguage={currentLanguage}
                        setCurrentLanguage={setCurrentLanguage}
                    />
                </div>
                <div className="App__content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/securities" element={<Securities />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
