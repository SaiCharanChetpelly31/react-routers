import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Blogs } from "./pages/Blogs";
import { BookRoutes } from "./pages/BookRoutes";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Nopage } from "./pages/Nopage";
import "./styles.css"
function App() {
  return (
    <>
    <Routes>
      <Route path="/books" element={<h1>Extra content</h1>}/>
    </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">blogs</NavLink>
          </li>
          <li>
            <NavLink to="/layout">layout</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
          <li>
            <NavLink end to="/books">books</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nopage" element={<Nopage />} />
        <Route path="/books/*" element={<BookRoutes />}/>
        <Route path="*" element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
