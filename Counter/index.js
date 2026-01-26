let broj=0;
document.getElementsByClassName("rez")[0].innerHTML=broj;
document.getElementsByClassName("plus")[0].onclick=function(){
    broj++;
    document.getElementsByClassName("rez")[0].innerHTML=broj;
}
document.getElementsByClassName("minus")[0].onclick=function(){
    broj--;
    document.getElementsByClassName("rez")[0].innerHTML=broj;
}