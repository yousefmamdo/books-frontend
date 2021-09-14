import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

class BookFormModal extends React.Component {
    render() {

        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title className="title">Add Book </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.addBook}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title of Book</Form.Label>
                                <Form.Control type="text" name='bookName' placeholder='Add Title' required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>description</Form.Label>
                                <Form.Control type="text" name='description' placeholder='Add description' required/>
                            </Form.Group>

                                                       
                                <Form.Label>Status</Form.Label>
                            <select name="status" id="status">
                                <option value={this.props.status}>Life Changing</option>
                                <option value={this.props.status}>Favorite Five</option>
                                <option value={this.props.status}>Recomended To Me</option>
                            </select>
                            
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.closeModel}>Close</Button>
                                <Button variant="primary" type='submit'>submit</Button>
                            </Modal.Footer>

                        </Form>

                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}
export default BookFormModal;