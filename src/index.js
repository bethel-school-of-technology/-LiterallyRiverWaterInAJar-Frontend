import React,{ useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Products from './screens/Products';
import Cart from './screens/Cart';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './index.css' 

const App = () => {

  let [postMessage, setPosts] = useState([])

       useEffect(() => {

        fetch('http://localhost:3001/about')
        .then(data => data.json())
        .then(data => {
           setPosts(data)
        })

      }, []),

  <Router>
    <div>
      <ul className="headerThing" style={{ listStyleType: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Shopping Cart</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  </Router>
};

ReactDOM.render(<App />, document.getElementById('root'));