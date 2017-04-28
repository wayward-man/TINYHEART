var con1;
var con2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgPic=new Image();

var  canWidth;
var canHeight;

var ane;
var fruit;
var cur=new Date().getTime();
var mom;
var baby;

var mx;
var my;

var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];


var momEye=[];


var data;

var momBodyOra=[];
var momBodyBlue=[];

document.body.onload=game;
function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}

function init () {
	
	con1=document.getElementById('canvas1');//dish ,dush. UI
	con2=document.getElementById('canvas2');//background,ane,fruits
	ctx1=con1.getContext('2d');
	ctx2=con2.getContext('2d');
	
	bgPic.src="img/background.jpg";	
	
	canWidth=con1.width;
	canHeight=con1.height;
	
	
	ane=new aneObj();
	ane.init();
	
	fruit=new fruitObj();
	fruit.init();
	
	mom=new momObj();
	mom.init();
	
	baby=new babyObj();
	baby.init();
	
	con1.addEventListener('mousemove',onMouseMove,false);
	mx=canWidth*0.5;
	my=canHeight*0.5;
	
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";
	
	for(var i=0;i<8;i++){
		
		babyTail[i]=new Image();
		babyTail[i].src="img/babyTail"+i+".png"
	}
	
	for (var i=0;i<2;i++) {
		babyEye[i]=new Image();
		babyEye[i].src="img/babyEye"+i+".png"
	}
	
	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="img/babyFade"+i+".png";
	}
	//大鱼尾巴
	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src="img/bigTail"+i+".png";
	}
	//大鱼眼睛
	for(var i=0;i<2;i++){
		momEye[i] = new Image();
		momEye[i].src="img/bigEye"+i+".png";
	}
	
	//score
	data=new dataObj();
	
	for(var i=0;i<8;i++){
		momBodyOra[i]=new Image();
		momBodyBlue[i]=new Image();
		
		momBodyOra[i].src="img/bigSwim"+i+".png";
		momBodyBlue[i].src="img/bigSwimBlue"+i+".png";
	}
	
}

function gameloop(){
	requestAnimationFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime
	lastTime=now;
	
	if(deltaTime>40)
	deltaTime=0;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	momFruitsCollision();
	momBabyCollision();
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	data.draw();
}

function onMouseMove(e){
	
	if(!data.gameOver){
		
	if(e.offsetX||e.layerX){
		mx = e.offsetX==undefined?e.layerX:e.offsetX;
		my = e.offsetY==undefined?e.layerY:e.offsetY;
	}
	
	

	}
}
