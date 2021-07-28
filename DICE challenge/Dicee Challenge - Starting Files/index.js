var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

var randomdiceimage1 = "dice" + random1 + ".png";
var randomdiceimage2 = "dice" + random2 + ".png";

var randomimagesource1 = "images/" + randomdiceimage1;
var randomimagesource2 = "images/" + randomdiceimage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomimagesource1);
image2.setAttribute("src",randomimagesource2);

if(random1 > random2)
{
  document.querySelector("h1").innerHTML  = "Player 1 wins";
}

else if (random2 > random1)
{
  document.querySelector("h1").innerHTML  = "Player 2 wins";
}
else
{
  document.querySelector("h1").innerHTML  = "a draw";
}
