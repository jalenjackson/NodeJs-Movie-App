let express = require("express");
let app = express();
var routes = require('./routes');
var path = require("path");
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
//Routes

//home
app.get("/",routes.home);

app.get("/star_wars_episode/:episode_number?", routes.movie_single);

app.get("*",routes.notFound);



app.listen(3000,()=>{
    console.log("app is running on port 3000")
});

