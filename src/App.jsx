import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
