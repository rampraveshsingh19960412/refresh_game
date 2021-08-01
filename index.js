var randomnum1=Math.floor(Math.random()*6)+1
document.getElementsByClassName("img1")[0].setAttribute("src","dice"+randomnum1+".jpg");

var randomnum2=Math.floor(Math.random()*6)+1
document.getElementsByClassName("img2")[0].setAttribute("src","dice"+randomnum2+".jpg");

if(randomnum1>randomnum2){
document.querySelector("h1").innerHTML="Player 1 wins";
}else if(randomnum2>randomnum1){
  document.querySelector("h1").innerHTML="Player 2 wins";
}else{
  document.querySelector("h1").innerHTML="Draw";
}
