import "./App.css";
import { Home } from "./Components/Home";
import { WShoes } from "./Components/WShoes";
import { MShoes } from "./Components/MShoes";
import { KShoes } from "./Components/KShoes";

function App() {
  return (
    <div className="App">
      <Home />
      <MShoes />
      <WShoes />
      <KShoes />
    </div>
  );
}

export default App;
