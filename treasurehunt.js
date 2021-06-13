var locationOfTreasure = Math.floor(Math.random() * 9) //stores location of treasure
var locationOfBomb = Math.floor(Math.random() * 9) //stores location of bomb

if(locationOfTreasure === locationOfBomb){ //cause a re roll to change the number
  locationOfTreasure = Math.floor(Math.random() * 9)
}
 const treasure = (id) => {


if(locationOfTreasure === id) {
  document.getElementById(id).innerHTML = "&#x1F48E"
  alert("Congrats! You win!")
}else if(locationOfBomb === id){
  document.getElementById(id).innerHTML = "&#x1F595"
  alert("Sorry, you lost 🥲")
}else{
  document.getElementById(id).innerHTML = "&#x1F615"
}

}

if(locationOfTreasure === id){
  alert("Congrats! You win!")
}else if(locationOfBomb === id){
  alert("Sorry, you lost 🥲")
}

// one square is treasure one is bomb
