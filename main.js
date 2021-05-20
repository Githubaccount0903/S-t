var speechRecognition=window.webkitSpeechRecognition;
var recongnition=new speechRecognition();
function start() {
    document.getElementById("text_box").innerHTML="";
    recongnition.start();
}
recongnition.onresult=function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML=content;
    console.log(content);
    if (content=="take my selfie") {
      console.log("taking selfie")
      speak();  
    }
}
function speak() {
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in five seconds";
    var  utterThis=new  SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },
    5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360, height:250,image_format:"png",png_quality:90
});
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}
function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}