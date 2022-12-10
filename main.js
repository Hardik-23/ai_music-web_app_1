
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
}

function draw()
{
    image(video, 0 , 0, 600, 500);
}
