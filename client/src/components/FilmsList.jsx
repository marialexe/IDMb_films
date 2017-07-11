import React from 'react'
import Film from './Film.jsx'

class FilmsList extends React.Component {

  render() {

    const filmNodes = this.props.data.map ((film) => {
      return(
        <Film title={film.title} key={film.id} > {film.description} </Film>
        )
    })

    return(
      <div className = "films-list">
        {filmNodes}
      </div>
    )

  }
  

}

export default FilmsList