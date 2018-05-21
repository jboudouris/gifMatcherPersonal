var socket = io();
socket.on('message', function(data) {
  console.log(data);
});

// tracks the current scores of each player, starts at 0
var player1Score = 0;
var player2Score = 0;
var player3Score = 0;
var player4Score = 0;

// sets the displayed values to the players current scores
function showScores() {
  document.getElementById("p1score").innerHTML = player1Score;
  document.getElementById("p2score").innerHTML = player2Score;
  document.getElementById("p3score").innerHTML = player3Score;
  document.getElementById("p4score").innerHTML = player4Score;
}

// 
function fillCards() {

}
