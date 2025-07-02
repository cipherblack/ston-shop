import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const HowToBuy = React.lazy(() => import('./pages/HowToBuy'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Contact = React.lazy(() => import('./pages/Contact'));

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        } />
        <Route path="/products" element={
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        } />
        <Route path="/products/:id" element={
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        } />
        <Route path="/how-to-buy" element={
          <Suspense fallback={<Loading />}>
            <HowToBuy />
          </Suspense>
        } />
        <Route path="/blog" element={
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
        } />
        <Route path="/blog/:id" element={
          <Suspense fallback={<Loading />}>
            <BlogPost />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;