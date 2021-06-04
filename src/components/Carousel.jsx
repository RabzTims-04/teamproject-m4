import { Component } from 'react'

class Carousel extends Component{

    state = {
        moviesArr: []
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
                 <img className="imagetransition img-fluid image-height" src={movie.Poster} alt={movie.Title}/>
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