import React from 'react';
import MovieList from './components/MovieList'; // Import the MovieList component
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
      return (
          <div>
              <MovieList />
          </div>
      );
  }
}


export default App;