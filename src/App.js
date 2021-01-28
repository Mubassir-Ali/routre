import "./App.css";
import { Route, Switch, link, Link } from "react-router-dom";
import { Home } from "./Components/Home";
import { WShoes } from "./Components/WShoes";
import { MShoes } from "./Components/MShoes";
import { KShoes } from "./Components/KShoes";
import { Error } from "./Components/Error";
import WmenIndex from "./Components/WmenIndex";
import Grid from "./Components/Grid";
import {DataManipulation} from './Components/DataManipulation'

const logo =
  "https://freepngimg.com/thumb/adidas/58143-stan-logo-smith-shoe-adidas-free-frame-thumb.png";

function App() {
  return (
    <div>
      <div className="page-top" />
      <div className="nav-bar">
        <div className="logo">
          <img src={logo}></img>
        </div>

        <div className="menu">
          <ul>
            <a href="/men">
              <li>Men</li>
            </a>
            <a href="/women">
              <li>Women</li>
            </a>
            <a href="/kids">
              <li>Kids</li>
            </a>
          </ul>
        </div>
      </div>
{/* <DataManipulation/> */}

      <div className='container'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/women" component={WShoes} />
          <Route exact path="/men" component={MShoes} />
          <Route exact path="/kids" component={KShoes} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
