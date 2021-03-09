import React from 'react';
import axios from 'axios';
import Shelf from './Shelf.js';
import "./Home.css";
import Header from './Header'
import Reviews from './Reviews'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: 'Hello People', title: '', authors: [], cover: '', description: '', booktitle: '', reviews: {
      reviews: '', title: ''
    }, book: {title: 'The Lord of the Rings', author: 'J. R. R. Tolkien'}};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBackEnd = this.handleBackEnd.bind(this);
    this.submitBackEnd = this.submitBackEnd.bind(this);
  }

  handleInput(event) {
      this.setState({booktitle: event.target.value});
  }



  handleBackEnd() {
    console.log("button clicked reviews")
      // this.setState({booktitle: event.target.value});
      const baseUrl = "http://localhost:3000/reviews/"
      axios(baseUrl).then((response) => {
         const info = (response.data)
         const title = info[0]["title"]
         const review = info[0]["review"]

         console.log(info)
         console.log(title)
         console.log(review)
      })
  }

  submitBackEnd() {
    console.log("button clicked")
      // this.setState({booktitle: event.target.value});
      fetch('http://localhost:3000/books/' , {
  method: "POST",
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(this.state)
})
.then((result) => result.json())
.then((info) => { console.log(info); })
  }



  handleSubmit(event) {
    event.preventDefault();
    // this.props.onSubmit( this.state.query );

    const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=title:${ this.state.booktitle }`
    axios(bookUrl).then((response) => {
       const info = (response.data)
       console.log(info)
       const titleResponse = info["items"][0]["volumeInfo"]["title"]
       const authorsResponse = info["items"][0]["volumeInfo"]["authors"]
       const descriptionResponse = info["items"][0]["volumeInfo"]["description"]
       const coverResponse = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
         console.log(coverResponse)
         this.setState({cover: coverResponse});
         this.setState({title: titleResponse});
         this.setState({authors: authorsResponse});
         this.setState({description: descriptionResponse});
    }).catch((error) =>  console.log('no book by this name')
  )
  }



 render() {
  return (
 <div>
 <Header />
  <div className="container">

   <div className="searchForm">
    <form onSubmit={this.handleSubmit} className="search-button">
    <label>
       BookTitle:

        <input type="search" onInput={this.handleInput} required placeholder="Book name ..." />
        <input type="submit" value="Search Book" className="search-button"/>
     </label>
      </form>


      <h1> {this.state.title} </h1>
      {this.state.authors ? this.state.authors.map((author) =>
        <h3 key={author}> {author} </h3>
      ) : this.state.data}
        <p> {this.state.description}</p>
      {<img src={ this.state.cover } />}

{this.state.title ?
      <button type="button" onClick={this.submitBackEnd}>Add to shelf</button>
      :null}
    </div>
     <div className="shelfDiv">
        <Shelf data = {this.state.data} />
     </div>

  </div>
</div>
  )
 }
}
export default Home;

// // {if (this.state.title === this.state.reviews["title"]? )
//
//       <button type="button" onClick={this.handleBackEnd}>Load back end</button>
