import React, {Component} from 'react';

class FilmButton extends Component {
  render(){
    return<a href={this.props.url}><button>{this.props.title}</button></a>
  }
}


export default FilmButton;
