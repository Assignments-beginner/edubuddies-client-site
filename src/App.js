import "./App.css";
import Header from "../src/Components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <!-- content goes here --> */}
      <div className="py-32 text-center">
        <h2 className="font-light text-6xl text-sky-300">Don't worry it's just a demo, we will change everything.</h2>
      </div>
    </div>
  );
}

export default App;
