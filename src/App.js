// import logo from './logo.svg';
import './App.css';
import PizzaList from './pizzerias/pizzeriaslist';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51D4D1X620L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" className="App-logo" alt="logo" />
        <p>
          Web App for Pizza lovers
        </p>
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList/>
      </header>
    </div>
  );
}

export default App;
