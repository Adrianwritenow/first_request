const express =  require('express');
const mustacheExpress =require('mustache-express')
const people = require ('./people.json');
const app =  express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(request,response){
  response.send('(╯°□°)╯︵ ┻━┻ ︵ ╯(°□° ╯)')
});
app.get('/page_demo', function(request,response){
  response.sendFile( __dirname + '/real_webPage.html');
});

app.get('/dynamic_demo1', function(request,response){
    response.render('dynamic_1', {word:'cool'});

});
app.get('/me', function(request, response){
  response.render('me', {word:'Adrian Rodriguez'});
});
app.get('/people', function(request, response){
  response.render('peeps', {people: people});
});
app.get('/person_member/:name', function(request, response){
  let person = people.find(function(member){
    return member.name.toLowerCase() === request.params.name.toLowerCase();
  })
  response.render('person_member', person)
  // let index = parseInt(request.params.id);
  // response.render('person_member', people[index]);
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
});
