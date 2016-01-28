var team = [];


function addTile(e) {
    e.preventDefault()
    // $("button").submit()//don't know how to make this happen

    var pName = document.getElementById("player-name").value;
    var pPosition = document.getElementById("player-position").value;
    var pNumber = document.getElementById("player-number").value;
    var nextDude = new Player(pName, pPosition, pNumber);
    myPlayer(nextDude);
}
//<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="">
 
function Player(pName, pPosition, pNumber) {
    //debugger;
    this.name = pName;
    this.position = pPosition;
    this.numbber = pNumber;
    this.removeBtn = '<button class="cut">Remove</button>'
}
 
// adds card with "draft" button
function myPlayer(nextDude) {
    var wholeTile = '<div class="player-card">'
    var facePlate = '<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="">';
    var namePlate = '<h1>' + nextDude.name + '</h1>';
    var posPlate = '<h4>' + nextDude.position + '</h4>';
    var numPlate = '<h2># ' + nextDude.numbber + '</h2>';
    wholeTile = wholeTile + facePlate + namePlate + posPlate + numPlate + nextDude.removeBtn + "</div>"
    $(".player-roster").append(wholeTile)
    // $(".player-roster").append('<div class="player-card"></div>')
    //  $(".player-card").append(facePlate);
    //  $(".player-card").append(namePlate);
    //  $(".player-card").append(posPlate);
    //  $(".player-card").append(numPlate);
    //  $(".player-card").append(nextDude.removeBtn);
}

// this is the "remove" button function

    //debugger;
    //$(this, '.parent').remove();
//}
//$(document).ready(function(){
    $('.player-roster').on("click", 'button', function(){
        $(this).parent().remove();
    });
//});