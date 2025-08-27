import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
