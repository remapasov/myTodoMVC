var form = document.getElementById('data');
//var form = $("#data");
//console.log("Form: " + form);
var remove = document.getElementById('li');
//var check = document.getElementById('ch');
var input;
var todoArray = [];
var todo;
var text;

var todoClass = function(note) {
	this.note = note;
	this.activeStatus = true;
}

var del = function(index) {
	todoArray.splice(index, 1);
	screenAll();
};

var changeStatus = function(i) {
	todoArray[i].activeStatus = !todoArray[i].activeStatus;
//	console.log("Status: " + todoArray[i].activeStatus);
	screenAll();
}

var changeAllStatus = function() {
	for (var i = 0; i < todoArray.length; i++) {
		todoArray[i].activeStatus = !todoArray[i].activeStatus;
	}
	screenAll();
}

var clearCompleted = function() {
	var length = todoArray.length;
	for (var i = 0; i < length; i++) {
//		console.log("Status: " + todoArray[i].activeStatus);
		if (!todoArray[i].activeStatus) {
			todoArray.splice(i, 1);
			length = todoArray.length;
			i--;
		}
	}
	screenAll();
}

//console.log("form: " + form);

form.onsubmit = function() {
	todo = new todoClass(document.getElementById('input').value);
	
//	console.log("input: " + input)
//	alert("todo: " + todo.note);
	
	if (todo.note !== ""){
		todoArray.push(todo);
	
	}
	
//	console.log("arr: " + todoArray);
	
	screenAll();
	document.getElementById("input").value = "";
	return false;
};


//document.getElementById('che').addEventListener('change', function(event) {
//    var txt = event.target.checked ? 'On' : 'Off';
//    document.getElementById('out').innerHTML = txt;
//})
//
//document.getElementById('ch').addEventListener('change', function(event) {
////  var status = event.target.checked ? 'On' : 'Off';
//    i = document.getElementById('ch').name;
//    console.log("Id: " + i);
//	todoArray[i].activeStatus = !todoArray[i].activeStatus;
//	console.log("Status: " + todoArray[i].activeStatus);
//	
//	screenAll();
//	document.getElementById("input").value = "";
//	return false;
//})


//remove.onclick = function() {
//	var listElement = document.getElementById('li');
//	console.log("listValue: " + listElement.value);
//}
	
var compiled = _.template("hello: <%= name %>");

//вернет "hello: moe"
compiled({name : 'moe'});
console.log("compiled: " + compiled({name : 'moe'}))

var list = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";

// вернет "<li>moe</li><li>curly</li><li>larry</li>"
var t = _.template(list, {people : ['moe', 'curly', 'larry']});
console.log("List: " + list);

//todoArray[0] = "rrr";

var test = _.each(todoArray, function(num){ alert(num); });
console.log("Test: " + test);

var template = _.template("<b><%- value %></b>");
// вернет "<b>&lt;script&gt;</b>"
template({value : '<script>'});
console.log("Template: " + template);

