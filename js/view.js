var screen = function(note, i) {
//	var ul = document.getElementById('list');
//	console.log("ul: " + ul);
//	document.getElementById("list").innerHTML = "";
//	for (var i = 0; i < todoArray.length; i++) {
//		var val = todoArray[i].note;
	
//	var list = "<% _.each(todoArray, function(name) { %> <li><%= name %></li> <% }); %>";
//	var text = _.template(list, {people : ['moe', 'curly', 'larry']});
	//	console.log("list: " + list);
//	var text = _.template(list, todoArray);
//	console.log("Text: " + text);
	var noteStyle = "activeNote";
	if (todoArray[i].activeStatus !== true) {
		noteStyle = "complitedNote";
	}
		text = "<li class= '" + noteStyle + "'><input type='checkbox' id='ch' onchange='changeStatus(\"" + i + "\")' >"
		text += note + 
			"<input type='button' class='remove' value='Remove' onclick='del(\"" + i + "\")'>" +
			"<a href=\"X\" onclick='del(\"" + i + "\")'>" + "</li>";
		document.getElementById("list").innerHTML += text;
//		document.getElementById("list").innerHTML += "<li>" + todoArray[i].note +
//			"<input type='button' value='Remove' onclick='del(" + val + ")'>" + "</li>";
//		document.getElementById("list").innerHTML += "<li>" + todoArray[i].note + "</li>";
//		}
}

var screenAll = function() {
	document.getElementById("list").innerHTML = "";
	for (var i = 0; i < todoArray.length; i++) {
		screen(todoArray[i].note, i);
	}
//	var list = "<% _.each(todoArray, function(name) { %> <li><%= name %></li> <% }); %>";
//	var text = _.template(list, todoArray);
//	document.getElementById("list").innerHTML = text;

}

var screenActive = function() {
	document.getElementById("list").innerHTML = "";
	for (var i = 0; i < todoArray.length; i++) {
		if (todoArray[i].activeStatus === true) {
			screen(todoArray[i].note, i);
		}
	}
}

var screenCompleted = function() {
	document.getElementById("list").innerHTML = "";
	for (var i = 0; i < todoArray.length; i++) {
		if (todoArray[i].activeStatus !== true) {
			screen(todoArray[i].note, i);
		}
	}
}