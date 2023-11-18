
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import { Footer } from './components/footer';
import Nav from './components/nav';
import {HashRouter, Routes, Route} from "react-router-dom";
import { Home, Blog, Projects, Contact } from './components/main';

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
