var team = [];
function addTile(){
    //debugger;
    var pName = document.getElementById("player-name").value;
        var pPosition = document.getElementById("player-position").value;
            var pNumber = document.getElementById("player-number").value;
            var nextDude = new Player( pName, pPosition, pNumber);
            myPlayer(nextDude);
}
 //<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="">
 
 function Player(pName, pPosition, pNumber){
     this.name = pName;
     this.position = pPosition;
     this.numbber = pNumber;
     this.removeBtn = "<button>Remove</button>"
 }
 
 // adds card with "draft" button
 function myPlayer(nextDude){
     $("player-card").append(nextDude);
 }