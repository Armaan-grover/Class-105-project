Webcam.attach("webcam")
Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
});

function takeImg() {
    Webcam.snap(function (dataUrl) {
        document.getElementById("capturedPhoto").innerHTML = '<img id="capturedImage" src="' + dataUrl + '"/>'
    })
}
console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oSd2EuDxz/model.json", modelLoaded)
function modelLoaded() {
    console.log("hello I love MATHS")
}

function IdentifyImage() {
    console.log("Are we in the function?")
    img = document.getElementById("capturedImage");
    classifier.classify(img, gotResult)

}

function gotResult(error,results){
    console.log("we are in the function?")
if(error){
    console.error(error);

} else{
    console.log(results);
    document.getElementById("person").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
}

}