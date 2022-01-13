const express = require('express');
const app = express();
const handlebars = require('express-handlebars').create({defaultLayer: 'main'})
const fortunes = require('./libs/fortune');



app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



app.set('port', process.env.PORT || 3000);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about', { fortune: fortunes.getFortunes });
});


// 404 catch-all handler (middleware)
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});
    // 500 error handler (middleware)
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), ()=>console.log(`app running in ${app.get('port')}`))