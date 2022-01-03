function preload(){
}

function setup(){
    canvas= createCanvas(640,480);
    canvas.position(500, 300);
    video= createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){
    //circle(50, 50, 80); circle(50, 430, 80); circle(590, 50, 80); circle(590, 430, 80);
    image(video, 160, 140, 300, 200);
  tint(tint_color);
  fill(	232, 44, 181);
   stroke(255, 0, 0);
    circle(50, 50, 80);
     circle(50, 430, 80);
      circle(590, 50, 80);
       circle(590, 430, 80);
        fill(248, 191, 232);
         stroke(0, 128, 0);
          rect(90, 40, 460, 20);
           rect(90, 420, 460, 20);
            rect(40, 90, 20, 300);
 rect(580, 90, 20, 300);


  
}

function take_snapshot(){
    save("my_selfie.png")
}

function filter_tint(){
    tint_color= document.getElementById("color_name").value;
}