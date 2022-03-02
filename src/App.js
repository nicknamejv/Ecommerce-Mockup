import './App.css';
import Cover from './components/Cover/cover';
import Body from './components/Body/body';
import NavBar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cover />
      <Body />
    </div>
  );
}

export default App;
