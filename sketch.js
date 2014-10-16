function setup()
{
	createCanvas(800,600);
}

function draw()
{
	background(0);
	fill(255);
	ellipse(mouseX,mouseY,100,100);

	drawDount1(20,70,50,100,100);
	drawDount1(70,70,199,500,500);
	drawDount1(90,200,255,400,400);
	drawDount1(255,90,29,300,300);


}

function drawDount1(R,G,B,x,y)
{
	fill(R,G,B);
	ellipse(x,y,200,200);
	fill(0);
	ellipse(x,y,120,120);
}

