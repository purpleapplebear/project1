const movies = [
  { title: "Jaws", director: "Steven Spielberg", year: "1975" },
  { title: "Star Wars", director: "George Lucas", year: "1977" },
  {
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    year: "2018"
  },
  { title: "Top Gun", director: "Tony Scott", year: "1986" },
  { title: "Justice League", director: "Zack Snyder", year: "2017" }
];

// Part 1 - Create a function to find a movie and output it's detail

/* function findMovie(movieTitle) {
  for (i of movies){
    if(i.title == movieTitle) {
      console.log(i)
    }
  }
}

findMovie("Star Wars")
 */
// Part 2 = Create a function to return a movie object

function returnMovie(movieTitle) {
  for (let i of movies) {
    if (i.title === movieTitle) {
      return i;
    }
    console.log(i);
  }
  console.log("Movie not found");
  return `Movie not found`;
}

myMovie = "Fake movie"

returnMovie(myMovie)

console.log(myMovie)

