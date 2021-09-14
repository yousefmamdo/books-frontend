import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import BookItem from './BookItem';
import BookFormModal from './AddForm';
import axios from 'axios';
import UpdateFormModel from './UpdateForm'

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookArr: [],
      showAdd: false,
      showupdate: false,
      bookName: '',
      description: '',
      status: '',
      book_id: ''

    }
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .get(`http://localhost:3010/getBook?email=${email}`)
      .then(result => {
        this.setState({
          bookArr: result.data
        })

      })
      .catch(err => {
        console.log('Error');
      })
  }

  addBook = (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      bookName: e.target.bookName.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: email
    }

    axios
      .post(`http://localhost:3010/addBook`, obj)
      .then(result => {
        this.setState({
          bookArr: result.data,
          showAdd: false
        })
      })
      .catch(err => {
        console.log('Error ');
      })

  }

  deleteBook = (id) => {

    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .delete(`http://localhost:3010/deleteBook/${id}?email=${email}`)
      .then(result => {
        this.setState({
          bookArr: result.data
        })
      })
      .catch(err => {
        console.log('Error');
      })
  }

  showUbdateForm = (item) => {
    this.setState({
      showupdate: true,
      bookName: item.title,
      description: item.description,
      status: item.status,
      book_id: item._id

    })
  }

  ubdateBooks = (e) => {
    e.preventDefault();

    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      bookName: e.target.bookName.value,
      description: e.target.description.value,
      status: e.target.status.value,
      book_id: this.state.book_id,
      email: email
    }

    axios
      .put(`https://can-of-bookss.herokuapp.com/updateBooks/${this.state.book_id}`, obj)
      .then(result => {
        this.setState({
          bookArr: result.data,
          showupdate: false
        })

      })
      .catch(err => {
        console.log('Error');
      })

  }

  handleClose = () => {
    this.setState({
      showAdd: true
    })
  }

  closeModel = () => {
    this.setState({
      showAdd: false
    })
  }
  closeModel2 = () => {
    this.setState({
      showupdate: false
    })
  }

  render() {
    return (
      <div>


        <Button variant="primary" onClick={this.handleClose}>Add Book</Button>

        <Row Row xs={1} md={3} className="g-4">
          {
            this.state.bookArr.map(item => {
              return (
                <BookItem
                  item={item}
                  deleteBook={this.deleteBook}
                  showUbdateForm={this.showUbdateForm}

                />
              )
            })
          }
        </Row>

        <BookFormModal
          show={this.state.showAdd}
          addBook={this.addBook}
          closeModel={this.closeModel}
        />

        <UpdateFormModel
          handleClose={this.handleClose}
          show={this.state.showupdate}
          closeModel2={this.closeModel2}
          bookName={this.state.bookName}
          description={this.state.description}
          status={this.state.status}
          ubdateBooks={this.ubdateBooks}
        />


      </div>
    )
  }
}
export default withAuth0(MyFavoriteBooks);