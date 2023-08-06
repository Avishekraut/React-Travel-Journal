import "./App.css";
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import globeicon from "./images/globe-icon.png";
import data from "./data";
import Footer from "./Components/Footer"

function App() {
  const info = data.map((data) => {
    return <Card key={data.id} item={data} />;
  });
  return (
    <div className="App">
      <Nav img={globeicon} />
      <div className="cards-conatainer">
        {info}
      </div>
      <Footer />
    </div>
  );
}

export default App;
