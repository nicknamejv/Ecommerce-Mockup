import './App.css';
import {
  Body,
  NavBar,
  Cover,
  Product
} from "./components/index.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cover />
      <Body />
      <Product />
    </div>
  );
}

export default App;
