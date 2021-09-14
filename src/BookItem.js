import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class BookItem extends React.Component {
    render() {
        
        return (
            <div>
            
    <Col>

            <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Text>
            <h1>{this.props.item.title}</h1>
            <h3>{this.props.item.description}</h3>
            </Card.Text>
            <Button variant="primary" onClick={() => this.props.deleteBook(this.props.item._id)}>Delete</Button>

            <Button variant="primary" onClick={() => this.props.showUbdateForm(this.props.item)}>Update</Button>
            </Card.Body>
            <Card.Header>{this.props.item.status}</Card.Header>
      </Card>
      </Col>
            </div>
        )
    }
}
export default BookItem;