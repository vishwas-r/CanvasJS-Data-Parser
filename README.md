CanvasJS Chart DataParser
=========================

This plugin allows you to parse custom data-format to format accepted by CanvasJS


## CanvasJS
--------
CanvasJS is an HTML5 & JavaScript based Charting Library that runs on all modern devices including iPhone, Android, Desktops, etc. Charts are beautiful and API is very simple to use.

#### CanvasJS Features:

*   Simple API and easy to use
*   Supports 30+ different types of Charts / Graphs
*   10x faster than conventional Flash / SVG based Charting Libraries
*   Comes with Several beautiful looking themes
*   Well Maintained and Updated Documentation
*   Works across browsers (Chrome, Firefox, Safari, IE8+)
*   Can be integrated with Serverside and Frontend technologies like ASP.Net, PHP, Spring MVC, JSP, jQuery, Angular, React, etc.

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
