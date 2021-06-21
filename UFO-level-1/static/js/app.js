// from data.js
var tableData = data;

// YOUR CODE HERE!
var tBody = d3.select("tbody");
var ufoTable = d3.select("table");

// var tClass = d3.select("class", "table table-striped");
ufoTable.attr("class", "table table-striped");

// Buikd table
function buildTable(tableData){
	tBody.html("");
	tableData.forEach((ufodata) =>{
		var row = tBody.append("tr");
		Object.entries(ufodata).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
};


buildTable(tableData);

// console.log(tableData);

// dateform for HTML + filter
//button
var filterBtn = d3.select("#filter-btn");
//other elements to be selected
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");


filterBtn.on("click", function(){

	// prevent page from refreshing
	// d3.event.preventDefault();

	//input element
	var inputValue = inputDate.property("value");
	console.log(inputValue);

	//filter database
	var newTable = tableData.filter(ufodata => ufodata.datetime === inputValue);
	console.log(newTable);

	buildTable(newTable);
});
