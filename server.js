var express = require('express');
var app = express();

var headers = require("./headers");

var number = require("./number");
// var myNumber = number.Number();
// console.log(myNumber)
//import Number from "./number";
////import User from './user';


//var number =  require('./Number.js');

// set the port of our application
//process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

//var users=[{login:"",pass:""}];
var arrGames = [];
//var id=0;

app.use("/*",function (req,res,next) {
    headers.setHeaders(res);
    next();
});

//Router
app.get("/",function (req,res) {
    var myNumber = number.Number();
    // console.log(myNumber);
    var id= myNumber.generateNewNumber(4);
    var game ={"id":id,"number":myNumber};
    console.log(myNumber.toStr());
    arrGames[id]=game;
    // console.log(arrGames[id].id);
    res.end(JSON.stringify({"id":id}));
});

app.post("/",function (req,res) {
    var bodyStr = '';
    req.on("data",function(chunk){
        bodyStr += chunk.toString();
        // console.log(bodyStr);
    });
    req.on('end', function() {
        var arr=JSON.parse(bodyStr);
         // console.log(arr);
        var result={};
        if (arr && arr.id){
            var game = arrGames[arr.id];
//            console.log(game);
            if (game) {
                var myNumber = game.number;
                // console.log(result);
                result=myNumber.getAnswer(arr.numbers);
                // console.log(result);
            }
        }

        //res.send(JSON.stringify(result));
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(result));
    });
    // res.end(bodyStr);
});

// app.post('/userlogin', function(req, res) {
//     var parsedUrl = qs.parse(url.parse(req.url).query);
//     var email = parsedUrl.email || req.body.email;;
// });
// app.post('/', function(req, res){
//     var email = req.param('email', null);  // second parameter is default
// });
//
//
//     res.end(JSON.stringify(getCoords()));
//
// });

function getId(id){
    var game=arrGames[id]
    return game?game.number:0;
}

//
// //Router
// app.get("/xy",function (req,res) {
//     res.end(JSON.stringify(getCoords()));
// });
//
// function getCoords() {
//     var x0=100;
//     var y0=100;
//
//     var d=10;
//     var res = {};
//
//     res.x=x0+rand(d);
//     res.y=y0+rand(d);
//
//     return res;
// };
//
// function rand(x) {
//     return x * (2*Math.random()-1);
// };