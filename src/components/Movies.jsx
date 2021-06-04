import { Component } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from './Carousel'
import './Movies.css'

class Movies extends Component{

    render(){
        return (
            <Container fluid>
                <div className="mt-5">
                    <h6 className="d-inline pl-3">
                        Harry Potter
                    </h6>
                </div>
                <div className="scroller mt-1">
                    <div id="harry-potter" className="infinite-row">
                    <Carousel movieName='harry%20potter' />
                    </div>
                </div>
              
               <div className="mt-5">
                    <h6 className="d-inline pl-3">
                        Lord of the Rings
                    </h6>
                </div>
                <div className="scroller mt-1">
                    <div id="lotr" className="infinite-row">
                    <Carousel movieName='Lord+of+the+rings' />
                    </div>
                </div>
             
               <div className="mt-5">
                    <h6 className="d-inline pl-3">
                        Batman
                    </h6>
                </div>
                <div className="scroller mt-1">
                    <div id="batman" className="infinite-row">
                    <Carousel movieName='Batman'/>
                    </div>
                </div>

                <div className="mt-5">
                    <h6 className="d-inline pl-3">
                        Avengers
                    </h6>
                </div>
                <div className="scroller mt-1">
                    <div id="avengers" className="infinite-row">
                    <Carousel movieName='Avengers'/>
                    </div>
                </div>   
            </Container>
        )
    }
}

export default Movies

/*  <Carousel movieName='harry%20potter' /> */