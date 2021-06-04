import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import Filter from './components/Filter'

function App() {
  return (
    <>
      <MyNav /> 
      <Header />
     
      <Movies />
      <Footer />
    </>

  );
}

export default App;
