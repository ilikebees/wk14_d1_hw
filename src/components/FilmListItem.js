import React, {Component, Fragment} from 'react';

class FilmListItem extends Component{
  render(){
    return(
      <>
      <li><a href={this.props.url}>{this.props.name}</a></li>
      </>

    )
  }
}

export default FilmListItem;
