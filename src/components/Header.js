import React from 'react';
import "./Header.css"
import Reviews from './Reviews.js'
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";



class Header extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {onURL: '' };
    console.log(this.state.onURL)
  }

componentDidMount(){
  const currentPath = window.location.pathname
  const result = currentPath.slice(1, 8);
  console.log(result)
  this.setState({onURL: result})
}


  render() {

    return (
      <div className="header-header">
       <div className="header">
        <div className="link">
        {this.state.onURL === 'reviews' ? <Link to="/">Home</Link>: null}
        </div>
      </div>
      <div className="header-below">
      <h1 className="heading"> Ze-ibrary</h1>
      </div>


      </div>
    );
  }

}

export default Header;
