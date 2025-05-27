import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Layout } from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Product from "./pages/Product";
import Collection from "./pages/Collection";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Gallery />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="products/:id" element={<Product />}></Route>
          <Route path="collection/:id" element={<Collection />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
