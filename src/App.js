import "./App.css";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
