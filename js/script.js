var form = $("#data");
//console.log("Form: ", form);
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

var changeAllStatus = function() {
	var mainCheckboxStatus = document.getElementById("checkAll").checked;
	for (var i = 0; i < todoArray.length; i++) {
		todoArray[i].activeStatus = !mainCheckboxStatus;
	}
	screenAll();
}

var clearCompleted = function() {
	var length = todoArray.length;
	var tempArray = [];
	for (var i = 0; i < length; i++) {
		if (todoArray[i].activeStatus) {
			tempArray.push(todoArray[i]);
		}
	}
	todoArray = tempArray;
	screenAll();
}


form.on ('submit', function() {
	todo = new todoClass(document.getElementById('input').value);
	
	if (todo.note !== ""){
		todoArray.push(todo);
	}
	
	screenAll();
	document.getElementById("input").value = "";
	return false;
});


//***************************
document.getElementById('but').onclick = function() {
	var att = document.getElementById('but').getAttribute('value');
	alert(att);
//	console.log("Attr: " + att);
}

	
var compiled = _.template("hello: <%= name %>");

//вернет "hello: moe"
compiled({name : 'moe'});
//console.log("compiled: " + compiled({name : 'moe'}))

var list = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";

// вернет "<li>moe</li><li>curly</li><li>larry</li>"
var t = _.template(list, {people : ['moe', 'curly', 'larry']});
//console.log("List: " + list);

//todoArray[0] = "rrr";

var test = _.each(todoArray, function(num){ alert(num); });
//console.log("Test: " + test);

var template = _.template("<b><%- value %></b>");
// вернет "<b>&lt;script&gt;</b>"
template({value : '<script>'});
//console.log("Template: " + template);

