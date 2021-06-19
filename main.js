Webcam.set({
    height:180,
    width:200,
    image_format:'png',
    png_quality:90
    })
    cam = document.getElementById("webcam");
    Webcam.attach(cam);
    function sni() {
        Webcam.snap(function(data_uri) {
            document.getElementById("cobwebcam").innerHTML ='<img id="hallo" src="'+data_uri+'">'
        });
        image = document.getElementById("hallo");
        classifier.classify(image, gottheResult)
    }
    function gottheResult(errors, result) {
        if (errors) {
            console.log(errors);
        }
            else {
                console.log(result);
                document.getElementById("Object").innerHTML = result[0].label;
                document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(2);

            }
        }
    

    console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iNZXwoBiw/model.json",loaded);
function loaded() {
console.log("Did the model really load?");
}

