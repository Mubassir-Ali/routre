import { Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home';
import { WShoes } from './Components/WShoes';
import { MShoes } from './Components/MShoes';
import { KShoes } from './Components/KShoes';
import { Error } from './Components/Error';
import { NavBar } from './Components/NavBar';


function App() {
	return (
		<div>
			<NavBar />

			<div className="container">
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
