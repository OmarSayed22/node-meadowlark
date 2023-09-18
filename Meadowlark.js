const express = require('express');

const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('getCurrentYear',()=>{
return new Date().getFullYear();
})
app.set('port',process.env.PORT ||3000);
app.use(express.static(__dirname+'/public'));
// app.engin('hbs',hbs.engin)
app.set('view engine', 'hbs');

app.get('/', (req, res) =>{
    res.send('<h1>Welcome<h1>')
});

app.get('/home', (req, res) =>{
res.render('home.hbs', {
    pageTitle: 'Home'
});
});
app.get('/about', (req, res) =>{

    var randomFortunes = fortunes[Math.floor(Math.random()*fortunes.length)]
res.render('about.hbs', {
    pageTitle: 'About', 
    body:'About Meadowlark Travel',
    fortunes: randomFortunes
});
});

var fortunes = [
    "Conquer your fears or they will conquer you.", "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.", "Whenever possible, keep it simple.",
    ];

app.listen(app.get('port'),()=>{

    console.log('Express server started on Localhost ' + app.get('port') + '; press ctrl+c to terminate.');});