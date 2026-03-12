import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Skills from './pages/Skills';
import Cases from './pages/Cases';
import News from './pages/News';
import Contact from './pages/Contact';
import Preorder from './pages/Preorder';
import Support from './pages/Support';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="skills" element={<Skills />} />
        <Route path="cases" element={<Cases />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="preorder" element={<Preorder />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}
