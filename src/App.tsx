import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
