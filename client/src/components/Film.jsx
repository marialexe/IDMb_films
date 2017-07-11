import React from 'react'

class Film extends React.Component {

  render() {
    return(
      <div className = "film">
        <h4 className = "filmTitle">
          {this.props.title}
        </h4>
          {this.props.children}
      </div>
      )
  }

}

export default Film