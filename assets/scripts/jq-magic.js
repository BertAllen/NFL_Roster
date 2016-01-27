var team = [];
function addTile(){
    var pName = document.getElementById("player-name").value;
        var pPosition = document.getElementById("player-position").value;
            var pNumber = document.getElementById("player-number").value;
            nextDude = new Player( pName, pPosition, pNumber);
}
 <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="">
 
 function Player(pName, pPosition, pNumber){
     this.name =pName;
     this.position=pPosition;
     this.numbber = pNumber;
 }