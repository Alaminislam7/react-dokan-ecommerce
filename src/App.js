import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Cart from './pages/CartPage';
import Default from './pages/Default';
import Products from './pages/ProductPage';
import SingleProductPage from './pages/SingleProductPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';


function App() {
  return (
    <>
      {/* Navbar, Sidebar, Cart, Footer */}
      <Navbar/>
      <Sidebar/>
      <SideCart/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/products' component={Products}/>
        <Route path="/product/:id" component={SingleProductPage} />
        <Route path='/Cart' component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
