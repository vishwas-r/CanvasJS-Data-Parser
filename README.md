CanvasJS Chart DataParser
=========================

This plugin allows you to parse custom data-format to format accepted by [CanvasJS](https://canvasjs.com/)

#### How to Use?

### Importing Script
Import the CanvasJS & CanvasJS DataParser scripts
```
/* HTML Script Tag */
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script src="dist/canvasjs-dataparser.min.js"></script>

/* or */
import CanvasJS from './canvasjs.min';
window.CanvasJS = CanvasJS;
require('canvasjs-dataparser.min');

/* React */
import CanvasJSReact from './canvasjs.react';
window.CanvasJS = CanvasJSReact.CanvasJS;
require('canvasjs-dataparser.min');
```

To parse array of values to CanvasJS Chart, you can just call parseData method with array as parameter.
```
var chart = new CanvasJS.Chart("chartContainer", {
    .
    .
    .
    //Chart Options
    data: [{
        dataPoints: CanvasJS.parseData([71,55,50,65,95,68,28,34,14])
    }]
    .
    .
    .
    .
});
chart.render();
```
	
To render chart with data from JSON, you can call parseDataAndRender method with url to JSON file and the keys from JSON data as parameters.
```
var chart = new CanvasJS.Chart("chartContainer", {
    .
    .
    .
    //Chart Options
    data: [{
        type: "line"
    },{
        type: "line"
    }]
    .
    .
    .
    .
});
chart.parseJSONAndRender("https://api.npoint.io/6f8153fa498ba8522ab8", {x: "date", y: "units"}); //JSON file has data with the keys date and units, which are mapped to x & y in the chart
```
    

#### Resources:

Code: [Github Repo](https://github.com/vishwas-r/CanvasJS-Data-Parser)

Documentation: [CanvasJS Documentation](https://canvasjs.com/docs/)

##### Note: 
- Plugin was last tested with **CanvasJS Chart v3.7.24GA**
- This plugin requires you to have CanvasJS License. Please visit **[CanvasJS](https://canvasjs.com/license/)** for more info.

<a href="https://www.buymeacoffee.com/vishwas.r" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="200"/></a>