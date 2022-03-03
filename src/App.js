import './App.css';
import {
  Body,
  NavBar,
  Cover,
  Product,
  Sale
} from "./components/index.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cover />
      <Body />
      <Product />
      <Sale />
    </div>
  );
}

export default App;
