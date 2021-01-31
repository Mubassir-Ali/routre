import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home';
import { WShoes } from './Components/WShoes';
import { MShoes } from './Components/MShoes';
import { KShoes } from './Components/KShoes';
import {NavBar} from './Components/NavBar'

function App() {
	return (
		<div>
			<Router>
				<NavBar/>

				<div className="container">
					<Switch>
						<Route exact path="/" render={() => <Home />} />
						<Route exact path="/men" render={() => <MShoes />} />

						<Route exact path="/women" render={() => <WShoes />} />
						<Route exact path="/kids" render={() => <KShoes />} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
