import './App.css';
import {
  Body,
  NavBar,
  Cover,
  Product,
  Sale,
  Contact
} from "./components/index.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cover />
      <Body />
      <Product />
      <Sale />
      <Contact />
    </div>
  );
}

export default App;
