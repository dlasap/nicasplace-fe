import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="AppGrid">
        <div className="GridItem Nav">
          <Header />
        </div>
        <div className="GridItem Content">
          <Content />
        </div>
        <div className="GridItem Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
