function random(){
    return "#" + Math.floor(Math.random()*0xFFFFFF).toString(16);
}
const button = document.querySelector("button");
button.addEventListener("click", function(){
    document.body.style.backgroundColor = random();
});