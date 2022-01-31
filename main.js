function click()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/drscW2zkU/model.json', modelReady);
}
function modelReady() 
{
    classifier.classify(gotResults);
}
