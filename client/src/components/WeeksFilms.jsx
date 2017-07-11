import React from 'react'
import FilmsList from './FilmsList.jsx'

class WeeksFilms extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data:[{id:1, title: 'The Beguiled', description: 'blah blah blah'},
      {id:2, title: 'War from the Planet of the Apes', description: 'blah blah blah'},
      {id:3, title: 'Cars 3', description: 'blah blah blah'},
      {id:4, title: 'Jagga Jasoos', description: 'blah blah blah'},
      {id:5, title: 'David Lynch: The Art Life', description: 'blah blah blah'},
      ]
    }
  }

  render() {
    return(
      <div className="weeksFilms">
        <FilmsList data={this.state.data}/>
      </div>
      )
  }

}

export default WeeksFilms
