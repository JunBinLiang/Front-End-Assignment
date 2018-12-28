// get the random number for each player
var player1=Math.random() * 6+1;
player1=Math.floor(player1);
var player2=Math.random() * 6+1;
player2=Math.floor(player2);


//img string array
var imgArray=[];
for(var i=1;i<=6;i++)
{
    imgArray.push("images/dice"+i+".png")
}


// above are global variables


function compare(player1, player2){
    
    
    if(player1>player2)
    {
        document.getElementById("result").innerHTML="Player 1 win😂！";
       //document.getElementById("result").innerHTML=" </i>Player 1 Win!";
    }
        
    if(player1<player2)
    {
       document.getElementById("result").innerHTML="😂 Player 2 Win!";
    }
    
    if(player1===player2)
    {
      document.getElementById("result").innerHTML="😈No Winner, Play Again 😈?";
    }
    document.getElementsByClassName("img1")[0].setAttribute("src",imgArray[player1-1]);
    document.getElementsByClassName("img2")[0].setAttribute("src",imgArray[player2-1]);
              
}

compare(player1,player2);
