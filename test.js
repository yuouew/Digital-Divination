$(document).ready(function(){

  $("#inputbox").focus(function() {
    $(this).val('');
  });
  
  var magic8Ball = {};
  magic8Ball.listofanswers = ["ur mom", "like probably lol", "bruh moment", "i think so yea", "slayyy", "like totally", "so camp", "bros cooked", "whipped", "lmao", "nahh man", "ur cooked", "idk mann", "poggers champion!!!11!!", "why r u asking me", "idk", "cool story bro", "thats rough buddy", "ok bucko", "gotcha buckaroo"];

  $("#answer").hide();
  
  var onClick = function()
  {
    
    $("#answer").hide();
    $("#8ball").attr("src", "1.JPG");
    
    var question = $("#inputbox").val();

    if (question === "" || question === "Enter Question Here...") {
      $("#answer").text("Please enter a question..."); // Display a message
      $("#answer").fadeIn(1000);
      return; // Exit the function
    }

    magic8Ball.getAnswer(question);
  };
  
  $("#questionButton").click( onClick );

  magic8Ball.getAnswer = function(question)
  {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];
    
  //   $("#8ball").effect( "shake" );
    $("#answer").text( answer );
    $("#answer").fadeIn(3000);
    $("#8ball").attr("src", "2.JPG");

    console.log(question);
    console.log(answer);
  };
});