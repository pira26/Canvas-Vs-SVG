let mario = document.getElementById('mario'),
cxt = mario.getContext("2d")
i = 0;

drawMario = (cCap0,cCap1,cCap3,cCap4) => {

  if (!cCap0 || !cCap1 || !cCap3 || !cCap4){
  	colorCap0 = '#fd1316';
		colorCap1 = '#890105';
		colorCap3 = '#6e0001';
		colorCap4 = '#890105';
	}
	else  {
		colorCap0 = cCap0;
		colorCap1 = cCap1;
		colorCap3 = cCap4;
		colorCap4 = cCap3;
	}


	cxt.clearRect(0, 0, mario.width, mario.height);



	//The face ------------------------------------------------------------------

		grad = cxt.createRadialGradient(100,100,0,100,100,500);
		grad.addColorStop(0, "#ffecb7");
		grad.addColorStop(1, "#ba8365");





		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(62, 216);

		cxt.quadraticCurveTo(200,100,350, 216);
		cxt.lineTo(336, 303);
		cxt.bezierCurveTo(330,300, 380, 400,264, 433);
		cxt.quadraticCurveTo(200,480,140, 433);
		cxt.bezierCurveTo(20,410, 67, 300,62, 303);
		cxt.lineTo(62, 216);



		cxt.fill();

	// Ears ---------------------------------------------------------------------------------------------------------

	// Left ear

		grad = cxt.createLinearGradient(25,22,51,362)
		grad.addColorStop(0, "#c67862");
		grad.addColorStop(1, "#fee7b3");



		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(60, 364);

		cxt.bezierCurveTo(54,365, 10, 360,4, 290);
		cxt.bezierCurveTo(0,230, 40,246,55, 259);

		cxt.fill();


		rad = cxt.createLinearGradient(25,274,51,332)
		grad.addColorStop(0, "#9d563f");
		grad.addColorStop(1, "#fee7b3");


		cxt.fillStyle = grad;


		cxt.beginPath()
		cxt.moveTo(49, 326);

		cxt.bezierCurveTo(10,345, 10, 260,21, 268);
		cxt.bezierCurveTo(20,250, 40,266,48, 300);

		cxt.fill();

	// End Left Ear

	//Right ear

		grad = cxt.createLinearGradient(25,22,51,362)
		grad.addColorStop(0, "#ba8365");
		grad.addColorStop(1, "#cb9279");



		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(338, 364);

		cxt.bezierCurveTo(390,355, 390, 330,396, 290);
		cxt.bezierCurveTo(400,230, 350,246,345, 260);

		cxt.fill();


		rad = cxt.createLinearGradient(325,224,351,302)
		grad.addColorStop(0, "#553426");
		grad.addColorStop(1, "#ba8365");


		cxt.fillStyle = grad;


		cxt.beginPath()
		cxt.moveTo(349, 330);

		cxt.bezierCurveTo(400,345, 390, 260,381, 263);
		cxt.bezierCurveTo(370,250, 360,266,352, 300);

		cxt.fill();

	//end Right ear

	// Left sideburn

		grad = cxt.createLinearGradient(47,281,73,289)
		grad.addColorStop(0, "#5c1500");
		grad.addColorStop(1, "#812705");





		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(70, 210);

		cxt.bezierCurveTo(60,240, 90, 305,64, 308);
		cxt.quadraticCurveTo(62,319,59, 329);
		cxt.bezierCurveTo(40,325, 50, 305,45, 249);
		cxt.quadraticCurveTo(62,210,70, 210);


		cxt.fill();

		// right sideburn

		grad = cxt.createLinearGradient(330,263,354,276)
		grad.addColorStop(0, "#220a00");
		grad.addColorStop(1, "#481801");





		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(330, 203);


		cxt.quadraticCurveTo(340,190,357, 230);
		cxt.bezierCurveTo(354,345, 355, 315,342, 330);
		cxt.bezierCurveTo(335,330, 340, 330,335, 305);
		cxt.bezierCurveTo(320,270, 335, 300,330, 203);



		cxt.fill();

	// left eyebrow

		grad = cxt.createLinearGradient(132,184,131,202)
		grad.addColorStop(0, "#220a00");
		grad.addColorStop(1, "#481801");





		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(99, 222);

		cxt.bezierCurveTo(110,145, 155,155,171, 227);
		cxt.bezierCurveTo(135,205, 148,193,99, 222);


		cxt.fill();

		// right eyebrow

		grad = cxt.createLinearGradient(132,184,131,202)
		grad.addColorStop(0, "#220a00");
		grad.addColorStop(1, "#481801");



		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(230, 228);

		cxt.bezierCurveTo(250,145, 295,155,302, 222);
		cxt.bezierCurveTo(270,205, 263,193,230, 228);



		cxt.fill();

		// Left eye -------------------------------------------------------------------------------------------------------


		// white

		grad = cxt.createLinearGradient(140,313,144,227)
		grad.addColorStop(0, "#dad4d6");
		grad.addColorStop(1, "#ffffff");




		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(140, 313);

		cxt.bezierCurveTo(94,307, 110,229,144, 227);
		cxt.bezierCurveTo(177,220,197,300,140, 313);

		cxt.fill();


		// light blue
		grad = cxt.createRadialGradient(157,285,0,159,285,59);
		grad.addColorStop(0, "#297bd1");
		grad.addColorStop(1, "#00edfe");





		cxt.fillStyle = grad;
		cxt.strokeStyle = "#3580b7";
		cxt.lineWidth = 2;
		cxt.beginPath()
		cxt.moveTo(144, 305);

		cxt.bezierCurveTo(137,310, 110,246,156, 239);
		cxt.bezierCurveTo(185,235,183,310,144, 305);
		cxt.stroke();
		cxt.fill();

		// black



		cxt.fillStyle = "#000000";


		cxt.beginPath()
		cxt.moveTo(150, 300);

		cxt.bezierCurveTo(155,310, 120,256,155, 249);
		cxt.bezierCurveTo(167,250, 190,276,150, 300);


		cxt.fill();

		// white spot
		grad = cxt.createRadialGradient(158,263,0,156,263,5);
		grad.addColorStop(0, "#ffffff");
		grad.addColorStop(0.96,"#336ba4");
		grad.addColorStop(1, "#000000");


		cxt.fillStyle = grad;


		cxt.beginPath()
		cxt.moveTo(150, 300);

		cxt.arc(157,263,5,0,Math.PI*2,true);


		cxt.fill();

		// Blue spot

		grad = cxt.createRadialGradient(158,282,0,156,282,7);
		grad.addColorStop(0, "#170cd4");
		grad.addColorStop(1, "#000000");


		cxt.fillStyle = grad;


		cxt.beginPath()
		cxt.moveTo(150, 283);

		cxt.arc(157, 283,7,0,Math.PI*2,true);


		cxt.fill();

	// Right eye -------------------------------------------------------------------------------------------------------


		// white

		grad = cxt.createLinearGradient(140,313,144,227)
		grad.addColorStop(0, "#dad4d6");
		grad.addColorStop(1, "#ffffff");




		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(227, 283);

		cxt.bezierCurveTo(224,217, 265,209,284, 247);
		cxt.bezierCurveTo(287,250,297,310,261, 313);

		cxt.fill();


		// light blue
		grad = cxt.createRadialGradient(227,285,0,259,285,59);
		grad.addColorStop(0, "#297bd1");
		grad.addColorStop(1, "#00edfe");



		cxt.fillStyle = grad;
		cxt.strokeStyle = "#3580b7";
		cxt.lineWidth = 2;
		cxt.beginPath()
		cxt.moveTo(227, 283);

		cxt.bezierCurveTo(227,260, 230,226,260, 246);
		cxt.bezierCurveTo(267,252,283,290,258, 308);
		cxt.stroke();
		cxt.fill();

		// black



		cxt.fillStyle = "#000000";


		cxt.beginPath()
		cxt.moveTo(231, 285);

		cxt.bezierCurveTo(235,290, 220,246,251, 250);
		cxt.bezierCurveTo(257,250, 270,276,252, 297);

		cxt.fill();

		// white spot
		grad = cxt.createRadialGradient(247,263,0,246,263,7);
		grad.addColorStop(0, "#ffffff");
		grad.addColorStop(0.99,"#336ba4");
		grad.addColorStop(1, "#000000");


		cxt.fillStyle = grad;


		cxt.beginPath()


		cxt.arc(245,263,7,0,Math.PI*2,true);


		cxt.fill();

		// Blue spot

		grad = cxt.createRadialGradient(245,282,0,245,282,7);
		grad.addColorStop(0, "#170cd4");
		grad.addColorStop(1, "#000000");


		cxt.fillStyle = grad;


		cxt.beginPath()

		cxt.arc(246, 283,7,0,Math.PI*2,true);


		cxt.fill();

		//End eyes  -------------------------------------------------------------------------------------------------------

		//mustache -------------------------------------------------------------------------------------------------------

		grad = cxt.createRadialGradient(157,323,0,157,323,200);
		grad.addColorStop(0, "#28160c");
		grad.addColorStop(1, "#702404");



		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(91, 300);

		cxt.bezierCurveTo(100,345, 300, 345,310, 300);
		cxt.bezierCurveTo(320,320, 330, 350,294, 360);
		cxt.bezierCurveTo(300,390, 250, 390,251, 380);
		cxt.bezierCurveTo(230,410, 200, 390,200, 390);
		cxt.bezierCurveTo(180,410, 150, 390,151, 380);
		cxt.bezierCurveTo(140,390, 100, 380,108, 360);
		cxt.bezierCurveTo(100,365, 70, 335,91, 300);



		cxt.fill();

		// end mustache -------------------------------------------------------------------------------------------------------

		//Lips -------------------------------------------------------------------------------------------------------

		grad = cxt.createRadialGradient(200,400,0,200,400,50);
		grad.addColorStop(0, "#600002");
		grad.addColorStop(1, "#000000");


		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(145, 380);

		cxt.bezierCurveTo(130,415, 270, 415,255, 380);
		cxt.bezierCurveTo(270, 410,130,410, 145, 380);


		cxt.fill();

		// end lips -------------------------------------------------------------------------------------------------------

		//chin -------------------------------------------------------------------------------------------------------

		grad = cxt.createRadialGradient(170,425,0,170,425,80);
		grad.addColorStop(0, "#d0a580");
		grad.addColorStop(1, "#c09674");



		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(175, 420);

		cxt.bezierCurveTo(150,425, 260, 435,225, 420);
		cxt.bezierCurveTo(220, 420,120,429, 175, 420);


		cxt.fill();

		// end chin -------------------------------------------------------------------------------------------------------


		//nose -------------------------------------------------------------------------------------------------------

		grad = cxt.createRadialGradient(157,333,0,157,333,80);
		grad.addColorStop(0, "#fef9c2");
		grad.addColorStop(1, "#ba8365");





		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(137, 333);

		cxt.bezierCurveTo(140,260, 260, 260,264, 333);
		cxt.bezierCurveTo(260,400, 140, 400,137, 333);



		cxt.fill();

		// end nose -------------------------------------------------------------------------------------------------------

	// cap --------------------------------------------------------------------------------------------------------------------------------------------------------

		// BG cap

		grad = cxt.createRadialGradient(0,0,0,0,50,600);



		grad.addColorStop(0, colorCap0);
		grad.addColorStop(1, colorCap1);



		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(45, 255);

		cxt.bezierCurveTo(12,230, 10, 160,39, 120);
		cxt.bezierCurveTo(70,50, 150,7,200, 10);
		cxt.bezierCurveTo(330,15, 360, 120,365, 126);
		cxt.bezierCurveTo(400,200, 380,240,356, 255);
		cxt.bezierCurveTo(360,140, 240,130,200, 127);
		cxt.bezierCurveTo(160,130, 40,130,45, 255);
		cxt.fill();

		// End BG cap

		// 'M' CONTAINER

		grad = cxt.createLinearGradient(0,100,5,150);
		grad.addColorStop(0, "#ffffff");
		grad.addColorStop(1, "#cccccc");


		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(159, 130);

		cxt.bezierCurveTo(150,140, 110, 50,200, 43);
		cxt.bezierCurveTo(290,50, 250, 140,247, 130);

		cxt.fill();

		// 'M' on the cap

		grad = cxt.createLinearGradient(0,100,5,150);;
		grad.addColorStop(0, colorCap0);
		grad.addColorStop(1, colorCap1);


		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(169, 123);

		cxt.lineTo(152, 113);
		cxt.lineTo(181, 57);
		cxt.lineTo(200, 81);
		cxt.lineTo(221, 57);
		cxt.lineTo(248, 113);
		cxt.lineTo(230, 123);
		cxt.lineTo(218, 80);
		cxt.lineTo(200, 100);
		cxt.lineTo(183, 80);
		cxt.lineTo(169, 123);

		cxt.fill();

		grad = cxt.createLinearGradient(90,0,0,150);

		grad.addColorStop(1, colorCap0);
		grad.addColorStop(0, colorCap1);




		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(42, 230);

		cxt.bezierCurveTo(40,180, 80, 130,200, 125);
		cxt.bezierCurveTo(310,120, 360, 205,358, 230);
		cxt.bezierCurveTo(350,180, 250, 140,200, 145);
		cxt.bezierCurveTo(40,145, 50, 280,42, 230);


		cxt.fill();

		grad = cxt.createLinearGradient(90,0,0,150);


		grad.addColorStop(0, colorCap3);
		grad.addColorStop(1, colorCap4);




		cxt.fillStyle = grad;

		cxt.beginPath()
		cxt.moveTo(42, 235);

		cxt.bezierCurveTo(40,220, 80, 140,200, 143);
		cxt.bezierCurveTo(300,140, 360, 205,358, 230);
		cxt.bezierCurveTo(350,205, 250, 165,200, 165);
		cxt.bezierCurveTo(40,170, 50, 285,42, 235);

		cxt.fill();

	}

drawMario();
