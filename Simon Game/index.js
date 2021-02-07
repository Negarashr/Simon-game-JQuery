// $(".btn").click(function()
// {
//    if($(".btn").hasClass("green"))
//    {
//      var audio = new Audio("sounds/green.mp3");
//      audio.play();
//     }
//    else
//    {
//      var audio = new Audio("sounds/blue.mp3");
//      audio.play();
//
//    }
// });
var gamePattern=[];
var colorArray=["red","blue","green","yellow"];
var userPattern=[];
var levelCounter=0;
var started=false;

// $(document).keypress(function(){
//
// $("#level-title").text("level "+levelCounter);
// gameSequence();
//
// });
$(document).keypress(function() {

  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + levelCounter);
    gameSequence();
    started = true;
  }
});

function gameSequence(){
  levelCounter++;
  $("#level-title").text("Level " + levelCounter);

  var randomNumber=(Math.floor(Math.random() * 4));
  var selectedColor=colorArray[randomNumber];
  gamePattern.push(selectedColor);
//console.log(gamePattern);
$("#"+selectedColor).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
playsound(selectedColor);
}

$(".btn").click(function() {

  var userClickedbtn=$(this).attr("id");
  userPattern.push(userClickedbtn);
  var c=userPattern.length-1;
  playsound(userClickedbtn);
  animatePress(userClickedbtn);
  check(c);
  if(userPattern.length==gamePattern.length)
  {
    userPattern.length=0;
    setTimeout( function () {
      gameSequence();
    }
      , 800);

  }
  // $(this).addClass("pressed");
  //
  // setTimeout(function () {
  //   console.log(this);
  //   $(this).removeClass("pressed");
  // }, 800);


});
function playsound(name)
{
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
function check(i) {
  if(gamePattern[i]!=userPattern[i])
  {
    $("#level-title").text("Game Over!");
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 100);
    started=false;
    gamePattern.length=0;
    levelCounter=0;

  }
  else{
    console.log("nice");
  }

  // for(var i=0;i<gamePattern.length;i++)
  // {
  //   if(gamePattern[i]!=userPattern[i])
  //   {
  //
  //   }
  // }
  //
}
