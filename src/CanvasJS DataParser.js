(function () {
  var CanvasJS = window.CanvasJS || CanvasJS ? window.CanvasJS : null;
  if (CanvasJS && CanvasJS.Chart) {
    CanvasJS.parseData = function (data) {
      if (data && data.length > 0) {
        var dps = [];
        for (var i = 0; i < data.length; i++) {
          /*
          Line/Column/Bar Charts: [[x1,y1],...]
          RangeArea/RangeColumn/RangeBar Charts: [[x1,y1,y2],...]
          Candlestick/OHLC Chart: [[x1,y1,y2,y3,y4],...]
          */
          if (data[i] && data[i].length > 0) {
            if (data[i].length > 2) {
              dps.push({ x: data[i][0], y: data[i].shift() });
            } else {
              dps.push({ x: data[i][0], y: data[i][1] });
            }
          } else {
            dps.push({ y: Number(data[i]) });
          }
        }
        return dps;
      }
    }

    CanvasJS.Chart.prototype.parseJSONAndRender = function(url, datapointKeys) {
      var dps = [];

      var _this = this;
      fetch(url).then(function(response) {
        return response.json();
      }).then(function(jsonResponse) {
        if(datapointKeys.y && jsonResponse[0][datapointKeys.y].length > 0)
          dps = Array(jsonResponse[0][datapointKeys.y].length).fill([]);
          
        for(var j = 0; j < dps.length; j++) {
          dps[j] = [];
          for(var i = 0; i < jsonResponse.length; i++) {
            if(datapointKeys) {
              if(datapointKeys.y && jsonResponse[i][datapointKeys.y].length > 0) {
                dps[j].push({ 
                  "x": datapointKeys && datapointKeys.x && jsonResponse[i][datapointKeys.x] ? jsonResponse[i][datapointKeys.x] : i,
                  "y": datapointKeys && datapointKeys.y && jsonResponse[i][datapointKeys.y][j] ? jsonResponse[i][datapointKeys.y][j] : null
                });
              } else {
                dps.push({ 
                  "x": datapointKeys && datapointKeys.x && jsonResponse[i][datapointKeys.x] ? jsonResponse[i][datapointKeys.x] : i,
                  "y": datapointKeys && datapointKeys.y && jsonResponse[i][datapointKeys.y] ? jsonResponse[i][datapointKeys.y] : null
                });
              }
            }
          }
        }
        
        for(var i = 0; i < _this.options.data.length; i++) {
        	_this.options.data[i].dataPoints = dps[i];
        }
        _this.render();
      });
    }
  }
})();