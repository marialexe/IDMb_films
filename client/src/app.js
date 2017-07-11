import React from 'react';
import ReactDOM from 'react-dom';
import ImdbFilms from './components/WeeksFilms.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <ImdbFilms/>,
    document.getElementById('app')
  );
});
