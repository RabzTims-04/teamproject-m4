import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import { Component } from 'react'
import Filtersearch from './components/Filtersearch';


class App extends Component {

  state ={
    searchKey:''
  }

  setSearchKey = searchKey =>{
    this.setState({
      searchKey:searchKey.toLowerCase()
    })
  }

  render(){

    console.log(this.state.searchKey);

    return (
      <>
        <MyNav /> 
        <Header />
        {/* <Filtersearch/> */}
        <Movies />
        <Footer />
      </>
  
    );

  }
  
}

export default App;
