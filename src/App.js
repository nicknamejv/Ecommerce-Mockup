import './App.css';
import {
  Body,
  NavBar,
  Cover,
  Product,
  Sale,
  Contact,
  About,
  Footer
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
      <Footer />
    </div>
  );
}

export default App;
