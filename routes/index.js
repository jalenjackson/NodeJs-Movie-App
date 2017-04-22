var moviesJSON = require('../movies.json');


exports.home = (req,res) => {
    var movies = moviesJSON.movies;
    res.render('home', {
        title: "star wars movies",
        movies: movies
    });
  };

exports.movie_single = (req,res) => {
    var episodeNumber = req.params.episode_number;
    res.send("this is the page for episode" + episodeNumber);
};



exports.notFound = (req,res) => {
    res.send("This is the wrong page !!!!!!!");
};
