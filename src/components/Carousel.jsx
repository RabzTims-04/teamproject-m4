import { Component } from 'react'
import ModalTemplate from './ModalTemplate'

class Carousel extends Component{

    state = {
        moviesArr: [],
        selectId:''
    }

    componentDidMount = async ()=>{
        const url=' http://www.omdbapi.com/?i=tt3896198&apikey=5b5bab7&s=' + this.props['movieName']

        try {

            let response = await fetch(url)
            /* console.log(response); */
            const data = await response.json()
            console.log(data);
            let movies = data.Search
            console.log(movies);
            this.setState({
                ...this.state,
                moviesArr:movies
            })
            
        } catch (error) {
            console.log(error);            
        }
    }

    render(){
        return(

            <>
            {(this.state.moviesArr.length === 0)
            ?<p>No movies to show</p>
            :this.state.moviesArr.map((movie,i) =>              
            <div key={movie.imdbID} className ='infinite-row-element'>
                 <img
                 id={movie.imdbID}
                 onClick={(e)=>{
                     this.setState({...this.state, selectId:e.target.id})
                     console.log(e.target.id);
                 }} 
                 className="imagetransition img-fluid image-height" 
                 src={movie.Poster} 
                 alt={movie.Title}/>
                 <div className="text-center" id={movie.imdbID}>
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

/* 
<div className ='infinite-row-element'>
                <img className="imagetransition img-fluid" src="" alt=""/>
            </div> */