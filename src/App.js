
import './App.css';
import AddComments from './components/AddComments'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer";

function App() {
  return (
    <>
   
      <Header />
      <Movies />
       <AddComments/>
      <Footer />
    </>

  );
}

export default App;
