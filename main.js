https://teachablemachine.withgoogle.com/models/stHHtDi_t/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/stHHtDi_t/model.json', modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    console.log("gotResult");
}