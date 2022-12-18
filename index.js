// alert('Kelsey - Little red hen');
let randomNumber1 = Math.ceil(Math.random() * 6);
let randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", randomImage1);


let randomNumber2 = Math.ceil(Math.random() * 6);
let randomeImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", randomeImage2);

if(randomImage1 > randomeImage2){
    document.querySelector('h1').innerHTML = "🚩 Player 1 wins!"
}
else if(randomeImage2 > randomImage1){
    document.querySelector('h1').innerHTML = "Player 2 wins 🚩!"
}
else{
    document.querySelector('h1').innerHTML = "Draw 🚧"
}