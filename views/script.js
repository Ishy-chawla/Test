// Our labels along the x-axis
var Months = ["January","February","March","April","May","June","July","August"];
// For drawing the lines
var Rain = [50,110,80,105,200,220,225,350];
var Temp = [20,21,22,12,14,18,23,25];

var  p =[7704300,2613700,4827000,6039100,706500,518500];

var States = ["New south Wales","Western Australia","Queens Land","Victoria","South Australia","Tasmania"];
// For drawing the lines
var Pop_S = [7704300,2613700,4827000,6039100,1706500,518500];
var cott_S = [7000000,1044000,3440000,0,0,0];
var Pop_y	 = [22120064,22324503,22730728,23122028,23469509,23799556,24125848,24450561];
var cott_y = [27546600,27546600,22146360,13289420,14069840,14599870,14895000,15800590];

var pop = [24450561,24450561,24450561,24450561,24450561,24450561,24450561,24450561];
var Tom_S = [1873200,1100000,2109000,1330600,2168500,1343000];
var Tom_y = [34482000,28957000,32879000,40897000,30244000,35875000,31258000,48961000];
var Year = [2010,2011,2012,2013,2014,2015,2016,2017];

var Bar_S = [2000000,250000,435700,1950000,2300000,173000];
var Bar_y = [17995000,18221000,17472000,19174000,18646000,18993000,23506000,18900000];

var Rain_S = [1900,1600,1650,1850,1670,1900]
var Rain_Y = [701,705,476,430,478,446,545,504]

var Temp_S = [20,19,29,17,23,22]
var Temp_Y = [18,20,19,21,23,22,24,23]

function graph() 
{
  var ctx = document.getElementById("myChart");
	var ctx2 = document.getElementById("myChart2");

	var chosen1 = document.getElementById("cause");

	var chosen2 = document.getElementById("effect");

	var chosen3 = document.getElementById("xaxis");
  
  if(chosen1.value==1)
  {
    if(chosen2.value==1 & chosen3.value==1)
    {
      graph1();
    }
    else if(chosen2.value==1 & chosen3.value==2)
	  { 
      graph2();
    }
    else if(chosen2.value==2 & chosen3.value==1)
    {	
      graph3();
    }
    else if(chosen2.value==2 & chosen3.value==2)		
    {	
      graph4();
    }
    else if(chosen2.value==3 & chosen3.value==1)
    {	
      graph5();
    }
    else
    {	
      graph6();
		}
	}
  else if (chosen1.value==2)
  {
		if(chosen2.value==1 & chosen3.value==1)
	  {
      graph7();
    }
		else if(chosen2.value==1 & chosen3.value==2)
		{
        graph8();
    }
	  else if(chosen2.value==2 & chosen3.value==1)
	  {
      graph9();
    }
		else if(chosen2.value==2 & chosen3.value==2)
		{
      graph10();
    }
	  else if(chosen2.value==3 & chosen3.value==1)
		{
		 	graph11();
	  }
	  else
		{
		 	graph12();
		}
	}
  else if(chosen1.value==3)
  {	
    if(chosen2.value==1 & chosen3.value==1)
    {
		  graph13();
	  }
    else if(chosen2.value==1 & chosen3.value==2)
    {
  	  graph14();
	  }
    else if(chosen2.value==2 & chosen3.value==1)
    {
		  graph15();
	  }
    else if(chosen2.value==2 & chosen3.value==2)		
    {
		  graph16();
	  }
    else if(chosen2.value==3 & chosen3.value==1)
    {
		  graph17();
	  }
    else
    {
		  graph18();
	  }
}



/*var name =document.getElementById("name");
var email =document.getElementById("Email");
var contact =document.getElementById("Contact");
var sub =document.getElementById("Submit");

function store() {
	var firebaseRef = firebase.database().ref();
	var N_text = name.value;
	var e_text = email.value;
	var c_text = contact.value;
	
	firebaseRef.push().set(N_text);
	firebaseRef.push().set(e_text);
	firebaseRef.push().set(c_text);
}*/
function graph1()
{
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
    labels: Year,
    datasets: [
      { 
        data: Pop_y,
        label: "Population",
        backgroundColor	: "#B5FF9F",
        
        //fill: false
      },
      { 
        data: cott_y,
        label: "cotton yearly",
        backgroundColor: "#E5FF9F",
        //fill: false
      }
    ]
  }
});
document.getElementById("sol").innerHTML = "<font size=5 face = verdana> A solution can be achieved by investing in technology, thus helping increase food production without compromising quality.  In today’s world, there are a lot of sensor based technologies capable of identifying imperfections and can improve the quality of the yield, therefore reducing waste.  </font>";
}

function graph2()
{
  var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: States,
      datasets: [
        { 
          data: Pop_S,
          label: "Population",
          backgroundColor	: "#B5FF9F",
          
          //fill: false
        },
        { 
          data: cott_S,
          label: "cotton",
          backgroundColor: "#E5FF9F",
          //fill: false
        }
      ]
    }
  });
document.getElementById("sol").innerHTML = "<font size=5 face = verdana> A solution can be achieved by investing in technology, thus helping increase food production without compromising quality.  In today’s world, there are a lot of sensor based technologies capable of identifying imperfections and can improve the quality of the yield, therefore reducing waste.  </font>";
}
function graph3()
{
  var myChart3 = new Chart(ctx, {
	  type: 'bar',
	  data: {
	    labels: Year,
	    datasets: [
	      { 
	        data: Pop_y,
	        label: "Population",
	        backgroundColor	: "#B5FF9F",
	        
	        //fill: false
	      },
	      { 
	        data: Tom_y,
	        label: "tommato",
	        backgroundColor: "#E5FF9F",
	        //fill: false
	      }
	    ]
	  }
	});
document.getElementById("sol").innerHTML = "<font size=5 face = verdana> A solution can be achieved by investing in technology, thus helping increase food production without compromising quality.  In today’s world, there are a lot of sensor based technologies capable of identifying imperfections and can improve the quality of the yield, therefore reducing waste.  </font>";
}

function graph4()
{
  var myChart5 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: States,
      datasets: [
        { 
          data: Pop_S,
          label: "Population",
          backgroundColor	: "#B5FF9F",
          
          //fill: false
        },
        { 
          data: Tom_S,
          label: "tommato",
          backgroundColor: "#E5FF9F",
          //fill: false
        }
      ]
    }
  });
document.getElementById("sol").innerHTML = "<font size=5 face = verdana> A solution can be achieved by investing in technology, thus helping increase food production without compromising quality.  In today’s world, there are a lot of sensor based technologies capable of identifying imperfections and can improve the quality of the yield, therefore reducing waste.  </font>";
}
function graph5()
{
  var myChart3 = new Chart(ctx, {
	  type: 'bar',
	  data: {
	    labels: Year,
	    datasets: [
	      { 
	        data: Pop_y,
	        label: "Population",
	        backgroundColor	: "#B5FF9F",
	        
	        //fill: false
	      },
	      { 
	        data: Bar_y,
	        label: "Barley (Tonnes)",
	        backgroundColor: "#E5FF9F",
	        //fill: false
	      }
	    ]
	  }
	});
document.getElementById("sol").innerHTML = "<font size=5 face = verdana> A solution can be achieved by investing in technology, thus helping increase food production without compromising quality.  In today’s world, there are a lot of sensor based technologies capable of identifying imperfections and can improve the quality of the yield, therefore reducing waste.  </font>";
}
function graph6()
{
  var myChart5 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: States,
      datasets: [
        { 
          data: Pop_S,
          label: "Population",
          backgroundColor	: "#B5FF9F",
          
          //fill: false
        },
        { 
          data: Bar_S,
          label: "Barley (Tonnes)",
          backgroundColor: "#E5FF9F",
          //fill: false
        }
      ]
    }
  });
document.getElementById("sol").innerHTML = "<font size=5 face = verdana> A solution can be achieved by investing in technology, thus helping increase food production without compromising quality.  In today’s world, there are a lot of sensor based technologies capable of identifying imperfections and can improve the quality of the yield, therefore reducing waste.  </font>";
}

function graph7()
{
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Year,
      datasets: [
        { 
          data: cott_y,
          label: "Cotton",
          borderColor	: "#B5FF9F",
          
          fill: true
        }
      ]
    }
  });
  var myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: Year,
        datasets: [
          { 
            data: Rain_Y,
            label: "Rain (MM)",
            borderColor	: "#B5FF9F",
            
           fill: true
          }
        ]
      }
    });
  document.getElementById("sol").innerHTML = "<font size=5 >During excessive/high rainfall: <br><br>Mulching the space between the crops to be covered with 2-3-inch layer of dry crop residues so that the soil moisture can be conserved and prevent growth of weed. <br>Building ridges and furrow system of farming which can drain the water into a pond and used later for irrigation. <br>Raised bed crops on raised bed are least affected by flooding. <br>Deep drains along lower edge of the field to help drain the excess water into a pond or into the soil. <br>During Harvest time: harvest the crops that near mature just before the heavy rain starts. <br>Subsoiling to improve the productivity of crop through breaking hard layer of soil cause by water logging. This will allow the root system of the crop to expand much better<br><br>During less rainfall: <br><br>Use of No till cropping system which increases the water use efficiency hence you can you less water for more planting. This strategy works well for decreasing water availability. <br>Use of controlled traffic to allow centimeter precision when sowing crops therefore after harvesting one crop a new one can be planted between the rows of stubble. Retaining the stubble will protect soil form wind and also draw a lot of moisture from the ground with the less rains. <br>Farmers can construct farm ponds for harvesting rain water which can be used for supplementary irrigation of crops during short rains or drought. <br>For drought prone areas rotational grazing system should be used which helps keeping the land greener for longer.</font>";
}

function graph8()
{
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: States,
      datasets: [
        { 
          data: cott_S,
          label: "Cotton",
          borderColor	: "#B5FF9F",
          
          fill: true
        }
      ]
    }
  });
  var myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: States,
        datasets: [
          { 
            data: Rain_S,
            label: "Rain (MM)",
            borderColor	: "#B5FF9F",
            
           fill: true
          }
        ]
      }
    });
  document.getElementById("sol").innerHTML = "<font size=5 >During excessive/high rainfall: <br><br>Mulching the space between the crops to be covered with 2-3-inch layer of dry crop residues so that the soil moisture can be conserved and prevent growth of weed. <br>Building ridges and furrow system of farming which can drain the water into a pond and used later for irrigation. <br>Raised bed crops on raised bed are least affected by flooding. <br>Deep drains along lower edge of the field to help drain the excess water into a pond or into the soil. <br>During Harvest time: harvest the crops that near mature just before the heavy rain starts. <br>Subsoiling to improve the productivity of crop through breaking hard layer of soil cause by water logging. This will allow the root system of the crop to expand much better<br><br>During less rainfall: <br><br>Use of No till cropping system which increases the water use efficiency hence you can you less water for more planting. This strategy works well for decreasing water availability. <br>Use of controlled traffic to allow centimeter precision when sowing crops therefore after harvesting one crop a new one can be planted between the rows of stubble. Retaining the stubble will protect soil form wind and also draw a lot of moisture from the ground with the less rains. <br>Farmers can construct farm ponds for harvesting rain water which can be used for supplementary irrigation of crops during short rains or drought. <br>For drought prone areas rotational grazing system should be used which helps keeping the land greener for longer.</font>";
  }
function graph9()
{
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Year,
      datasets: [
        { 
          data: Tom_y,
          label: "Tomato",
          borderColor	: "#B5FF9F",
          
          fill: true
        }
      ]
    }
  });
  var myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: Year,
        datasets: [
          { 
            data: Rain_Y,
            label: "Rain (MM)",
            borderColor	: "#B5FF9F",
            
           fill: true
          }
        ]
      }
    });
  document.getElementById("sol").innerHTML = "<font size=5 >During excessive/high rainfall: <br><br>Mulching the space between the crops to be covered with 2-3-inch layer of dry crop residues so that the soil moisture can be conserved and prevent growth of weed. <br>Building ridges and furrow system of farming which can drain the water into a pond and used later for irrigation. <br>Raised bed crops on raised bed are least affected by flooding. <br>Deep drains along lower edge of the field to help drain the excess water into a pond or into the soil. <br>During Harvest time: harvest the crops that near mature just before the heavy rain starts. <br>Subsoiling to improve the productivity of crop through breaking hard layer of soil cause by water logging. This will allow the root system of the crop to expand much better<br><br>During less rainfall: <br><br>Use of No till cropping system which increases the water use efficiency hence you can you less water for more planting. This strategy works well for decreasing water availability. <br>Use of controlled traffic to allow centimeter precision when sowing crops therefore after harvesting one crop a new one can be planted between the rows of stubble. Retaining the stubble will protect soil form wind and also draw a lot of moisture from the ground with the less rains. <br>Farmers can construct farm ponds for harvesting rain water which can be used for supplementary irrigation of crops during short rains or drought. <br>For drought prone areas rotational grazing system should be used which helps keeping the land greener for longer.</font>";	
}

function graph10()
{
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: States,
      datasets: [
        { 
          data: Tom_S,
          label: "Tommato",
          borderColor	: "#B5FF9F",
          
          fill: true
        }
      ]
    }
  });
  var myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: States,
        datasets: [
          { 
            data: Rain_S,
            label: "Rain (MM)",
            borderColor	: "#B5FF9F",
            
           fill: true
          }
        ]
      }
    });
  document.getElementById("sol").innerHTML = "<font size=5 >During excessive/high rainfall: <br><br>Mulching the space between the crops to be covered with 2-3-inch layer of dry crop residues so that the soil moisture can be conserved and prevent growth of weed. <br>Building ridges and furrow system of farming which can drain the water into a pond and used later for irrigation. <br>Raised bed crops on raised bed are least affected by flooding. <br>Deep drains along lower edge of the field to help drain the excess water into a pond or into the soil. <br>During Harvest time: harvest the crops that near mature just before the heavy rain starts. <br>Subsoiling to improve the productivity of crop through breaking hard layer of soil cause by water logging. This will allow the root system of the crop to expand much better<br><br>During less rainfall: <br><br>Use of No till cropping system which increases the water use efficiency hence you can you less water for more planting. This strategy works well for decreasing water availability. <br>Use of controlled traffic to allow centimeter precision when sowing crops therefore after harvesting one crop a new one can be planted between the rows of stubble. Retaining the stubble will protect soil form wind and also draw a lot of moisture from the ground with the less rains. <br>Farmers can construct farm ponds for harvesting rain water which can be used for supplementary irrigation of crops during short rains or drought. <br>For drought prone areas rotational grazing system should be used which helps keeping the land greener for longer.</font>";	
}

function graph11()
{
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: Year,
			datasets: [
				{ 
					data: Bar_y,
					label: "Barley",
					borderColor	: "#B5FF9F",
					
					fill: true
				}
			]
		}
	});
	var myChart2 = new Chart(ctx2, {
			type: 'line',
			data: {
				labels: Year,
				datasets: [
					{ 
						data: Rain_Y,
						label: "Rain (MM)",
						borderColor	: "#B5FF9F",
						
					 fill: true
					}
				]
			}
		});
	document.getElementById("sol").innerHTML = "<font size=5 >During excessive/high rainfall: <br><br>Mulching the space between the crops to be covered with 2-3-inch layer of dry crop residues so that the soil moisture can be conserved and prevent growth of weed. <br>Building ridges and furrow system of farming which can drain the water into a pond and used later for irrigation. <br>Raised bed crops on raised bed are least affected by flooding. <br>Deep drains along lower edge of the field to help drain the excess water into a pond or into the soil. <br>During Harvest time: harvest the crops that near mature just before the heavy rain starts. <br>Subsoiling to improve the productivity of crop through breaking hard layer of soil cause by water logging. This will allow the root system of the crop to expand much better<br><br>During less rainfall: <br><br>Use of No till cropping system which increases the water use efficiency hence you can you less water for more planting. This strategy works well for decreasing water availability. <br>Use of controlled traffic to allow centimeter precision when sowing crops therefore after harvesting one crop a new one can be planted between the rows of stubble. Retaining the stubble will protect soil form wind and also draw a lot of moisture from the ground with the less rains. <br>Farmers can construct farm ponds for harvesting rain water which can be used for supplementary irrigation of crops during short rains or drought. <br>For drought prone areas rotational grazing system should be used which helps keeping the land greener for longer.</font>";	
}

function graph12()
{
  var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: States,
			datasets: [
				{ 
					data: Bar_S,
					label: "Barley",
					borderColor	: "#B5FF9F",
					
					fill: true
				}
			]
		}
	});
	var myChart2 = new Chart(ctx2, {
			type: 'line',
			data: {
				labels: States,
				datasets: [
					{ 
						data: Rain_S,
						label: "Rain (MM)",
						borderColor	: "#B5FF9F",
						
					 fill: true
					}
				]
			}
		});
	document.getElementById("sol").innerHTML = "<font size=5 >During excessive/high rainfall: <br><br>Mulching the space between the crops to be covered with 2-3-inch layer of dry crop residues so that the soil moisture can be conserved and prevent growth of weed. <br>Building ridges and furrow system of farming which can drain the water into a pond and used later for irrigation. <br>Raised bed crops on raised bed are least affected by flooding. <br>Deep drains along lower edge of the field to help drain the excess water into a pond or into the soil. <br>During Harvest time: harvest the crops that near mature just before the heavy rain starts. <br>Subsoiling to improve the productivity of crop through breaking hard layer of soil cause by water logging. This will allow the root system of the crop to expand much better<br><br>During less rainfall: <br><br>Use of No till cropping system which increases the water use efficiency hence you can you less water for more planting. This strategy works well for decreasing water availability. <br>Use of controlled traffic to allow centimeter precision when sowing crops therefore after harvesting one crop a new one can be planted between the rows of stubble. Retaining the stubble will protect soil form wind and also draw a lot of moisture from the ground with the less rains. <br>Farmers can construct farm ponds for harvesting rain water which can be used for supplementary irrigation of crops during short rains or drought. <br>For drought prone areas rotational grazing system should be used which helps keeping the land greener for longer.</font>";	
  }


function graph13()
{
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: Year,
			datasets: [
				{ 
					data: cott_y,
					label: "Cotton",
					borderColor	: "#B5FF9F",
					
					fill: true
				}
			]
		}
	});
	var myChart2 = new Chart(ctx2, {
			type: 'line',
			data: {
				labels: Year,
				datasets: [
					{ 
						data: Temp_Y,
						label: "Temp (Celsius)",
						borderColor	: "#B5FF9F",
						
					 fill: true
					}
				]
			}
		});
	document.getElementById("sol").innerHTML = "<font size=5 > <br>During High Temperatures: <br>Mulch well: This is the best way to shield the soil from the direct sunlight and reduce evaporation. <br> Using shade cloth screen in the small cultivating areas during the day times especially for crops like lettuce which do not tolerate hot weather. <br> Using drip irrigation or a soaker hose to ensure deep watering. <br>Avoid watering daily as it leaches away soil moisturizer, so use slow-release fertilizer every other week. <br>By improving the farm machinery- The emission of greenhouse gases can be reduced by improving the efficiency of farm machinery and can be accomplished by using the equipment that is best suited for the given farm type. <br>Adjusting plant and harvest times, expansion of crop lands to more permitting areas, , changing genotypes or species to those with more appropriate thermal time or heat stress tolerance, developing new germplasm with improved traits, altering fertilization rates and irrigation practices, and using climate forecasting to reduce production risks. <br> Crop rotation also helps to reduce the emission of greenhouse gases which is the main factor behind the increase in global temperature. <br><br>During Low Temperatures: <br><br>For extreme winters, setting up a winter tunnel can help extend the harvest of late –season green leafy crops. <br>Crop management Select crop species and varieties which will mature within the available freeze-free period. <br>Land clearing Thinning hedgerows or clearing forested areas can sometimes reduce the risk of frost in sloping terrain by allowing cold air to drain to lower areas.</font>";
}

function graph14()
{
  var myChart = new Chart(ctx, {
	  type: 'line',
	  data: {
	    labels: States,
	    datasets: [
	      { 
	        data: cott_S,
	        label: "Cotton",
	        borderColor	: "#B5FF9F",
	        
	        fill: true
	      }
	    ]
	  }
	});
	var myChart2 = new Chart(ctx2, {
		  type: 'line',
		  data: {
		    labels: States,
		    datasets: [
		      { 
		    	  data: Temp_Y,
			        label: "Temp (Celsius)",
		        borderColor	: "#B5FF9F",
		        
		       fill: true
		      }
		    ]
		  }
		});
	document.getElementById("sol").innerHTML = "<font size=5 > <br>During High Temperatures: <br>Mulch well: This is the best way to shield the soil from the direct sunlight and reduce evaporation. <br> Using shade cloth screen in the small cultivating areas during the day times especially for crops like lettuce which do not tolerate hot weather. <br> Using drip irrigation or a soaker hose to ensure deep watering. <br>Avoid watering daily as it leaches away soil moisturizer, so use slow-release fertilizer every other week. <br>By improving the farm machinery- The emission of greenhouse gases can be reduced by improving the efficiency of farm machinery and can be accomplished by using the equipment that is best suited for the given farm type. <br>Adjusting plant and harvest times, expansion of crop lands to more permitting areas, , changing genotypes or species to those with more appropriate thermal time or heat stress tolerance, developing new germplasm with improved traits, altering fertilization rates and irrigation practices, and using climate forecasting to reduce production risks. <br> Crop rotation also helps to reduce the emission of greenhouse gases which is the main factor behind the increase in global temperature. <br><br>During Low Temperatures: <br><br>For extreme winters, setting up a winter tunnel can help extend the harvest of late –season green leafy crops. <br>Crop management Select crop species and varieties which will mature within the available freeze-free period. <br>Land clearing Thinning hedgerows or clearing forested areas can sometimes reduce the risk of frost in sloping terrain by allowing cold air to drain to lower areas.</font>";	
}

function graph15()
{
  var myChart = new Chart(ctx, {
	  type: 'line',
	  data: {
	    labels: Year,
	    datasets: [
	      { 
	        data: Tom_y,
	        label: "Tomato",
	        borderColor	: "#B5FF9F",
	        
	        fill: true
	      }
	    ]
	  }
	});
	var myChart2 = new Chart(ctx2, {
		  type: 'line',
		  data: {
		    labels: Year,
		    datasets: [
		      { 
		    	  data: Temp_Y,
			        label: "Temp (Celsius)",
		        borderColor	: "#B5FF9F",
		        
		       fill: true
		      }
		    ]
		  }
		});
	document.getElementById("sol").innerHTML = "<font size=5 > <br>During High Temperatures: <br>Mulch well: This is the best way to shield the soil from the direct sunlight and reduce evaporation. <br> Using shade cloth screen in the small cultivating areas during the day times especially for crops like lettuce which do not tolerate hot weather. <br> Using drip irrigation or a soaker hose to ensure deep watering. <br>Avoid watering daily as it leaches away soil moisturizer, so use slow-release fertilizer every other week. <br>By improving the farm machinery- The emission of greenhouse gases can be reduced by improving the efficiency of farm machinery and can be accomplished by using the equipment that is best suited for the given farm type. <br>Adjusting plant and harvest times, expansion of crop lands to more permitting areas, , changing genotypes or species to those with more appropriate thermal time or heat stress tolerance, developing new germplasm with improved traits, altering fertilization rates and irrigation practices, and using climate forecasting to reduce production risks. <br> Crop rotation also helps to reduce the emission of greenhouse gases which is the main factor behind the increase in global temperature. <br><br>During Low Temperatures: <br><br>For extreme winters, setting up a winter tunnel can help extend the harvest of late –season green leafy crops. <br>Crop management Select crop species and varieties which will mature within the available freeze-free period. <br>Land clearing Thinning hedgerows or clearing forested areas can sometimes reduce the risk of frost in sloping terrain by allowing cold air to drain to lower areas.</font>";	
}

function graph16()
{
  var myChart = new Chart(ctx, {
	  type: 'line',
	  data: {
	    labels: States,
	    datasets: [
	      { 
	        data: Tom_S,
	        label: "Tomato",
	        borderColor	: "#B5FF9F",
	        
	        fill: true
	      }
	    ]
	  }
	});
	var myChart2 = new Chart(ctx2, {
		  type: 'line',
		  data: {
		    labels: States,
		    datasets: [
		      { 
		    	  data: Temp_Y,
			        label: "Temp (Celsius)",
			        borderColor	: "#B5FF9F",
		        
		       fill: true
		      }
		    ]
		  }
		});
	document.getElementById("sol").innerHTML = "<font size=5 > <br>During High Temperatures: <br>Mulch well: This is the best way to shield the soil from the direct sunlight and reduce evaporation. <br> Using shade cloth screen in the small cultivating areas during the day times especially for crops like lettuce which do not tolerate hot weather. <br> Using drip irrigation or a soaker hose to ensure deep watering. <br>Avoid watering daily as it leaches away soil moisturizer, so use slow-release fertilizer every other week. <br>By improving the farm machinery- The emission of greenhouse gases can be reduced by improving the efficiency of farm machinery and can be accomplished by using the equipment that is best suited for the given farm type. <br>Adjusting plant and harvest times, expansion of crop lands to more permitting areas, , changing genotypes or species to those with more appropriate thermal time or heat stress tolerance, developing new germplasm with improved traits, altering fertilization rates and irrigation practices, and using climate forecasting to reduce production risks. <br> Crop rotation also helps to reduce the emission of greenhouse gases which is the main factor behind the increase in global temperature. <br><br> During Low Temperatures: <br><br>For extreme winters, setting up a winter tunnel can help extend the harvest of late –season green leafy crops. <br>Crop management Select crop species and varieties which will mature within the available freeze-free period. <br>Land clearing Thinning hedgerows or clearing forested areas can sometimes reduce the risk of frost in sloping terrain by allowing cold air to drain to lower areas.</font>";	
}

function graph17()
{
  var myChart = new Chart(ctx, {
	  type: 'line',
	  data: {
	    labels: Year,
	    datasets: [
	      { 
	        data: Bar_y,
	        label: "Barley",
	        borderColor	: "#B5FF9F",
	        
	        fill: true
	      }
	    ]
	  }
	});
	var myChart2 = new Chart(ctx2, {
		  type: 'line',
		  data: {
		    labels: Year,
		    datasets: [
		      { 
		    	  data: Temp_Y,
			        label: "Temp (Celsius)",
			        	borderColor	: "#B5FF9F",
		        
		       fill: true
		      }
		    ]
		  }
		});
	document.getElementById("sol").innerHTML = "<font size=5 face = verdana> A solution can be achieved by investing in technology, thus helping increase food production without compromising quality.  In today’s world, there are a lot of sensor based technologies capable of identifying imperfections and can improve the quality of the yield, therefore reducing waste.  </font>";	
}

function graph18()
{
  var myChart = new Chart(ctx, {
	  type: 'line',
	  data: {
	    labels: States,
	    datasets: [
	      { 
	        data: Bar_S,
	        label: "Barley",
	        borderColor	: "#B5FF9F",
	        
	        fill: true
	      }
	    ]
	  }
	});
	var myChart2 = new Chart(ctx2, {
		  type: 'line',
		  data: {
		    labels: States,
		    datasets: [
		      { 
		    	  data: Temp_Y,
			        label: "Temp (Celsius)",
		        borderColor	: "#B5FF9F",
		        
		       fill: true
		      }
		    ]
		  }
		});
	document.getElementById("sol").innerHTML = "<font size=5 > <br> During High Temperatures: <br>Mulch well: This is the best way to shield the soil from the direct sunlight and reduce evaporation. <br> Using shade cloth screen in the small cultivating areas during the day times especially for crops like lettuce which do not tolerate hot weather. <br> Using drip irrigation or a soaker hose to ensure deep watering. <br>Avoid watering daily as it leaches away soil moisturizer, so use slow-release fertilizer every other week. <br>By improving the farm machinery- The emission of greenhouse gases can be reduced by improving the efficiency of farm machinery and can be accomplished by using the equipment that is best suited for the given farm type. <br>Adjusting plant and harvest times, expansion of crop lands to more permitting areas, , changing genotypes or species to those with more appropriate thermal time or heat stress tolerance, developing new germplasm with improved traits, altering fertilization rates and irrigation practices, and using climate forecasting to reduce production risks. <br> Crop rotation also helps to reduce the emission of greenhouse gases which is the main factor behind the increase in global temperature. <br><br> During Low Temperatures: <br><br>For extreme winters, setting up a winter tunnel can help extend the harvest of late –season green leafy crops. <br>Crop management Select crop species and varieties which will mature within the available freeze-free period. <br>Land clearing Thinning hedgerows or clearing forested areas can sometimes reduce the risk of frost in sloping terrain by allowing cold air to drain to lower areas.</font>";
}
}