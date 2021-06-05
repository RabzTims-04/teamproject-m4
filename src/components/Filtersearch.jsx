import { Component } from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import Carousel from './Carousel'


class Filtersearch extends Component{

    state = {
        moviesArr: ['harry%20potter', 'Lord+of+the+rings', 'Batman', 'Avengers'],
        movie:'',
        search:''
    }

    

/*     componentDidMount = async ()=>{
        const url='http://www.omdbapi.com/?i=tt3896198&apikey=5b5bab7&s=' + this.props['movieName']

        try {

            let response = await fetch(url)
            console.log(response); 
            const data = await response.json()
            console.log(data);
            let movies = await data.Search
            console.log(movies);
            this.setState({
                moviesArr:movies
            })
            
        } catch (error) {
            console.log(error);            
        }
    } */

    inputChange =(e)=>{
        e.preventDefault()
        this.setState({
            search:e.target.value.toLowerCase()
        })
    }

    searchTitle = (e)=>{
        e.preventDefault()
     let filterMovie = this.state['moviesArr'].filter(movie=>movie.toLowerCase().includes(this.state.search)) 
     if(this.state.search.length>2){
         this.setState({
             movie:filterMovie
     })
     }
     else{
         this.setState({
             movie:''
         })
     }
    }

   /*  searchMovies =(e)=>{
        e.preventDefault()
        let filtermovies = this.state['moviesArr'].filter(movie=>movie['Title'].toLowerCase().includes(this.state.search))
        console.log(filtermovies);
        if(this.state.search.length>2){
            this.setState({
                movies:filtermovies
            })
        }
        else{
            this.setState({
                movies:[]
            })
        }
      } */

    render(){
        return(
            <>
       
            <Container fluid>
           <Form className="text-center" inline onSubmit={(e) => this.searchTitle(e)}>
            <FormControl id="search" 
                         type="text" 
                         value={this.state.search} 
                         placeholder="Search" 
                         className="mr-sm-2 my-3 ml-auto"  
                         onChange={e => this.inputChange(e)}/>
              <Button 
              id="searchbtn" 
              className="mr-auto" 
              variant="outline-success" 
              type="submit"
              >Search</Button>
        </Form> 
            </Container>

            <Carousel searchTitle={this.state.search} movieNamesearch={this.state.movie} movieName=''/>

            </>

            
        )
    }
}

export default Filtersearch

/* <Filter movies={this.state.moviesArr}/> */

/* 
<div className ='infinite-row-element'>
                <img className="imagetransition img-fluid" src="" alt=""/>
            </div> */