import "./App.css";
import Header from "./Components/header.jsx";
import Footer from "./Components/footer.jsx";
import Main from "./Components/Home.jsx";
function App() {
  return (
    <>
      <div className="App-container">
        <Header />
        <Main />
        <Footer/>
      </div>
    </>
  );
}

export default App;
