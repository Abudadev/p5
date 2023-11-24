function preload(){

}

function setup(){
 c = createCanvas(450,450);
 c.center();
 video = createCapture(VIDEO);
 video.hide();
}

function draw(){
    image(video,0,0,425,425);

    square(0, 0, 75);
    square(350,350,75);
    square(0,350,75);
    square(350,0,75);

    rect(0,0,425,25,3);
    rect(0,400,425,25,3);
    rect(400,0,25,425,3);
    rect(0,0,25,425,3);
}

function takepic(){
    save("BirthdayPicture.png");
}

