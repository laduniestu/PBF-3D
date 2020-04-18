import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutComponent from './component/AboutComponent';
import ProductComponent from './component/ProductComponent';
import KeranjangComponent from './component/KeranjangComponent';

export default function Tugas() {
  return (
    <Router>
      <div class="topnav">
            <Link to="/home">Home</Link>
          
            <Link to="/product">List Product</Link>
          
            <Link to="/keranjang">Keranjang Belanja</Link>
          
          <Link to="/about">About</Link>
      </div>
      <div class="tengah">
        <hr />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/product">
            <ProductComponent />
          </Route>
          <Route path="/about">
            <About />
            <AboutComponent />
          </Route>
          <Route path="/keranjang">
            <Keranjang />
            <KeranjangComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <center><div>
      <h2>UTS Online Shop Microwave/Oven</h2>
    </div></center>
  );
}

function About() {
  return (
    <center><div>
      <h2>About</h2>
    </div></center>
  );
}

function Keranjang() {
  return (
    <center><div>
      <h2>Keranjang Belanja</h2>
    </div></center>
  );
}