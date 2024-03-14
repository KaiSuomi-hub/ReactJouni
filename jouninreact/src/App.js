import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Navbar></Navbar>
            <div className="container">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
