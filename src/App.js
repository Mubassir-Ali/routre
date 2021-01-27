import "./App.css";
import { Route, Switch, link, Link } from "react-router-dom";
import { Home } from "./Components/Home";
import { WShoes } from "./Components/WShoes";
import { MShoes } from "./Components/MShoes";
import { KShoes } from "./Components/KShoes";
import { Error } from "./Components/Error";
import { WmenIndex } from "./Components/WmenIndex";


function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>
        <Link to="/kids">Kids</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/women" component={WShoes}>
          <Route path='/' component={WmenIndex} />
        </Route>
        <Route exact path="/men" component={MShoes} />
        <Route exact path="/kids" component={KShoes} />
        <Route path="*" component={Error} />
      </Switch> */}
      

    </div>
  );
}

export default App;
