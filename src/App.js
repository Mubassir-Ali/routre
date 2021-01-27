import './App.css';
import { Route, Switch, link, Link } from 'react-router-dom';
import { Home } from './Components/Home';
import { WShoes } from './Components/WShoes';
import { MShoes } from './Components/MShoes';
import { KShoes } from './Components/KShoes';
import { Error } from './Components/Error';
import WmenIndex from './Components/WmenIndex';
import Grid from './Components/Grid';

const logo='https://freepngimg.com/thumb/adidas/58143-stan-logo-smith-shoe-adidas-free-frame-thumb.png'

function App() {
	return (
		<div>
			<div className="page-top" />
      <div className="nav-bar" >
        <div className='logo'><img src={logo}></img></div>

        <div className='menu' ><ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul></div>
      </div>
      <div className='container'>
      <Grid/>

      </div>
      

			{/* <nav>
				<Link to="/">Home</Link>
				<Link to="/women">Women</Link>
				<Link to="/men">Men</Link>
				<Link to="/kids">Kids</Link>
			</nav>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/women" component={Grid} />
				<Route exact path="/men" component={MShoes} />
				<Route exact path="/kids" component={KShoes} />
				<Route path="*" component={Error} />
			</Switch> */}
		</div>
	);
}

export default App;
