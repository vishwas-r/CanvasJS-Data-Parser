(function() {
	var CanvasJS = window.CanvasJS || CanvasJS ? window.CanvasJS : null;
	if(CanvasJS && CanvasJS.Chart) {
		CanvasJS.parseData = function(data) {
			if(data && data.length > 0) {
        var dps = [];
				for(var i = 0; i < data.length; i++) {
        	/*
          Line/Column/Bar Charts: [[x1,y1],...]
          RangeArea/RangeColumn/RangeBar Charts: [[x1,y1,y2],...]
          Candlestick/OHLC Chart: [[x1,y1,y2,y3,y4],...]
          */
					if(data[i] && data[i].length > 0) {          	
            	if(data[i].length > 2) {
              	dps.push({x: data[i][0], y: data[i].shift()});
              } else {
              	dps.push({x: data[i][0], y: data[i][1]});
              }
          } else {
          	dps.push({y: Number(data[i])});
          }
				}
			}
      return dps;
		}
	}
})();