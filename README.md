CanvasJS Chart DataParser
=========================

This plugin allows you to parse custom data-format to format accepted by [CanvasJS](https://canvasjs.com/)

#### How to Use?

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
    

#### Resources:

Code: [Github Repo](https://github.com/vishwas-r/CanvasJS-Data-Parser)

Documentation: [CanvasJS Documentation](https://canvasjs.com/docs/)

##### Note: 
- Plugin was last tested with **CanvasJS Chart v3.6.6GA**
- This plugin requires you to have CanvasJS License. Please visit **[CanvasJS](https://canvasjs.com/license/)** for more info.
