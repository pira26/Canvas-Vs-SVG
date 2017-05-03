import React, { Component } from 'react';

class CanvasText extends Component {

  render(){

    banner = () => {
      const word = "WELCOME";
      let canvas;
      let context;

      let bgCanvas;
    	let bgContext;

    	const denseness = 10;

      const parts = [];

      const mouse = {x:-100, y:100};
      let mouseOnScreen = false;

      let count = 0;
      const interdot = 50;

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

		    start();
      }

    }

    start = () => {
      bgContext.fillStyle = "#000000";
		  bgContext.font = '300px impact';
		  bgContext.fillText(keyword, 85, 275);

      clear();
      getCoords();
    }

    clear =  () => {

    }

    getCoords = () => {
      
    }

    return(
      <div id='canvas'></div>
    )

  }

}

export default CanvasText;
