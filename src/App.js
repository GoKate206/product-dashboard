import Header from './components/Header/Header';
import './App.css';
import Product from './features/Product/Product';
import SpendChart from './features/SpendChart/SpendChart';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="productsPage">
        <Product />
        <SpendChart />
      </div>
    </div>
  );
}

export default App;
