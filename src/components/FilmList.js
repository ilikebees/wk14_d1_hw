import React, {Component} from 'react';
import FilmListItem from './FilmListItem.js'

class FilmList extends Component {
  render(){
    const films = this.props.films.map((film, index) => {
      return (
        <FilmListItem
        key = {index}
        name = {film.name}
        url = {film.url}
        />
      );
    });

    return (
      <ul>{films}</ul>
    );
}


}

export default FilmList;
