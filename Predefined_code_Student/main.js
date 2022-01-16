x= 0;
y= 0;
draw_circle= "";
draw_rectangle= "";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById('status').innerHTML="System is listen speak or go home";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognized as"+content;
    if (content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing circle so wait or exit";
        draw_circle="set";
    }
    if (content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing rectangle so wait or fly away";
        draw_rectangle="set";
    }
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn, if not liking it then get out.";
        draw_circle="";
    }
    if(draw_rectangle=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="rectangle is drawn, if not liking it then get out.";
        draw_rectangle="";
        
    }
}