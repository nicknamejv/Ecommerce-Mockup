import './App.css';
import {
  Body,
  NavBar,
  Cover,
  Product,
  Sale,
  Contact,
  About
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
      <About />
    </div>
  );
}

export default App;
