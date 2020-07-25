class Player {
    constructor(){
this.name= null
this.index = 0 
this.distance = 0 

}
 getCount(){
     database.ref('playerCount').on("value",function (data){
playerCount=data.val();
     })
 }
updateCount (count){
database.ref('/').update({
    playerCount : count 
})
}
update (){
var playerIndex = "players/player"+playerCount;
    database.ref(playerIndex).set({
        name : this.name,
        distace: this.distance  
    
    })
    }
static getPlayerInfo (){
    database.ref('players').on("value",  (data)=>{
allPlayers=data.val()

        
    })
}



}
