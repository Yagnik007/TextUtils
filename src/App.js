import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title = "Text-utils"/>
      <div className="container my-3">
        <TextForm/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;


