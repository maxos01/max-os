window.onload = pageLoad;

function pageLoad(){
	var btnStart = document.getElementById('start');
	btnStart.onclick = startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');

	timer = setInterval(timeCount, 1000);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#squares-layer div");
		x.innerHTML = second;
		second--;

		if (second <= -1) {
			clearInterval(timer);
			alert("You Lose");
		}
		if(allbox.length <= 0 ) {
			clearInterval(timer);
			alert("You Win");
		}
		
	}
}

function addBox(){

	var numbox = document.getElementById('numbox').value; // จำนวนกล่อง
	var parseIntNumber = parseInt(numbox);
	var squaresLayer = document.getElementById('squares-layer') //
	var colorDrop = document.getElementById('color').value;
	for (var i =0; i< parseIntNumber;i++){
		console.log('hello')
		var tempbox = document.createElement('div');
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.backgroundColor = colorDrop;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	let clickbox = document.getElementById('squares-layer');
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		clickbox.removeChild(box);
	}
}



function clearScreen(){
	var allbox = document.querySelectorAll("squares-layer div");
	var conbox = document.getElementById("#squares-container");

	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		conbox.parentNode.removeChild(allbox[i]);
	}
}