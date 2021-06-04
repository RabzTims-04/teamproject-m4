import { Modal, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import AddComments from './AddComments'
import './ModalTemplate.css'
import CommentsList from './CommentsList'

const ModalTemplate = (props)=> {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props['moviename']}</Modal.Title>
            <CommentsList imdbID ={props.elementId}></CommentsList>
          </Modal.Header>
       
          <Row className="justify-content-center text-center mt-3">
         <Col xs={12} md={6}>
         <AddComments elementId={props['elementId']}/>
         </Col>
            </Row>
        </Modal>
      </>
    );
  }

  export default ModalTemplate
  