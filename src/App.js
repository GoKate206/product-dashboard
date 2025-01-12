import Header from './components/Header/Header';
import './App.css';
import Product from './features/Product/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="productsPage">
        <Product className="productDetails" />
      </div>
    </div>
  );
}

export default App;
