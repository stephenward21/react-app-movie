import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Poster from './poster';
import Search from './search';

class App extends Component {

  constructor(props) {
    super(props);
    // in order to define state variable, put it in the constructor. we define it as an object on this.state.
    this.state = {
      moviePosters: []
    }

  }

  componentDidMount() {
    console.log("I'm in the DOM");
    var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
    $.getJSON(url, (movieData)=>{
      console.log(movieData);
      this.setState({
        moviePosters: movieData.results
      })

    });
  }

	render() {

    var postersArray = [];
    this.state.moviePosters.map((poster,index)=>{
      console.log(poster);
      postersArray.push(<Poster poster={poster} key={index} />)
      return

    });

		return (
			<div className="App">


				<h1> This is the movie app... again </h1>
        <Search />
          {postersArray}


		 
			</div>
		);
	}
}

export default App;
