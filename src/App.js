import "./styles/home.scss";
import "./App.css";
import Home_left from "./components/Home_left";
import Home_right from "./components/Home_right";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="home_container">
      <div className="home_flex">
        <Navbar />
        <Home_right />
        <Home_left />
      </div>
    </div>
  );
};

export default App;
