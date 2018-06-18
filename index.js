/*hp = $.get("http://hp-api.herokuapp.com/api/characters").then(function(data) {

data.forEach(function(characters){
	console.log(characters.name)+"Maison"+(characters.house);
$('#1').append('<div class="carousel-item active"><img class="d-block w-30" src="'+characters.image+'" width=200px height=300px alt="First slide"></div>'+characters.name+'<br />'+characters.house+'<br />')
}); 
});
*/
/*hp = $.get("http://hp-api.herokuapp.com/api/characters").then(function(data) {

data.forEach(function(characters){
	console.log(characters.name)+"Maison"+(characters.house);
$('#1').append('<img src="'+characters.image+'" width=200px height=300px></div>');
$('#name').append(characters.name+'<br /><br />');
$('#house').append(characters.house+'<br /><br />')
}); 
});*/
/*hp = $.get("http://hp-api.herokuapp.com/api/characters").then(function(data) {

data.forEach(function(characters){
$('#1').append('<div class="carousel-item"><img class="d-block w-100" src="'+characters.image+'"> width=200px height=300px</div>')};*/

hp = $.get("http://hp-api.herokuapp.com/api/characters").then(function(data) {
data.forEach(function(characters){
	$('#carou').append('<div class="card" style="width: 15rem;">\
  <img class="card-img-top" src="'+characters.image+'" alt="Card image cap">\
  <div class="card-body">\
    <p class="card-text">Student : '+characters.name+' <br />House : '+characters.house+'</p>\
  </div>\
</div>')})
});