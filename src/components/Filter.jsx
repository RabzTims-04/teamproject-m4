import {Container} from 'react-bootstrap'
import { Component } from 'react'
import Carousel from './Carousel'


class Filter extends Component{

    state={

        movies:[]
        /* filtered:[] */
    }

    componentDidMount = async ()=>{
        const url= 'http://www.omdbapi.com/?i=tt3896198&apikey=5b5bab7&s=' + this.props.movieName 

        try {

            const response = await fetch(url)
            if(response.ok){
                const data = await response.json()
                console.log(data);
                this.setState({
                    movies:data.Search
                })
                /* console.log(this.state.movies);
                let filtermovies = this.state['movies'].filter(movie=>movie['Title'].toLowerCase().includes(this.props.searchTitle))
                this.setState({
                    filtered:filtermovies
                }) */
              
            }else{
                console.log('error');
            }   
            
        } catch (error) {
            console.log(error);            
        }
    }

    componentDidUpdate =()=>{
        
    }

    /* inputChange =(e)=>{
        this.setState({
            search:e.target.value.toLowerCase()
        })
    } */

    /*  searchMovies =(e)=>{
        e.preventDefault()
        let filtermovies = this.state['movies'].filter(movie=>movie['Title'].toLowerCase().includes(this.props.searchTitle))
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
    }  */

    render(){
        return(
            <>
     {/*        <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                    <Form className="text-center" inline onSubmit={(e) => this.searchMovies(e)}>
                            <FormControl id="search" 
                                type="text" 
                                value={this.state.search} 
                                placeholder="Search" 
                                className="mr-sm-2 my-3 ml-auto"  
                                onChange={e => this.inputChange(e)}/>
                            <Button id="searchbtn" className="mr-auto" variant="outline-success" type="submit">Search</Button>
                        </Form>                       
                    </Col>
                </Row>
            </Container> */}
            <Container fluid className="search-movies">
                {this.state.movies && <Carousel movieName ={this.state.movies}/>}
            </Container>
            </>
        )
    }
}

export default Filter