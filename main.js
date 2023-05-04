https://teachablemachine.withgoogle.com/models/stHHtDi_t/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/stHHtDi_t/model.json', modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+" , "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+" , "+random_number_g+", "+random_number_b+")";
        img_1 = document.getElementById("lion.jpeg");
        img_2 = document.getElementById("elephant.jpeg");
        img_3 = document.getElementById("dog.jpeg");
        img_4 = document.getElementById("cat.jpeg");
        if(results[0].label == "Clap"){
            img_1.src = 'lion.jpeg';
        }
        else if(results[0].label == "Bell"){
            img_2.src = 'elephant.jpeg';
        }
        else if(results[0].label == "Snap"){
            img_3.src = 'dog.jpeg';
        }
        else{
        img_4.src = 'cat.jpeg';  
        }
    }
}