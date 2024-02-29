import React from 'react';
import Movie from './Movie'; 

class MovieListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        const sampleMovies = [
            {
                id: 1,
                title: 'Moonstruck', 
                image: 'https://i.imgur.com/i5lZho5.png', 
                synopsis: 'No sooner does Italian-American widow Loretta (Cher) accept a marriage proposal from her doltish boyfriend, Johnny (Danny Aiello), than she finds herself falling for his younger brother, Ronny (Nicolas Cage). She tries to resist, but Ronny lost his hand in an accident he blames on his brother, and has no scruples about aggressively pursuing her while Johnny is out of the country. As Loretta falls deeper in love, she comes to learn that she is not the only one in her family with a secret romance.', 
                rating: 'PG', 
                reviews: [
                    { id: 1, author: "John Doe", content: "This movie was amazing!" },
                    { id: 2, author: "Jane Smith", content: "I loved it!" },
                    { id: 3, author: "Sam Smith", content: "Moonstruck was a romantic movie!" }
                ]
            },
            {
                id: 2,
                title: 'The Goonies', 
                image: 'https://i.imgur.com/kNrGnKZ.png', 
                synopsis: 'Old-fashioned yarn about a band of adventurous kids who take on the might of a property developing company which plans to destroy their home to build a country club. When the children discover an old pirate map in the attic, they follow it into an underground cavern in search of lost treasure but come up against plenty of dangerous obstacles along the way.', 
                rating: 'PG', 
                reviews: [
                    { id: 4, author: "Judy Hopps", content: "My second favorite family movie" },
                    { id: 5, author: "Peach Fuzz", content: "It was alright." }
                ]
            },
            {
                id: 3,
                title: 'Fight Club', 
                image: 'https://i.imgur.com/zwHacfV.png', 
                synopsis: 'A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler\'s attention.', 
                rating: 'R', 
                reviews: [
                    { id: 6, author: "Some Guy", content: "This is CRAZY!" },
                    { id: 7, author: "Bubbles", content: "I like soap." }
                ]
            },
            {
                id: 4,
                title: 'Lord of the Rings: The Fellowship of the Ring', 
                image: 'https://i.imgur.com/JX13pHO.png', 
                synopsis: 'The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.', 
                rating: 'PG-13', 
                reviews: [
                    { id: 8, author: "Billie Holiday", content: "You have my axe!" },
                    { id: 9, author: "Juniper Lee", content: "And my bow!" }
                ]
            }
        ];
        this.setState({ movies: sampleMovies });
    }

    render() {
        const { movies } = this.state;

        return (
            <div className="movie-list-container">
                {movies.map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        );
    }
}

export default MovieListContainer;