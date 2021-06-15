Webcam.set({
    height:180,
    width:200,
    image_format:'png',
    png_quality:90
    })
    webcam = document.getElementById("webcam");
    Webcam.attach(webcam);
    function sni() {
        Webcam.snap(function(data_uri) {
            document.getElementById("cobwebcam").innerHTML ='<img id="Halla" src="'+data_uri+'">'
        });
    }

    console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iNZXwoBiw/model.json",loaded);
function loaded() {
console.log("Did the model really load?");
}