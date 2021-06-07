import { Component } from 'react'
import ModalTemplate from './ModalTemplate'


class Carousel extends Component{

    state = {
        moviesArr: [],
        selectId:'',
        search:''
    }

    fetchData = async()=>{
        const url='http://www.omdbapi.com/?i=tt3896198&apikey=5b5bab7&s=' + this.props['movieName']

        try {

            let response = await fetch(url)
            /* console.log(response); */
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
    }

    

    componentDidMount = ()=>{
        this.fetchData()
  /*        const url='http://www.omdbapi.com/?i=tt3896198&apikey=5b5bab7&s=' + this.props['movieName']

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
        }  */
    }

     componentDidUpdate = (prevProps)=>{
         console.log('prevprops',prevProps);
        if(prevProps.movieName !== this.props.movieName){
            this.fetchData()
        }
    } 

 /*    searchMovies =(e)=>{
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
     
            
            {(!this.state.moviesArr)
            ?<p>No movies to show</p>
            :this.state.moviesArr.map((movie,i) =>              
            <div key={movie.imdbID} className ='infinite-row-element position-relative'>
                 <img
                 id={movie.imdbID}
                 onClick={(e)=>{
                     this.setState({...this.state, selectId:e.target.id})
                     console.log(e.target.id);
                 }} 
                 className="imagetransition img-fluid image-height" 
                 src={movie.Poster} 
                 alt={movie.Title}/>
                 <div className="text-center modal-div position-absolute" id={movie.imdbID}>
                     < ModalTemplate moviename={movie.Title} elementId={movie.imdbID}/>
                </div>
             </div>
             
               
            )
            }
            </>
            
        )
    }
}

export default Carousel

/* <Filter movies={this.state.moviesArr}/> */

/* 
<div className ='infinite-row-element'>
                <img className="imagetransition img-fluid" src="" alt=""/>
            </div> */