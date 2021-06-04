import React from 'react'
import Loading from './Loading'
import { ListGroup } from 'react-bootstrap'



class CommentsList extends React.Component {

    state = {
        comments: [],
        isLoading: true
    }

    componentDidMount = async () => {
        const url = "https://striveschool-api.herokuapp.com/api/comments/"
        try {
            let response = await fetch(url + this.props.imdbID, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2JhOWNlYWY0ODAwMTVjOTE4NjYiLCJpYXQiOjE2MjI3OTg2NzksImV4cCI6MTYyNDAwODI3OX0.V8KJrn1i0Rq_N_xOj3dtZ9oHmcfsYcUrnb7KD9-0JG8"
                }
            })

            let comments = await response.json()

            this.setState({
                comments: comments,
            })
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false})
        }
    }

    componentDidUpdate = async () => {
        if(this.props.updated) {
            try {
                let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.imdbID, {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2JhOWNlYWY0ODAwMTVjOTE4NjYiLCJpYXQiOjE2MjI3OTg2NzksImV4cCI6MTYyNDAwODI3OX0.V8KJrn1i0Rq_N_xOj3dtZ9oHmcfsYcUrnb7KD9-0JG8"
           }
                })

                let comments = await response.json()

                this.setState({
                    comments: comments,
                    isLoading: false
                })
            } catch (error) {
                console.log(error)
                this.setState({ isLoading: false})
            }
        }
    }

    deleteComment = async (id) => {
        this.setState({...this.state, isLoading: true})
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlMzU3MWNlYWY0ODAwMTVjOTE4NjIiLCJpYXQiOjE2MjI3MjgxNjQsImV4cCI6MTYyMzkzNzc2NH0.9IIHO9P16tKwX-Ou8dNdpGV3lroNfYEEjkMGlNmsbhw"
                }
            })

            if(await response.ok) {
                this.setState({...this.state, isLoading: false})
                this.props.commentsUpdated()
            }

        } catch (error) {
            console.log(error)
            this.setState({...this.state, isLoading: false})
        }
    }

    render() {
        return (
            <>
                {
                    (
                        this.state.comments.length === 0
                        && this.state.isLoading === false
                    )
                        ? <p>No Comments Yet</p>
                        : <ListGroup>
                            {this.state.comments.map(comment => 
                                <ListGroup.Item className="d-flex" onClick={() => this.deleteComment(comment._id)}><span className="mr-auto">{comment.comment}</span><span>{comment.rate}/5</span></ListGroup.Item>    
                            )}
                        </ListGroup>
                }

                {this.state.isLoading && <Loading />}
            </>
        )
    }
}

export default CommentsList