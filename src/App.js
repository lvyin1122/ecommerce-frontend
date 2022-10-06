import Navbar from "./components/Navbar"
import Home from "./pages/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar brand="iBookStore"/>
      <Home/>
    </div>
  );
}

export default App;
