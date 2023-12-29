function playButton(e){
    // alert("Play")
    var element = document.getElementsByClassName("play");
    console.log(element);
    
    e.target.classList.toggle("playChange");
}