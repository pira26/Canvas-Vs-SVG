class Banner {
	constructor() {

		let keyword = "Welcome";
		let canvas;
		let context;

		let bgCanvas;
		let bgContext;

		const denseness = 10;

		const parts = [];

		const mouse = {x:0,y:0};
		let mouseOnScreen = false;

	  const colors = ['rgb(0,27,64,0.8)', 'rgba(0,120,165,0.8)', 'rgba(143,14,17,0.8)', 'rgba(162,162,162,0.8)'];

		color: colors[Math.floor(Math.random() * colors.length)],

		this.initialize = (canvas_id) => {
			canvas = document.getElementById(canvas_id);
			context = canvas.getContext('2d');

			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			bgCanvas = document.createElement('canvas');
			bgContext = bgCanvas.getContext('2d');

			bgCanvas.width = window.innerWidth;
			bgCanvas.height = window.innerHeight;

			canvas.addEventListener('mousemove', MouseMove, false);
			canvas.addEventListener('mouseout', MouseOut, false);

			test();
		}

		const test = () => {
			bgContext.font = '330px impact';
			bgContext.fillText(keyword, 30, 400);

			clear();
			getCoords();
		}

		const getCoords = () => {
			let imageData, pixel, height, width;

			imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height);


		    for(height = 0; height < bgCanvas.height; height += denseness){
	            for(width = 0; width < bgCanvas.width; width += denseness){
	               pixel = imageData.data[((width + (height * bgCanvas.width)) * 4) - 1];

	                  if(pixel == 255) {
	                    drawCircle(width, height);
	                  }
	            }
	        }

	        setInterval( update, 40 );
		}

		const drawCircle = (x, y) => {
			parts.push(
				{c: colors[Math.floor(Math.random() * colors.length)],
				 x: x,
				 y: y,
				 x2: x,
				 y2: y,
				 v:{x:(Math.random() * 3) * 2 - 3 , y:(Math.random() * 3) * 2 - 3},
				}
			)
		}

		const update = () => {
			let i, dx, dy, sqrDist, scale;

			clear();
			for (i = 0; i < parts.length; i++){

				if (mouseOnScreen == true){

					parts[i].x2 += parts[i].v.x;
			        parts[i].y2 += parts[i].v.y;

			        if (parts[i].x2 > canvas.width || parts[i].x2 < 0) {
			            parts[i].v.x = -parts[i].v.x;
			        }

			        if (parts[i].y2 > canvas.height || parts[i].y2 < 0) {
			            parts[i].v.y = -parts[i].v.y;
			        }
				}
				else {
					parts[i].x2 = parts[i].x;
					parts[i].y2 = parts[i].y;
				}

			dx = parts[i].x2 - mouse.x;
		        dy = parts[i].y2 - mouse.y;
		        sqrDist =  Math.sqrt(dx*dx + dy*dy);
			scale = Math.max( Math.min( 6 - ( sqrDist / 10 ), 10 ), 1 );

			context.fillStyle = parts[i].c;
			context.beginPath();
			context.arc(parts[i].x2, parts[i].y2, 4 * scale ,0 , Math.PI*2, true);
			context.closePath();
		  context.fill();

			}
		}

		const MouseMove = (e) => {
		    if (e.layerX || e.layerX == 0) {
		    	mouseOnScreen = true;

		        mouse.x = e.layerX - canvas.offsetLeft;
		        mouse.y = e.layerY - canvas.offsetTop;
		    }
		}

		const MouseOut = (e) => {
			mouseOnScreen = false;
			mouse.x = -400;
			mouse.y = -400;

		}

		const clear = () => {
			context.fillStyle = '#ddd';
			context.beginPath();
	  		context.rect(0, 0, canvas.width, canvas.height);
	 		context.closePath();
	 		context.fill();
		}
}

}

const banner = new Banner();
banner.initialize("canvas1");
