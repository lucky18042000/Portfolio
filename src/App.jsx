import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
