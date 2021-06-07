import { Modal, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import AddComments from './AddComments'
import './ModalTemplate.css'
import CommentsList from './CommentsList'

const ModalTemplate = (props)=> {
    const [show, setShow] = useState(false);
    const [comments, setcomments] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   const updated =(data)=>{
     setcomments(data)
      
    }
  
    return (
      <>
        <Button id='modalbtn' variant="primary" onClick={handleShow}>
         
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props['moviename']}</Modal.Title>
          </Modal.Header>

          <Row>
           <Col>
           <CommentsList imdbID ={props.elementId} updatedComments={comments}></CommentsList>
           </Col>  
          </Row>
       
          <Row className="justify-content-center text-center mt-3">
         <Col>
         <AddComments elementId={props['elementId']} updatedComments={updated}/>
         </Col>
            </Row>
        </Modal>
      </>
    );
  }

  export default ModalTemplate
  